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

const teamUrl = "https://api.revelsmit.in/api/v1/admin/event/team-details/";
const individualUrl =
  "https://api.revelsmit.in/api/v1/admin/event/individual-details";

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
  const { data } = await fetchData(
    `https://api.revelsmit.in/api/v1/admin/user/user-list?page=1&search=${delegate}`
  );
  const { docs, totalDocs } = data;
  if (totalDocs !== 1) {
    return false;
  }
  if (docs[0].delegate_id !== delegate) {
    return false;
  }
  return true;
};

// const findUser = async (delegate) => {
//   const {data} = await fetchData()
// }

export const eventEntry = async (req, res) => {
  const { QRData } = req.body;
  const delegate = QRData;
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

// export const proshowReg = async (req, res) => {
//   const {QRData, day} = req.body;
//   const delegate = QRData;
//   const days = ["day1", "day2", "day3", "test"];
//   const ind = days.findIndex(day);
//   if(ind===-1){
//     throw new BadRequestError("Invalid Day, gadbad mat karo");
//   }
//   const
// }
