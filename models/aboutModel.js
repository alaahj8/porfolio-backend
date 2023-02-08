import mongoose from 'mongoose';

const aboutSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const About = mongoose.model('About', aboutSchema);

export default About;

