import mongoose from 'mongoose';

const heroSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const Hero = mongoose.model('Hero', heroSchema);

export default Hero;
