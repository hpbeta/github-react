import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerRepo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  h1 {
    animation: flipTitle 2s;
  
  @keyframes flipTitle  {
    from{
        transform: rotateX(90deg);
    }
    to {
        transform: rotateX(0deg);
    }
}
  }
`;

export const ContainerList = styled.div`
  border: 1px solid #808080;
  border-radius: 5px;
  margin-top: 20px;
  width: 650px;
  height: 600px;
  padding: 20px 15px;
  animation: flipList 2s;

  @keyframes flipList  {
    from{
        transform: rotateY(90deg);
    }
    to {
        transform: rotateY(0deg);
    }
}

@media (max-width: 480px) {
    width: 350px; 
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  height: 100%;
  
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid #808080;
  padding: 10px;
  width: 150px;
  height: 40px;
  font-size: 12px;
  cursor: pointer;
 transition: 0.4s;

  &:hover{
   transform: scale(1.1);
   
  }
`;

export const  LinkBack = styled(Link)`
margin-top: 20px;
  border: none;
  cursor: pointer;
  background-color: #6775a8;
  color: #ffffff;
  padding: 8px 25px;
  border-radius: 5px;
  text-decoration: none;
  transition: 0.5s;

  &:hover {
    background-color: #91a1ff;
  }
`
