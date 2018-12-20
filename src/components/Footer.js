import React from 'react';

// import css
import styled from 'styled-components';
// import { lighten, darken } from 'polished';
import "../../node_modules/video-react/dist/video-react.css"
import { flexbox } from '../styled/styleFunction'
import Spacer from '../styled/styled.component'

const Footer = () => (
    <FooterContainer>
        <Spacer h="2rem" />
        <MainLogo>
            <HomePageLink as="a" href="https://www.masterclass.com/" target="_blank">
                <Logo src="https://do6eyjibs3jse.cloudfront.net/assets/refresh/global/logo-203de089f5594e1d65e94a0eba995853982602cf0eff0b02d5edf1afd1646b07.svg" />
            </HomePageLink>
        </MainLogo>
        <Spacer h="3rem" />
        <FooterAdds>
            <SocialNetwork>
                <SocialNetworkTitle>Let's be friends </SocialNetworkTitle>
                <p>MasterClass is on all your favorite social networks. Come say hello!</p>
                <Spacer h="3rem" />
                <SocialNetworkIcons>
                    <TwiterLink as="a" href="https://twitter.com/intent/tweet?text=Learn%20from%20the%20world%27s%20best%20%40MasterClass%3A&url=https%3A%2F%2Ftwitter.com%2Fmasterclass&original_referer=" target="_blank">
                        <TwiterIcon src="https://nr-customers.s3.amazonaws.com/Support/Matan/Bold360aiProject/images/twiterIcon.png" />
                    </TwiterLink>
                    <FacebookLink as="a" href="https://www.facebook.com/masterclassofficial" target="_blank">
                        <FacebookIcon src="https://nr-customers.s3.amazonaws.com/Support/Matan/Bold360aiProject/images/facebookIcon.png" />
                    </FacebookLink>
                    <EmailLink as="a" href="mailto:support@masterclass.com" target="_blank">
                        <EmailIcon src="https://nr-customers.s3.amazonaws.com/Support/Matan/Bold360aiProject/images/mailIcon.png" />
                    </EmailLink>
                </SocialNetworkIcons>
            </SocialNetwork>
            <SaveAndSound>
                <SaveAndSoundTitle>Safe {"&"} Sound </SaveAndSoundTitle>
                <p>Your MasterClass purchase is secure.</p>
                <Spacer h="5rem" />
                <SecureImage src="https://do6eyjibs3jse.cloudfront.net/assets/refresh/global/ssl-badgev2-328880646ecdefe24646eef7744bbf6eabbeed6dca18c043bd343a216e6420f9.svg" />
            </SaveAndSound>
            <Spacer w="15rem" />
            <NeedHelp>
                <NeedHelpTitle> Need help </NeedHelpTitle>
                <p>We're here to answer any questions you have about MasterClass or our classes.</p>
                <Spacer h="3rem" />
                <GetSupportButton as="a" href="http://15.eunanodemos.com/" target="_blank" >Get support</GetSupportButton>
                <Spacer h="5rem" />
            </NeedHelp>
        </FooterAdds>
    </FooterContainer>
);

export default Footer;

const FooterContainer = styled.div`
    margin-top: 4rem;
    width: 100%;
    color: #ffffff;
    font-size: 1.4rem;
    border-top: 2px solid rgba(255,255,255,0.2);
    ${flexbox}
    flex-direction: column;
`
const SocialNetwork = styled.div`
    display: none;
    @media (min-width: 992px) {
        min-width: 33rem;
        ${flexbox}
        text-align: center;
        flex-direction: column;
        font-size: 1.4rem;
        color: rgba(255,255,255,0.7);
        font-weight:normal;
        font-family: 'Lato';
        letter-spacing: 0.05rem;
        line-height: 1.5;
  }
`

const SaveAndSound = styled.div`
    min-width: 33rem;
    text-align: center;
    font-size: 1.4rem;
    color: rgba(255,255,255,0.7);
    font-weight:normal;
    font-family: 'Lato';
    letter-spacing: 0.05rem;
    line-height: 1.5;
    @media (min-width: 992px) {
        border: 1px solid rgba(255,255,255,0.2);
        border-top: 0;
        border-bottom: 0;
  }

`
const NeedHelp = styled.div`
    min-width: 33rem;
    ${flexbox}
    text-align: center;
    flex-direction: column;
    font-size: 1.4rem;
    color: rgba(255,255,255,0.7);
    font-weight:normal;
    font-family: 'Lato';
    letter-spacing: 0.05rem;
    line-height: 1.5;
    @media (max-width: 576px) {
        margin-top: 2rem;   
    }
`

const SaveAndSoundTitle = styled.h2`
    line-height: 3.6rem;
    font-size: 1.5em;
    text-align: center;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #fff;
    font-family: 'Lato';
    font-weight: normal;
`
const SocialNetworkTitle = styled.h2`
    line-height: 3.6rem;
    font-size: 1.5em;
    text-align: center;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #fff;
    font-family: 'Lato';
    font-weight: normal;
`
const SecureImage = styled.img`
    width: auto;
`
const NeedHelpTitle = styled.h2`
    line-height: 3.6rem;
    font-size: 1.5em;
    text-align: center;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #fff;
    font-family: 'Lato';
    font-weight: normal;
`
const GetSupportButton = styled.div`
    width: 13.5rem;
    height: 3.5rem;
    text-align: center;
    ${flexbox}
    color: #fff;
    text-transform: uppercase;
    border: 1px solid #ccc;
    border-radius: 0.4rem;
    cursor: pointer;
    text-decoration: none;
`

const MainLogo = styled.div`
    text-align: center;
    position: relative;
    background-color: #000;
    @media (min-width: 992px) {
        margin-top: -7rem;
        border-top: 1.5px solid rgba(255,255,255,0.4);
        border-bottom: 1.5px solid rgba(255,255,255,0.4);
        width: 19rem;
        height: 10rem;
  }
`

const Logo = styled.img`
    @media (min-width: 992px) {
        margin-top: 10%;
  }
`

const HomePageLink = styled.a`
    cursor: pointer;
`

const FooterAdds = styled.div`
    max-width: 55rem;
    @media (min-width: 576px) {
        ${ flexbox()}
        align-items: flex-start;
  }
  @media (min-width: 992px) {
        ${flexbox}
        align-items: flex-start;
  }
`

const SocialNetworkIcons = styled.ul`
    min-width: 15rem;
    ${flexbox}
    justify-content:space-between;
    /* border: red solid 1px; */

`
const TwiterIcon = styled.img`
    width: 3.5rem;
    cursor: pointer;
`
const TwiterLink = styled.a`
      cursor: pointer;
`

const FacebookIcon = styled.img`
    width: 3.5rem;
    cursor: pointer;
`
const FacebookLink = styled.a`
      cursor: pointer;
`

const EmailIcon = styled.img`
    width: 3.5rem;
    cursor: pointer;
`
const EmailLink = styled.a`
    cursor: pointer;
`
