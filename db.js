import mongoose from "mongoose";

const URL =
  "mongodb+srv://ishu9918663060:UA6emszGeho58LTn@cluster0.dnd6vc5.mongodb.net/";

const connectDB = async () => {
  await mongoose
    .connect(URL)
    .then(() => {
      console.log("DB Connected..");
    })
    .catch((err) => {
      console.log(err);
      console.log("hellllllo");
    });
};

export default connectDB;
