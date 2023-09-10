import styled from 'styled-components';

export const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  align-content: center;
  justify-content: center;

  @media screen and (max-width: 991px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const UserName = styled.p`
  font-weight: 600;
  margin: 15px;
  color: #fff;
`;

export const ButtonLogOut = styled.button`
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 20px;

  &:hover {
    background-color: #212529;
    color: #fff;
    box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.75);
  }
`;
