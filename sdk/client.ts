import { AxiosRequestConfig } from "axios"
import { Api } from "./api"

const axiosConfig: AxiosRequestConfig = {
  baseURL: "http://localhost:8000",
  validateStatus: () => true,
}

const client = new Api(axiosConfig)

export default client