import axios from "axios";

export const sendEmail = async (data: {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}) => {
  console.log("Starting sendEmail, node env is" + process.env.NODE_ENV);
  let base =
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000"
      : "http://api.alexprodev.com";

  return axios.post(base + `/send`, data);
};
