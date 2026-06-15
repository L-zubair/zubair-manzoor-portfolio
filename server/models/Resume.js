import mongoose from "mongoose";

const resumeEntrySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, maxlength: 140 },
    organization: { type: String, required: true, trim: true, maxlength: 140 },
    location: { type: String, trim: true, maxlength: 120, default: "" },
    startDate: { type: Date, required: true },
    endDate: { type: Date, default: null },
    current: { type: Boolean, default: false },
    description: { type: String, required: true, trim: true, maxlength: 2000 },
    highlights: [{ type: String, trim: true, maxlength: 300 }]
  },
  { _id: true }
);

const resumeSchema = new mongoose.Schema(
  {
    headline: { type: String, required: true, trim: true, maxlength: 160 },
    summary: { type: String, required: true, trim: true, maxlength: 2500 },
    email: { type: String, required: true, trim: true, lowercase: true },
    location: { type: String, trim: true, maxlength: 120, default: "" },
    resumeUrl: { type: String, trim: true, default: "" },
    skills: [{ type: String, trim: true, maxlength: 50 }],
    experience: [resumeEntrySchema],
    education: [resumeEntrySchema],
    active: { type: Boolean, default: true }
  },
  { timestamps: true }
);

resumeSchema.index({ active: 1, updatedAt: -1 });

export default mongoose.model("Resume", resumeSchema);
