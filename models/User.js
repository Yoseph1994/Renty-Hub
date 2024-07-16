import { ref } from "joi";
import { model, Model, models, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Name is required"],
      minlength: [3, "Name should be at least 3 characters long"],
      maxlength: [12, "Name should not be more than 12 characters long"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email already exist"],
      validate: {
        validator: function (v) {
          // Normalize the email to lowercase
          const normalizedEmail = v.toLowerCase();
          // Validate the normalized email
          const regex = /^\S+@\S+\.\S+$/;
          return regex.test(normalizedEmail);
        },
        message: (props) => `${props.value} is not a valid email!`,
      },
    },
    image: {
      type: String,
      default: "https://robohash.org/%7BuserId%7D.png?s=40&bgset=set7",
    },
    bookmarks: {
      type: Schema.Types.ObjectId,
      ref: "Property",
    },
  },
  { timestamps: true }
);

const User = models.User || model("User", UserSchema);

export default User;
