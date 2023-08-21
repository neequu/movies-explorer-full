// import { INTERNAL_SERVER_STATUS } from '../utils/constants.js';

// export default function errorHandler(err, _, res, next) {
//   const { statusCode = INTERNAL_SERVER_STATUS, message } = err;
//   const errorMessage = statusCode === INTERNAL_SERVER_STATUS ? 'server error' : message;

//   res.status(statusCode).json({
//     message: errorMessage,
//   });

//   next();
// }
