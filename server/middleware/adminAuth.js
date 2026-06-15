import { timingSafeEqual } from "node:crypto";
import env from "../config/env.js";
import ApiError from "../utils/ApiError.js";

export default function adminAuth(request, _response, next) {
  const providedKey = request.get("x-admin-key") || "";
  const expectedKey = env.adminApiKey;

  const providedBuffer = Buffer.from(providedKey);
  const expectedBuffer = Buffer.from(expectedKey);
  const isValid =
    providedBuffer.length === expectedBuffer.length &&
    timingSafeEqual(providedBuffer, expectedBuffer);

  if (!isValid) {
    return next(new ApiError(401, "A valid admin API key is required."));
  }

  return next();
}
