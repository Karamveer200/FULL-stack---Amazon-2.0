import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-bbc95.cloudfunctions.net/api",
  //"http://localhost:5001/clone-bbc95/us-central1/api"
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

export default instance;
