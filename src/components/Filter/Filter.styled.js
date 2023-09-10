import styled from 'styled-components';

export const StyledInput = styled.input`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.medium};
  text-transform: ${p => p.theme.textTransform.cap};
  width: 332px;
  height: 30px;
  border-radius: 20px;
  box-shadow: 1px 9px 15px rgba(0, 0, 0, 0.5);
  text-align: center;
  display: flex;
  margin-bottom: 20px;

  ::placeholder {
    text-align: center;
  }

  @media screen and (min-width: 200px) and (max-width: 420px) {
    width: 200px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 2000px) {
    width: 400px;
    height: 40px;
  }
`;
