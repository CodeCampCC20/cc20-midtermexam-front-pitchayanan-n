import axios from "axios";

const base_URL = 'http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com'

const loginApi = {}
loginApi.login = async(input) => {
  return axios.post(`${base_URL}/api/V1/auth/login`, input)
}

export default loginApi