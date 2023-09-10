import styled from 'styled-components';
import bgImg from '../../img/white.jpg';

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  background: url(${bgImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;

  overflow-y: scroll;
  max-height: calc(100vh - 56px - 62px);
`;
