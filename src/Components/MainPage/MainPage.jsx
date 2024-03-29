import styled from 'styled-components';
import {Colors} from "../../styledHelpers/Colors";

const Wrapper =styled.div`
font-family: Tahoma;
display: flex;
justify-content: center;
background-color: grey;
flex-direction: column;
min-width: 600px;
`;

const Photo =styled.div`
display: flex;
flex-direction: column;
margin-top: 5%;
margin-left: 10%;
margin-right: 10%;

`;

export const MainPage = () => {
    return(
        <Wrapper>
            <Photo>
                <img src={process.env.PUBLIC_URL +'/eko1.jpg'}  alt="Project photo 1"/>
            </Photo>
            <Photo>
                <img src={process.env.PUBLIC_URL +'/eko2.jpg'}  alt="Project photo 2"/>
            </Photo>
            <Photo>
                <img src={process.env.PUBLIC_URL +'/eko3.jpg'}  alt="Project photo 2"/>
            </Photo>
            <Photo>
                <img src={process.env.PUBLIC_URL +'/eko4.jpg'}  alt="Project photo 2"/>
            </Photo>
            <Photo>
                <img src={process.env.PUBLIC_URL +'/eko4.jpg'}  alt="Project photo 2"/>
            </Photo>
        </Wrapper>
    )
};

export default MainPage;