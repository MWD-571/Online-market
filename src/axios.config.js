import axios from "axios";
const https = axios.create();
https.defaults.baseURL = `https://products-995a2-default-rtdb.firebaseio.com`;
export default https;   