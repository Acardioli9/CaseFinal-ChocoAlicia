import styled from "styled-components";

export const NavBar = styled.nav`

ul{
    background-color: rgb(89, 23, 8);
    box-shadow: 4px 4px 10px rgba(13, 13, 13, 0.5);
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    margin-bottom: 30px;
    z-index: 3;
    display: flex;
    justify-content: space-evenly;
    list-style-type: none;
    padding: 10px 0;
}
ul li a{
    text-decoration: none;
    color: rgb(242, 231, 220);
    letter-spacing: 1px;
    line-height: 30px;
    font-size: 18px;
    font-family: 'Noto Serif';
    text-transform: uppercase;
}
ul li a:hover{
    color: rgb(217, 130, 54);
}

`;