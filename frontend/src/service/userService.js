import AxiosService from './axiosService';
const axios = new AxiosService();

const baseurl = "http://localhost:5000";


export default class userService {

    registration = (data) => {
        return axios.postMethod(`${baseurl}/registration`, data)
    }

    login = (data) => {
        return axios.postMethod(`${baseurl}/login`, data)
    }
}