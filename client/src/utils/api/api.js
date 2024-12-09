import axios from "axios";

export const API = axios.create({
    baseURL: "http://localhost:5000/api/v1",
})

export const getTimelinePosts = (username) => API.get(`/posts/get-timeline-posts/${username}`)
export const getAllPosts = () => API.get("/posts")
export const getAllBooks = () => API.get('/books/get-books')
export const getUserData = (userId) => API.get(`/users/${userId}`)
export const getUserProfileData = (username) => API.get(`/users?username=${username}`)

