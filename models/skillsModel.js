import mongoose from 'mongoose';

const skillsSchema = new mongoose.Schema(
  {
    Title: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    pers: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const Skills = mongoose.model('Skills', skillsSchema);

export default Skills;