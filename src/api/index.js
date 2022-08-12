import request from "../utils/request";

export default {
  getPostInHome(params) {
    return request({
      url: "http://localhost:8002/post",
      method: "get"
    })
  }
}
