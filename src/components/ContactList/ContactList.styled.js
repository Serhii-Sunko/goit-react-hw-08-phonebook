import styled from 'styled-components';

export const StyledList = styled.ul`
  /* margin-top: 30px; */
  padding: 20px;
  max-height: 200px;
  min-width: 100px;
  overflow: auto;

  @media screen and (min-width: 200px) and (max-width: 420px) {
    padding: 10px;
    height: 170px;
  }

  @media screen and (min-width: 2200px) {
    width: 400px;
    padding: 40px;
    max-height: 400px;
  }
`;

export const StyledItem = styled.li`
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledText = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.medium};
  text-transform: ${p => p.theme.textTransform.cap};
`;

export const StyledButton = styled.button`
  color: black;
  background-color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.medium};
  text-transform: ${p => p.theme.textTransform.cap};
  width: 60px;
  height: 35px;
  letter-spacing: 2px;
  font-weight: 500;
  border-radius: 40px;
  box-shadow: 1px 9px 15px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease 0s;

  :hover,
  :focus {
    background-color: #adadad;
  }
`;
