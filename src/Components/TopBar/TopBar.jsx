import styled from 'styled-components';
import {Colors} from "../../styledHelpers/Colors";

const Wrapper =styled.div`
    box-shadow: 1px 1px 12px;
    display: flex;
    max-height: 120px;
    
    @media screen and (min-width: 250px){
    }
`;

const Logo =styled.div`
img{
        max-width: 600px;
        min-width: 320px;
    }
display: flex;
`;

const LeftSection =styled.div`
display: flex;
background-color: coral;
`;

const RightSecrion =styled.div`
display: flex;
width: 96%;
margin-left: auto;
background-color: ${Colors.darkGreen};
`;


export const TopBar = () => {


    return(
        <Wrapper>
            <LeftSection>
                <Logo>
                    <img src={process.env.PUBLIC_URL + "/OsiedleEkologiczneBaner3.png"}  alt="Project baner"/>
                </Logo>
            </LeftSection>
            <RightSecrion>
            </RightSecrion>
            
        </Wrapper>
    )
};

export default TopBar;