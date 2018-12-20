import React from 'react';

// import css
import styled from 'styled-components';
// import { lighten, darken } from 'polished';
// import GlobalStyle from '../styled/global-styles'
import "../../node_modules/video-react/dist/video-react.css" 

import { flexbox } from '../styled/styleFunction'
import AccessButtons from './AccessButtons'

const TitleConteiner = () => (
    <MainTitleConteiner>
        <Title>Unlock Every Class with <br />the All-Access Pass</Title>
        <SubTitle>Online classes taught by the world’s greatest minds.
    {/* <Spacer h="0.1rem" /> */}
            Now get unlimited access to all classes.</SubTitle>
        <AccessButtons />
    </MainTitleConteiner>
);

export default TitleConteiner;

const MainTitleConteiner = styled.div`
    width: 100%;
    ${ flexbox()}
    flex-direction: column;
    @media (min-width: 767px) {
        position: absolute;
        top: 30vh;
        align-items: flex-start;
        left: 5%;
    }
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
    color: rgba(255,255,255,0.7);
    font-weight:normal;
    font-family: 'Lato';
    text-align: center;
    font-size: 1.8rem;
    letter-spacing: 0.05rem;
    line-height: 1.5;
    @media (max-width: 450px) {
        font-size: 1.6rem;
  }
    @media (min-width: 767px) {
        text-align: left;
}
`



