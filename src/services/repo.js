import axios from "axios";

export async function getRepo(userName) {
    const response = await axios.get(`https://api.github.com/users/${userName}/repos`)
    return response.data
}