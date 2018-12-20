import React from 'react';

// import css
import styled from 'styled-components';
// import { lighten, darken } from 'polished';
import "../../../../node_modules/video-react/dist/video-react.css"


const GordonRamsayClass = () => (
    <ClassContainer>
        <Image src="https://d3e9iqx18mbphw.cloudfront.net/images/544/original/1513011323-Featured_Tile_%281%29.jpg?1513011323" />
        <ClassTitles>
            <CourseTitle>Gordon Ramsay</CourseTitle>
            <CourseSubTitle>Teaches Cooking</CourseSubTitle>
        </ClassTitles>
    </ClassContainer>
);

export default GordonRamsayClass;


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
