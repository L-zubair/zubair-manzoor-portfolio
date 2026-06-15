import mongoose from "mongoose";

const achievementSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, maxlength: 140 },
    description: { type: String, required: true, trim: true, maxlength: 1000 },
    issuer: { type: String, trim: true, maxlength: 120, default: "" },
    date: { type: Date, required: true },
    credentialUrl: { type: String, trim: true, default: "" },
    imageUrl: { type: String, trim: true, default: "" },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0, min: 0 }
  },
  { timestamps: true }
);

achievementSchema.index({ featured: -1, date: -1, order: 1 });

export default mongoose.model("Achievement", achievementSchema);
