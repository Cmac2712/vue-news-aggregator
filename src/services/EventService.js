import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://127.0.0.1:${process.env.PORT || 5000}`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getNewsList() {
    return apiClient.get("/news");
  },
  getNewsArticle(id) {
    return apiClient.get("/news").then(response => response.data.find(item => item.id === id) )
  }
};
