import { useState } from "react";
import { Container, ContainerHeader, ContainerMain, IconSearch, ImageAvatar, StyledIcons, StyledLink } from "./styles"
import { CiSearch } from "react-icons/ci";
import { getUser } from "../../services/user";

export function Home () {
    const [ input, setInput ] = useState('')
    const [ user, setUser ] = useState({})

    async function GetUserData() {

        if(input === ''){
            alert('Preencha o campo com um usuário')
            return
        }
        const data = await getUser(input)
        setUser(data);
        setInput('')
    }
    return (
        <Container>
            <StyledIcons />

            <ContainerHeader>
                <input  value={input} onChange={(e) => {setInput(e.target.value)}} type="text" placeholder="Digite seu usuário" />
                <IconSearch onClick={GetUserData}> <CiSearch /> </IconSearch>
            </ContainerHeader>

            {Object.keys(user).length > 0 && (
            <ContainerMain>
                 <ImageAvatar src={user.avatar_url} alt={user.name} />
                 <h3>{user.name}</h3>
                 <p>{user.bio}</p>
                 <ul>
                     <li><strong>Followers:</strong> {user.followers}  || <strong>Following:</strong>  {user.following} </li>
                 </ul>
                 <span>{user.location ? user.location : 'Sem localização'}</span>
                 {<StyledLink to={`/repositories/users/${user.login}/repos`}>Ver mais</StyledLink>}
             </ContainerMain>

            )}
        </Container>
    )
}