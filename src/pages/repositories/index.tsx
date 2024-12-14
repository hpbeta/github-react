import React from "react"
import { useEffect, useState } from "react"
import { getRepo } from "../../services/repo"
import { useParams } from "react-router-dom"
import { ContainerList, ContainerRepo, LinkBack, List, ListItem } from "./styles"

interface RepoProps {
  html_url: string
  name: string
}

export function Repositories () {
    const { userName } = useParams<{ userName: string }>() 
    const [ repos, setRepos] = useState<RepoProps[]>([])

 async function getRepoData() {
  if(!userName) return
        const repoData = await getRepo(userName)
        setRepos(repoData)  
    }

    useEffect(() => {
        if (userName) {
          getRepoData();
        }
      }, [userName]); 
   
    return (
        <ContainerRepo>
          <h1>Repositórios</h1>
          <ContainerList>
            <List>
                {repos.map((repo, index) => (
                    <ListItem key={index}>
                       <a target="_blank" href={repo.html_url}> {repo.name}</a>
                    </ListItem>
                )).slice(0, 20)}
            </List>
          </ContainerList>
          <LinkBack to={'/'}> Voltar</LinkBack>
        </ContainerRepo>
    )
}