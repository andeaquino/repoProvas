import axios from "axios";

const API_URL = "https://apirepoprovas.herokuapp.com";

const postTest = ({ body }) => axios.post(`${API_URL}/test`, body);
const getTestParams = () => axios.get(`${API_URL}/test/params`);

export { postTest, getTestParams };
