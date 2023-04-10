import axios from "axios";

const baseUrl = "https://todolist-app-backendo.onrender.com/api/user";

const userPost = async (credentials) => {
  const data = axios.post(baseUrl, credentials);
  return data;
};

const userGet = async (id) => {
  const data = await axios.get(`${baseUrl}/${id}`);
  return data;
};

export default { userPost, userGet };
