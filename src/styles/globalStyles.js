import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        display: flex;
        justify-content: center;
        background-color: rgb(44, 53, 71);
        color: #FFFFFF;
        font-family: sans-serif;
    }
    ul {
        list-style: none;
    }
    a{
        text-decoration: none;
        color: #FFFFFF;
    }
`;
