import styled from '@emotion/styled';
import { Link } from 'react-router-dom';



// export const Div = styled.div`
//     display: flex;
//     gap: 10px;
// `;

export const List = styled.ul`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    list-style: none;
    
`;
export const Item = styled.li`
  display: flex;
  text-align: center;
  border: 1px solid #b6b4b4;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 3px 5px black;
  width: 350px;
  height: 300px;
  &:hover {
    box-shadow: 5px 6px 20px #2e0b82;
  }
 
`;
export const StyledLink = styled(Link)`
  color: #2e0b82;
  text-decoration:none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  &:hover {
    color: rgb(20, 150, 144);
  }
`;
export const ImgTag = styled.img`
    width: 100%;
    height: 180px;
`;