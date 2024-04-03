import axios from "axios";
const api_url = process.env.VUE_APP_ENV_VARIABLE
const Api = axios.create({
    baseURL : `${api_url}/api`,
});
export default Api;