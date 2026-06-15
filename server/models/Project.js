import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, maxlength: 120 },
    slug: { type: String, required: true, unique: true, trim: true, lowercase: true },
    summary: { type: String, required: true, trim: true, maxlength: 400 },
    description: { type: String, required: true, trim: true, maxlength: 4000 },
    technologies: [{ type: String, trim: true, maxlength: 40 }],
    imageUrl: { type: String, trim: true, default: "" },
    liveUrl: { type: String, trim: true, default: "" },
    sourceUrl: { type: String, trim: true, default: "" },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0, min: 0 },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "published"
    }
  },
  { timestamps: true }
);

projectSchema.index({ status: 1, featured: -1, order: 1 });

export default mongoose.model("Project", projectSchema);
