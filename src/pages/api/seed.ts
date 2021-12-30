import axios from "axios";
import config from "config";
import { NextApiHandler } from "next";
import seedStudents from "../../../utils/students";

const headers = config.get<Record<string, any>>("zinc.headers");
const host = config.get<string>("zinc.host");

const STUDENT_INDEX = "students";

const handler: NextApiHandler = async (_, res) => {
  const students = await seedStudents();

  const indexUrl = `${host}/api/index`;

  const query = {
    name: STUDENT_INDEX,
  };

  try {
    await axios.put(indexUrl, query, { headers });
  } catch (err) {
    console.log("ERROR", err.message);
  }

  const studentUrl = `${host}/api/${STUDENT_INDEX}/document`;

  students.forEach(
    async (student) => await axios.put(studentUrl, student, { headers })
  );

  res.status(201).send({
    message: "Student data injested.",
  });
};

export default handler;
