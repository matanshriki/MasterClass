import React from 'react'
import { Player } from 'video-react'

//Import css
import styled from "styled-components"
// import GlobalStyle from '../styled/global-styles'
import "../../node_modules/video-react/dist/video-react.css"
import { flexbox } from '../styled/styleFunction'

//Import Components
import Spacer from '../styled/styled.component'
import PopularVideo from './PopularVideoIndex/MainPopularVideo'
import MainClass from '../components/Class/MainClass'
import TitleConteiner from '../components/TitleConteiner'

const HomePage = () => {
    return (
        <MainPage>
            <VideoStream>
                <Gradiant />
                <Player
                    autoPlay
                    loop
                    playsInline
                    poster="https://static.masterclass.com/aap-landing/hero.jpg"
                    src="https://nr-customers.s3.amazonaws.com/Support/Matan/Bold360aiProject/Video/MasterClass.mp4"
                    muted
                />
                <TitleConteiner />
            </VideoStream>
            <UnderButtons>
                <Image src="https://do6eyjibs3jse.cloudfront.net/assets/annual-pass/mobile/video_icon-2c94bae44cdfa3c297c4f18df60aa540b6a737c60e6421c90239b10a85306fac.svg" />
                <Spacer w="2rem" h="0rem" />
                <UnderButtonsTitlesAds>
                    <AdSubTitle>Video lessons on demand</AdSubTitle> <Spacer h="0.3rem" />
                    <SubSubTitle>Access genius anytime, anywhere</SubSubTitle>
                </UnderButtonsTitlesAds>
            </UnderButtons>
            <PopularVideo />
            <MainClass />
        </MainPage>
    )
}

export default HomePage;

const MainPage = styled.div`
    width: 100%;
    ${flexbox()}
    flex-direction: column;
`

const Gradiant = styled.div`
    /* height: 120%;
    width: 100%; */
    background-image: linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0.75) 20%, rgba(0, 0, 0, 0) 40%);
    position: absolute;
    /* border: 0.5px solid rgba(255,255,255,0.5);; */
    border: 2.5px solid red;
`

const VideoStream = styled.div`
        margin-top: 0rem;
        width: 100%;
    `
const AdSubTitle = styled.h2`
    ${flexbox()}
            flex-direction: column;
            font-size: 1.6rem;
            color: #fff;
            font-weight:normal;
            font-family: 'Lato';
            text-align: center;
        `
const SubSubTitle = styled.h3`
    ${flexbox()}
            flex-direction: column;
            font-size: 1rem;
            color: rgba(255,255,255,0.5);
            font-weight:normal;
            font-family: 'Lato';
            text-align: center;
            font-size: 1.3rem;
        `
const UnderButtons = styled.div`
            margin: -2rem;
            width: 100%;
            height: 10rem;
    ${flexbox()}
            border-bottom: 0.5px solid rgba(255,255,255,0.5);
    @media (min-width: 767px) {
                display: none;
      }
    `
const UnderButtonsTitlesAds = styled.div`
    ${flexbox()};
            flex-direction: column;
        `
const Image = styled.img`
            width: 4rem;
            height: 4rem;
        `
