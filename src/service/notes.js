import axios from "axios";

const baseUrl = "https://todolist-app-backendo.onrender.com/api/notes";

let token = null;

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

const getNotes = async (id) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  const notes = await axios.get(baseUrl, config);
  console.log(notes);
  return notes;
};

const createNotes = async (newObject) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };

  const request = axios.post(baseUrl, newObject, config);
  return request.then((res) => res.data);
};

const updateNotes = async (id, updateObject) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };

  const request = axios.put(`${baseUrl}/${id}`, updateObject, config);
  return request.then((res) => res.data);
};

const deleteNotes = async (id) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  const request = axios.delete(`${baseUrl}/${id}`, config);
  return request.then((res) => res.data);
};

export default { getNotes, setToken, createNotes, updateNotes, deleteNotes };
