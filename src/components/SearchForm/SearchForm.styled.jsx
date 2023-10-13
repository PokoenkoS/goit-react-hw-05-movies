import styled from '@emotion/styled';
  
export const Form = styled.form`
    display: flex;
    align-items: center;
    margin-top:30px;
    max-width: 800px;
    background-color: #5f21da;
    border-radius: 3px;
    
`;
  
export const Button = styled.button`
    display: inline-block;
    width: 50px;
    height: 48px;
    border: 0;
    opacity: 0.6;
    cursor: pointer;
    outline: none;
    &:hover {
        opacity: 1;
    }
`;
  
export const Input = styled.input`
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 20px;
    border: none;
    outline: none;
    padding-left: 4px;
    padding-right: 4px;
    &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;