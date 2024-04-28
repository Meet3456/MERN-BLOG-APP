import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      tolowercase: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      tolowercase: true
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// in mongoose.model('User', userSchema), 'User' is the name of the model and userSchema is the schema that we want to use for this model.In mongodb it is stored as 'users' collection.
const User = mongoose.model('User', userSchema);

// export the User model
export default User;
