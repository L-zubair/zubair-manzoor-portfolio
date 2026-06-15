import mongoose from "mongoose";
import { ZodError } from "zod";

export default function errorHandler(error, _request, response, _next) {
  let statusCode = error.statusCode || 500;
  let message = error.message || "Internal server error.";
  let details = error.details;

  if (error instanceof mongoose.Error.CastError) {
    statusCode = 400;
    message = "The supplied resource ID is invalid.";
  }

  if (error?.code === 11000) {
    statusCode = 409;
    message = "A resource with that unique value already exists.";
    details = error.keyValue;
  }

  if (error instanceof ZodError) {
    statusCode = 400;
    message = "Validation failed.";
    details = error.issues;
  }

  if (statusCode >= 500) {
    console.error(error);
  }

  response.status(statusCode).json({
    success: false,
    message,
    ...(details ? { details } : {}),
    ...(process.env.NODE_ENV === "development" && statusCode >= 500
      ? { stack: error.stack }
      : {})
  });
}
