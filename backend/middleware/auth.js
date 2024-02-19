// import { UnauthenticatedError } from "../Errors/index.js";
// import jwt from "jsonwebtoken";

// const auth = async (req, res, next) => {
//   const token = req.cookies.token;
//   if (!token) {
//     throw new UnauthenticatedError("Authentication Invalid");
//   }
//   try {
//     const payload = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = { userId: payload.userId };
//     next();
//   } catch (err) {
//     throw new UnauthenticatedError("Authentication Invalid");
//   }
// };

// export default auth;
