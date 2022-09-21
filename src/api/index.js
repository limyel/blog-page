import request from "../utils/request";
import config from "@/config";

let baseUrl = config.baseUrl;
console.log(baseUrl)

export default {
  getPostInHome(params) {
    let apiUrl = baseUrl + "/post";
    return request({
      url: apiUrl,
      data: params,
      method: "get"
    })
  },
  getPostDetail(slug) {
    let apiUrl = baseUrl + "/post/" + slug;
    return request({
      url: apiUrl,
      method: "get"
    })
  },
  getTagAll() {
    let apiUrl = baseUrl + "/tag";
    return request({
      url: apiUrl,
      method: "get"
    })
  },
  getTagInfo(tagSlug) {
    let apiUrl = baseUrl + "/tag/" + tagSlug;
    return request({
      url: apiUrl,
      method: "get"
    })
  },
  getAbout() {
    let apiUrl = baseUrl + "/about";
    return request({
      url: apiUrl,
      method: "get"
    })
  },
  listPostByTag(slug) {
    let apiUrl = baseUrl + "/post/by-tag/" + slug;
    return request({
      url: apiUrl,
      method: "get"
    })
  }
}
