import ApiError from "../utils/ApiError.js";

export default function validate(schema, source = "body") {
  return function validationMiddleware(request, _response, next) {
    const result = schema.safeParse(request[source]);

    if (!result.success) {
      const details = result.error.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message
      }));
      return next(new ApiError(400, "Validation failed.", details));
    }

    request[source] = result.data;
    return next();
  };
}
