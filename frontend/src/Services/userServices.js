import Axios from "./axiosServices";

const axios = new Axios();

const baseUrl = "http://localhost:4000";

export default class services {
    Registration = (data) => {
        return axios.Post(`${baseUrl}/registration`, data);
    };
    login = (data) => {
        return axios.Post(`${baseUrl}/login`, data);
    }

}