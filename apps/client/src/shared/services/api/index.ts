import axios from "axios";
import { API_BASE_URL } from "../../constants/apiLisks";


const http = axios.create({
	baseURL: API_BASE_URL,
})

export {
	http
}
