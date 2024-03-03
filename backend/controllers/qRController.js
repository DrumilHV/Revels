import { StatusCodes } from "http-status-codes";
import {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
} from "../Errors/index.js";
import Commitee from "../models/Commitee.js";
import Entrance from "../models/Entrance.js";
import Event from "../models/Event.js";
import fetchData from "../utils/fetchData.js";
import Proshow from "../models/Proshow.js";
import CryptoJS from "crypto-js";
import moment from "moment-timezone";

const teamUrl = "https://api.revelsmit.in/api/v1/admin/event/team-details/";
const individualUrl =
  "https://api.revelsmit.in/api/v1/admin/event/individual-details";

const decryptPassword = (text, encryptionKey) => {
  const bytes = CryptoJS.AES.decrypt(text, process.env.SECRET_KEY);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};

const findTeam = async (delegate, eventId) => {
  let page = 1;
  do {
    const { data } = await fetchData(
      teamUrl + eventId.toString() + `?page=${page}`
    );
    const foundTeam = data.docs.find((team) => team.delegate_id === delegate);
    if (foundTeam) {
      return foundTeam;
    }
    if (!data.hasNextPage) break;
    else page++;
  } while (true);
  return null;
};

const findIndividual = async (delegate, eventId) => {
  let page = 1;
  do {
    const { data } = await fetchData(
      individualUrl + `?event_id=${eventId.toString()}` + `&page=${page}`
    );
    const foundTeam = data.docs.find((team) => team.delegate_id === delegate);
    if (foundTeam) {
      return foundTeam;
    }
    if (!data.hasNextPage) break;
    else page++;
  } while (true);
  return null;
};

const checkUser = async (delegate) => {
  let page = 1;
  do {
    const { data } = await fetchData(
      `https://api.revelsmit.in/api/v1/admin/user/user-list?page=${page}&search=${delegate}`
    );
    const { docs, totalDocs } = data;
    for (const doc of docs) {
      if (doc.delegate_id === delegate) {
        return true;
      }
    }
    if (!data.hasNextPage) break;
    else page++;
  } while (true);
  return false;
};

const findProshowUser = async (delegate) => {
  let page = 1;
  do {
    const { data } = await fetchData(
      `https://api.revelsmit.in/api/v1/admin/qr-code/list?page=${page}&search=${delegate}&proshow_event_day=1&status=0`
    );
    const foundTeam = data.docs.find((team) => team.delegate_id === delegate);
    if (foundTeam) {
      return foundTeam;
    }
    if (!data.hasNextPage) break;
    else page++;
  } while (true);
  return null;
};

export const eventEntry = async (req, res) => {
  const { QRData } = req.body;
  let delegate = decryptPassword(QRData);
  const userId = req.user.userId;
  if (userId !== "PROSHOW123") {
    const user = await Commitee.findOne({ _id: userId });
    if (!user) {
      throw new UnauthenticatedError("ISSUE HOGYA HAI");
    }
    if (!(await checkUser(delegate))) {
      throw new NotFoundError("user not found");
    }
    const event = await Event.findOne({ _id: user.eventId });
    if (!event) {
      throw new NotFoundError("NOT FOUND ISSUE");
    }
    const entry = await Entrance.findOne({
      eventId: event._id,
      delegateId: delegate,
    });
    if (entry) {
      throw new BadRequestError("Entry already done!");
    }
    let team;
    if (event.team_type) {
      team = await findTeam(delegate, event._id);
    } else {
      team = await findIndividual(delegate, event._id);
    }
    if (!team) {
      throw new BadRequestError("Registeration details not found");
    }
    await Entrance.create({ delegateId: delegate, eventId: event._id });
    res.status(StatusCodes.OK).json({ team });
  } else {
    const proshow = await Proshow.findOne({ delegate_id: delegate });
    if (!proshow) {
      throw new BadRequestError("You did not register for proshow");
    }
    if (!proshow[process.env.PROSHOW_DAY]) {
      throw new BadRequestError("You have not booked for this day!");
    }
    if (proshow[`e_${process.env.PROSHOW_DAY}`]) {
      throw new BadRequestError("Entry already done");
    }
    proshow[`e_${process.env.PROSHOW_DAY}`] = true;
    await proshow.save();
    proshow.day1 = undefined;
    proshow.day2 = undefined;
    proshow.day3 = undefined;
    proshow.test = undefined;
    proshow.e_day1 = undefined;
    proshow.e_day2 = undefined;
    proshow.e_day3 = undefined;
    proshow.e_test = undefined;
    res.status(StatusCodes.OK).json({ team: proshow });
  }
};

const registrationTimings = {
  day1: {
    startTime: "2024-03-02 10:00:00",
    endTime: "2024-03-06 12:00:00",
    maxLimit: 3000,
  },
  day2: {
    startTime: "2024-03-04 10:00:00",
    endTime: "2024-03-07 12:00:00",
    maxLimit: 3000,
  },
  day3: {
    startTime: "2024-03-04 10:00:00",
    endTime: "2024-03-09 12:00:00",
    maxLimit: 20000,
  },
  test: {
    startTime: "2024-03-02 10:00:00",
    endTime: "2024-03-10 12:00:00",
    maxLimit: 30000,
  },
};

export const proshowReg = async (req, res) => {
  const { QRData, day } = req.body;

  if (!QRData || !day) {
    throw new BadRequestError("Invalid Request");
  }
  let delegate = decryptPassword(QRData);
  const days = ["day1", "day2", "day3", "test"];
  const ind = days.findIndex((d) => d === day);
  if (ind === -1) {
    throw new BadRequestError("Invalid Day, gadbad mat karo");
  }
  const currentTime = moment().tz("Asia/Kolkata");
  const startTime = moment(
    registrationTimings[day].startTime,
    "YYYY-MM-DD HH:mm:ss"
  ).tz("Asia/Kolkata");
  const endTime = moment(
    registrationTimings[day].endTime,
    "YYYY-MM-DD HH:mm:ss"
  ).tz("Asia/Kolkata");
  if (currentTime.isBefore(startTime) || currentTime.isAfter(endTime)) {
    throw new BadRequestError("Registeration not yet open");
  }
  if (currentTime.isAfter(endTime)) {
    throw new BadRequestError("Registeration closed");
  }

  const maxLimit = registrationTimings[day].maxLimit;
  const registrationCount = await Proshow.countDocuments({ [day]: true });
  if (registrationCount >= maxLimit) {
    throw new BadRequestError("Maximum registrations reached");
  }

  const ProshowExists = await Proshow.findOne({ delegate_id: delegate });
  if (ProshowExists) {
    if (ProshowExists[day] === true) {
      throw new BadRequestError("Already Registered for the event");
    }
    ProshowExists[day] = true;
    await ProshowExists.save();
    res.status(StatusCodes.OK).json({
      msg: `Successfully Registered ${ProshowExists.user_name} for ${day}`,
    });
  } else {
    const newProshow = await findProshowUser(delegate);
    if (!newProshow) {
      throw new BadRequestError("Please buy the Proshow pass first");
    } else {
      let user = { ...newProshow };
      user[day] = true;
      await Proshow.create(user);
      res.status(StatusCodes.OK).json({
        msg: `Successfully Registered ${Proshow.user_name} for ${day}`,
      });
    }
  }
};
