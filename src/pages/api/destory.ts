import axios from "axios";
import config from "config";
import { NextApiHandler } from "next";
import seedStudents from "../../../utils/students";

const headers = config.get<Record<string, any>>("zinc.headers");
const host = config.get<string>("zinc.host");

const STUDENT_INDEX = "students";

const handler: NextApiHandler = async (_, res) => {
  const students = await seedStudents();

  const indexUrl = `${host}/api/index/${STUDENT_INDEX}`;

  try {
    await axios.delete(indexUrl, { headers });
  } catch (err) {
    console.log("ERROR", err.message);
  }

  res.status(200).send({
    message: "Student index destroyed.",
  });
};

export default handler;
