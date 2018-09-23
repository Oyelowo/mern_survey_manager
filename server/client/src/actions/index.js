import axios from "axios";
import { FETCH_USER } from "./actionTypes";

const fetchUser = () => {
  axios.get('/api/current_user')
}
