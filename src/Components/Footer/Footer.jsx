import styled from 'styled-components';
import {Colors} from "../../styledHelpers/Colors";

const Wrapper =styled.div`
    box-shadow: 1px 1px 12px;
    display: flex;
    max-height: 120px;
    
    @media screen and (min-width: 250px){
    }
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


export const Footer = () => {


    return(
        <Wrapper>
            <LeftSection>
            </LeftSection>
              <MidSection>
                
              </MidSection>
            <RightSecrion>
            </RightSecrion> 
        </Wrapper>
    )
};

export default Footer;