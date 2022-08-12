import request from "../utils/request";

export default {
  getPostInHome(params) {
    return request({
      url: "http://localhost:8002/post",
      data: params,
      method: "get"
    })
  },
  getPostDetail(slug) {
    return request({
      url: 'http://localhost:8002/post/' + slug,
      method: "get"
    })
  },
  getTagAll() {
    return request({
      url: "http://localhost:8002/tag",
      method: "get"
    })
  }
}
