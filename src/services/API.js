import axios from "axios";

const API_URL = "https://apirepoprovas.herokuapp.com";

const postTest = ({ body }) => axios.post(`${API_URL}/test`, body);
const getTestParams = () => axios.get(`${API_URL}/test/params`);
const getProfessorsTests = () => axios.get(`${API_URL}/test/professors`);
const getSubjectsTests = () => axios.get(`${API_URL}/test/subjects`);

export { postTest, getTestParams, getProfessorsTests, getSubjectsTests };
