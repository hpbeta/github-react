import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StyledIcons = styled(FaGithub)`
  font-size: 70px;
  margin: 15px 0;
  transition: 0.9s;

  &:hover {
    transform: rotateY(180deg);
    cursor: pointer;
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #afbcf3;
  padding: 15px;
  width: 400px;
  border-radius: 5px;
  margin-top: 20px;
  animation: flipTitle 2s;

  @keyframes flipTitle {
    from {
      transform: rotateX(90deg);
    }
    to {
      transform: rotateX(0deg);
    }
  }

  input {
    border: none;
    background-color: transparent;
    outline: none;
    width: 85%;
  }

  @media (max-width: 375px) {
    width: 350px;
  }
  @media (max-width: 393px) {
    width: 350px;
  }
`;

export const IconSearch = styled.button`
  border: none;
  background-color: transparent;
  font-size: 20px;
  cursor: pointer;
`;

export const ImageAvatar = styled.img`
  border-radius: 50%;
  width: 250px;
  margin-top: 20px;
`;

export const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  padding: 15px 0;
  margin-top: 20px;
  gap: 20px;
  color: #000000;
  text-align: center;
  width: 450px;
  border: 1px solid #808080;
  color: #ffffff;
  animation: flipTitle 2s;

  @keyframes flipTitle {
    from {
      transform: rotateX(90deg);
    }
    to {
      transform: rotateX(0deg);
    }
  }

  @media (max-width: 393px) {
    width: 350px;
  }
`;

export const StyledLink = styled(Link)`
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
`;
