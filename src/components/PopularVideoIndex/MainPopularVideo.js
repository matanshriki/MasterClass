import React from 'react';
import styled from 'styled-components';
// import { lighten, darken } from 'polished';
import "../../../node_modules/video-react/dist/video-react.css" // import css
import { flexbox } from '../../styled/styleFunction'
import Spacer from '../../styled/styled.component'

import PopularVideoIndex from './PopularVideoIndex'
import PopularVideoIndex2 from './PopularVideoIndex2'
import PopularVideoIndex3 from './PopularVideoIndex3'
import PopularVideoIndex4 from './PopularVideoIndex4'
import PopularVideoIndex5 from './PopularVideoIndex5'


class PopularVideo extends React.Component {
    state = {
        class_array : [],
        class_title : 'title',
        class_image : 'img'
    }
    caruselChanger = () => {
        console.log('took')
    }
    componentDidMount() {
        this.intervalId = setInterval(this.caruselChanger, 2000)
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    render() {
        return (
            <PopularVideoContainer>
                <Title> Popular Lessons Now </Title>
                <Spacer h='2rem' />
                <CaruselImagesContainer>
                    <PopularVideoIndex />
                    <Spacer w='5rem' />
                    <PopularVideoIndex2 />
                    <Spacer w='5rem' />
                    <PopularVideoIndex3 />
                    {/* <Spacer w='5rem' />
                    <PopularVideoIndex4 />
                    <Spacer w='5rem' />
                    <PopularVideoIndex5 /> */}
                </CaruselImagesContainer>
            </PopularVideoContainer>
        )
    }
};

export default PopularVideo;


const PopularVideoContainer = styled.div`
    ${flexbox()};
    flex-direction:column;
    margin: 3rem;
    height: 20rem;
    text-align: center;
    border-bottom: 0.5px solid rgba(255,255,255,0.5);
    @media (min-width: 767px) {
        margin: 0;
  }
`

const Title = styled.h1`
    ${ flexbox()}
    width:40rem;
    height: 5rem;
    font-weight: normal;
    font-size: 1.7rem;
    letter-spacing: 0.4rem;
    font-family: 'Lato';
    color: #fff;
    position: relative;
    text-transform: uppercase;
    background: linear-gradient(90deg, #000, #222 50%, #000);
`

const CaruselImagesContainer = styled.div`
    ${flexbox()}
    flex-direction: row;
    width: 100%;
    /* opacity: 1;
    transform: translate3d(-0px, 0px, 0px);  
    transition: transform 700ms ease 0s; */
`
