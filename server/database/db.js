import mongoose from "mongoose";

const Connection = async (username,password) => {
//   const password = "inshort"; // Replace this with your actual password
  const URL = `mongodb+srv://${username}:${password}@cluster0.vu6fj3n.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database", error);
  }
};

export default Connection;
