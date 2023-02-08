import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const Contact = mongoose.model('Contact', contactSchema);

export default Contact;

