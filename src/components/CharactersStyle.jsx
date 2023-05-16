import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
 
  align-items: center;
  flex-wrap: wrap;
  background-color: #6e6c6c;
  width: 1390px;

  img {
    width: 100%;
    height: 100%;
    margin: 0px;
    opacity: 1;
    transition: opacity 0.5s ease 0s;
    object-position: center center;
    object-fit: cover;
  }
`;
