import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";

export function listResources(Model, options = {}) {
  return asyncHandler(async (request, response) => {
    const { page, limit, featured } = request.query;
    const filter = { ...(options.publicFilter || {}) };

    if (typeof featured === "boolean") {
      filter.featured = featured;
    }

    const skip = (page - 1) * limit;
    const [items, total] = await Promise.all([
      Model.find(filter)
        .sort(options.sort || { createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Model.countDocuments(filter)
    ]);

    response.status(200).json({
      success: true,
      data: items,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  });
}

export function getResource(Model, options = {}) {
  return asyncHandler(async (request, response) => {
    const item = await Model.findOne({
      _id: request.params.id,
      ...(options.publicFilter || {})
    }).lean();

    if (!item) {
      throw new ApiError(404, "Resource not found.");
    }

    response.status(200).json({ success: true, data: item });
  });
}

export function createResource(Model, { statusCode = 201, select } = {}) {
  return asyncHandler(async (request, response) => {
    const created = await Model.create(request.body);
    const data = select ? select(created) : created;
    response.status(statusCode).json({ success: true, data });
  });
}

export function updateResource(Model) {
  return asyncHandler(async (request, response) => {
    const item = await Model.findByIdAndUpdate(request.params.id, request.body, {
      new: true,
      runValidators: true
    });

    if (!item) {
      throw new ApiError(404, "Resource not found.");
    }

    response.status(200).json({ success: true, data: item });
  });
}

export function deleteResource(Model) {
  return asyncHandler(async (request, response) => {
    const item = await Model.findByIdAndDelete(request.params.id);

    if (!item) {
      throw new ApiError(404, "Resource not found.");
    }

    response.status(200).json({ success: true, message: "Resource deleted." });
  });
}
