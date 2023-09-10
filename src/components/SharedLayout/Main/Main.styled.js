import styled from 'styled-components';
import mainBG from '../../img/workplace.jpg';

const Main = styled.main`
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 56px - 62px);
  background: url(${mainBG});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

export default Main;
