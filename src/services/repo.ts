import axios from "axios";

export async function getRepo(userName: string) {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${userName}/repos`
    );
    return response.data;
  } catch {
    alert("Erro ao buscar os repositórios");
    return;
  }
}
