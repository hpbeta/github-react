import axios from "axios";

 export async function getUser(input) {
    try {
        const response = await axios.get(`https://api.github.com/users/${input}`)  
        return response.data
    } catch  {
        alert('Erro ao buscar o usuário')
        return
    }
 }