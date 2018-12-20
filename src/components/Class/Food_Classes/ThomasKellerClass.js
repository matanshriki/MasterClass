import React from 'react';

// import css
import styled from 'styled-components';
// import { lighten, darken } from 'polished';
import "../../../../node_modules/video-react/dist/video-react.css"


const ThomasKellerClass = () => (
    <ClassContainer>
        <Image src="https://d3e9iqx18mbphw.cloudfront.net/images/1085/original/1510618603-Featured_Tile.jpg?1510618603" />
        <ClassTitles>
            <CourseTitle>Thomas Keller</CourseTitle>
            <CourseSubTitle>Teaches Cooking Techniques</CourseSubTitle>
        </ClassTitles>
    </ClassContainer>
);

export default ThomasKellerClass;


const ClassContainer = styled.div`
    min-height: 20rem;    
`

const Image = styled.img`
    width: 30rem;
    height: auto;
    background-position: center;
    background-size: cover;
    overflow: hidden;
    cursor: pointer;
`

const CourseTitle = styled.h2`
    display: flex;
    font-size: 2rem;
    text-transform: uppercase;
    color: #fff;
    font-family: 'Lato';
    font-weight: normal;
`

const CourseSubTitle = styled.h2`
    display: flex;
    font-size: 1.2rem;
    text-transform: uppercase;
    color: #fff;
    font-family: 'Lato';
    /* font-weight: normal; */
    opacity: 0.5;
    text-shadow: 0px 0px 6px #000000;
    line-height: 15px;
    font-weight: bold;
    letter-spacing: 0.17em;
`

const ClassTitles = styled.div`
    margin-top: -4rem;

`
