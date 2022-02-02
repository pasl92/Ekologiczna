import { TopBar } from '../src/Components/TopBar/TopBar';
import { MainPage } from '../src/Components/MainPage/MainPage';
import { Footer} from '../src/Components/Footer/Footer'
import styled from 'styled-components';
import {Colors} from "./styledHelpers/Colors";


const Wrapper =styled.div`
font-family: Tahoma;
display: flex;
flex-direction: column;
background-size: cover;
background-color: aqua;
@media screen and (max-width: 600px){
  
    }
`;

function App() {
  return (
    <Wrapper>
      <TopBar>
      </TopBar>
      <MainPage>

      </MainPage>
      <Footer></Footer>
    </Wrapper>
  );
}

export default App;
