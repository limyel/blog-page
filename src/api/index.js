import request from "../utils/request";

export default {
  getPostInHome(params) {
    return request({
      url: "http://localhost:8003/post",
      data: params,
      method: "get"
    })
  },
  getPostDetail(slug) {
    return request({
      url: 'http://localhost:8003/post/' + slug,
      method: "get"
    })
  },
  getTagAll() {
    return request({
      url: "http://localhost:8003/tag",
      method: "get"
    })
  },
  getTagInfo(tagSlug) {
    return request({
      url: "http://localhost:8003/tag/" + tagSlug,
      method: "get"
    })
  },
  getAbout() {
    return request({
      url: "http://localhost:8003/about",
      method: "get"
    })
  },
  listPostByTag(slug) {
    return request({
      url: "http://localhost:8003/post/by-tag/" + slug,
      method: "get"
    })
  }
}
