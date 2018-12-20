import React from 'react';
import { Player } from 'video-react'
import "../../../node_modules/video-react/dist/video-react.css"
import "../../../node_modules/video-react/dist/video-react.css"

// import css
import styled from 'styled-components';
// import { lighten, darken } from 'polished';
import { flexbox } from '../../styled/styleFunction';
import Spacer from '../../styled/styled.component';

import Course from './course';
import AccessButtons from '../AccessButtons'
import TitleConteiner from '../TitleConteiner'


const ClassPage = ({ img_url, title, description }) => (
    <ClassPageContainer>
        <Gradiant />
        <VideoStream>
            <Player
                autoPlay
                loop
                playsInline
                poster="https://static.masterclass.com/aap-landing/hero.jpg"
                // poster={img_url}
                src="https://nr-customers.s3.amazonaws.com/Support/Matan/Bold360aiProject/Video/SerenaWilliamsTrailer.mp4"
                muted
            />
        </VideoStream>
        {/* <TitleConteiner /> */}
        {/* <CourseTitle>{title}</CourseTitle> */}
        <Title>Serena {title}</Title>
        <SubTitle>Teach{description}</SubTitle>
        <ButtonContiner>
            <ButtonTitle>Get started now</ButtonTitle>
            <AllAccessBtn>All access pass</AllAccessBtn>
            <PriceDescriptionTitle>$180 / year - Access to all our classes <InfoIcon src="https://nr-customers.s3.amazonaws.com/Support/Matan/Bold360aiProject/images/questionMark.png" />
            </PriceDescriptionTitle>
            <Seprator> <span>OR</span></Seprator>
            <UnderPricingBtn>
                <Spacer h="8rem" />
                <ClassAndPrice>
                    <Spacer h="2rem" />
                    <SingleClassBtn>Single class</SingleClassBtn> 
                    <Price>$90</Price>
                </ClassAndPrice>
                <Spacer w="0.8rem" />
                <GiftBtn>Gift</GiftBtn>
            </UnderPricingBtn>
        </ButtonContiner>
    </ClassPageContainer>

)

export default ClassPage;

const ClassPageContainer = styled.div`
    /* min-height: 80vh;  */
    width: 100% ;
`
const Gradiant = styled.div`
    /* height: 120%;
    width: 100%; */
    /* background-image: linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0.75) 20%, rgba(0, 0, 0, 0) 40%); */
    background-image: radial-gradient(rgb(0, 0, 0), rgba(0, 0, 0, 0.75) 20%, rgba(0, 0, 0, 0) 40%);
    position: absolute;
    border: 0.5px solid rgba(255,255,255,0.5);;
    border: 2.5px solid red;
`
const VideoStream = styled.div`
        margin-top: 0rem;
        width: 100%;
`
const Title = styled.h1`
    margin-top: -5rem;
    ${ flexbox()}
    font-size: 3.6rem;
    color: #fff;
    font-weight:700;
    font-family: 'Lato';
    text-align: center;
    letter-spacing: 0.15rem;
    padding: 1rem;
    line-height: 1.3;
    position: relative;
    text-transform: uppercase;

    @media (max-width: 450px) {
        font-size: 2.4rem;
  }
    @media (min-width: 767px) {
        text-align: left;
    }
`
const SubTitle = styled.div`
    ${ flexbox()}
    flex-direction: column;
    color: rgba(255,255,255,0.5);
    font-weight:300;
    font-family: 'Lato';
    text-align: center;
    font-size: 2rem;
    letter-spacing: 0.05rem;
    line-height: 1.5;
    text-transform: uppercase;
    text-shadow: 0 0 10px rgba(0,0,0,0.5);
    @media (max-width: 450px) {
        font-size: 1.6rem;
  }
    @media (min-width: 767px) {
        text-align: left;
}
`
const InfoIcon = styled.img`
    vertical-align: middle;
    display: inline-block;
    background-position: center center;
    opacity: 0.9;
    width: 1.7rem;
    height: 1.7rem;
    margin-left: 0.5em;
    border-radius: 50%;
`

const ButtonContiner = styled.div`
    ${flexbox({ d: 'column' })}
    margin-top: 2rem;
`
const ButtonTitle = styled.h2`
    font-family: 'Lato';
    font-size: 1.8rem;
    line-height: 2.6rem;
    letter-spacing: 0.05rem;
    color: white;
    font-weight: normal;
    text-align: center;
    
`

const AllAccessBtn = styled.button`
    margin-top: 1rem;
    width: 30rem;
    height: 5rem;
    background-color: #c83232;
    border: none;
    border-radius: 0.5rem;
    color: #fff;
    font-weight:bold;
    font-family: 'Lato';
    letter-spacing: 0.3rem;
    cursor: pointer;
    text-transform: uppercase;
    @media (max-width: 450px) {
        width: 32.2rem;
  }
`
const PriceDescriptionTitle = styled.h3`
    margin-top: 1rem;
    font-family: 'Lato';
    font-size: 1.4rem;
    line-height: 2.2rem;
    letter-spacing: 0.02rem;
    color: rgba(255,255,255,0.5);
    font-weight: normal;
`
const Seprator = styled.span`
    margin-top: 1rem;
    text-align:center;
    width:30rem;
    border-bottom: 0.5px solid rgba(255,255,255,0.5);;
    position: relative;
    font-size: 1.2rem;
    letter-spacing: 1px;
    color: rgba(255,255,255,0.5);
`
const UnderPricingBtn = styled.div`
    ${flexbox}
`
const SingleClassBtn = styled.button`
    width: 18.5rem;
    height: 5rem;
    background-color: #333;
    border: none;
    border-radius: 0.5rem;
    color: #fff;
    font-weight:bold;
    letter-spacing: 0.3rem;
    cursor: pointer;
    text-transform: uppercase;
    outline:none;
    @media (max-width: 450px) {
        width: 32.2rem;
    }
`
const GiftBtn = styled.button`
    width: 10.5rem;
    height: 5rem;
    background-color: #000;
    border: 0.5px solid #333;
    border-radius: 0.5rem;
    color: #fff;
    font-weight:bold;
    letter-spacing: 0.3rem;
    cursor: pointer;
    text-transform: uppercase;
    outline:none;
    @media (max-width: 450px) {
        width: 32.2rem;
    }
`

const ClassAndPrice = styled.div`
    ${flexbox({ d: 'column' })}
`
const Price = styled.h1`
    line-height: 2.2rem;
    font-size: 1.4rem;
    letter-spacing: 0.02rem;
    color: rgba(255,255,255,0.5);
    font-weight: normal;
    font-family: 'Lato'
`
