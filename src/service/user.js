import axios from "axios";

const baseUrl = "http://localhost:3001/api/user";

const userPost = async (credentials) => {
  const data = axios.post(baseUrl, credentials);
  return data;
};

export default { userPost };
