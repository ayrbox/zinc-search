import axios from "axios";
import { NextApiHandler } from "next";
import config from "config";

const headers = config.get<Record<string, any>>("zinc.headers");
const host = config.get<string>("zinc.host");

const STUDENT_INDEX = "students";

const handler: NextApiHandler = async (req, res) => {
  try {
    const term = req.query.term as string;

    const url = `${host}/api/${STUDENT_INDEX}/_search`;

    const query = {
      search_type: "querystring",
      query: { term },
      from: 0,
      max_results: 10,
      fields: ["_all"],
    };
    const { data } = await axios.post(url, query, { headers });
    res.status(200).send(data);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ msg: "Error" });
  }
};

export default handler;
