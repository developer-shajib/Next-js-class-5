import mongoose from 'mongoose';
import { type } from 'os';

// Create Schema
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: false
    },
    age: {
      type: Number,
      required: false
    },
    password: {
      type: String,
      required: false
    },
    photo: {
      type: String,
      default: null
    },
    cell: {
      type: String,
      required: false
    },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other']
    },
    status: {
      type: Boolean,
      default: true
    },
    trash: {
      type: Boolean,
      default: false
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true
  }
);

// export schema
export default mongoose.models.User || mongoose.model('User', UserSchema);
