import { createGlobalStyle, css } from "styled-components";

export const fontUrl = "https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;700;900";

export const bodyStyles = css`
    /* global styles */
`;

export const GlobalStyle = createGlobalStyle`
 body {
   ${bodyStyles}
 }
`;
