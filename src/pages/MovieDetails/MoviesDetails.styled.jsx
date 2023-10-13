import styled from '@emotion/styled';

export const MainDiv = styled.div`
  padding-top:50px;
  padding-left: 30px;
  display: flex;
  flex-direction: column;
 
`

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
`;

export const ImgTag = styled.img`
    width: 400px;
    height: 250px;
`;

export const Btn = styled.button`
  width:100px;
  height: 30px;
  border-radius: 5px;    
  font-size: 20px;
  margin-bottom: 15px;
  /* margin-top: 25px; */
  padding-left: 25px;
  display: flex;
  align-items:center;
  gap: 50px;
  cursor: pointer;
  background-color: #21acda;;
`;
export const List = styled.ul`
  list-style: none

`;
export const Item = styled.li`
text-align: center;
  width: 150px;
  border: 1px solid #b6b4b4;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 3px 5px black;
  margin-bottom: 10px;
  text-decoration: none;
`;