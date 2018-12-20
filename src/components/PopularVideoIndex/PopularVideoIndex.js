import React from 'react';
import styled from 'styled-components';
// import { lighten, darken } from 'polished';
import "../../../node_modules/video-react/dist/video-react.css" // import css
import { flexbox } from '../../styled/styleFunction'
import Spacer from '../../styled/styled.component'

const PopularVideoIndex = () => (
    <PopularVideoIndexContainer>
        <Image src="https://d3e9iqx18mbphw.cloudfront.net/images/339/original/1477794024-ca-tile.jpg?1477794024" /><Spacer w="1rem"/>
        <CourseContent>
            <SubTitle>A student in North Dakota just completed </SubTitle><Spacer h="1rem"/>
            <Title >Self Expression</Title>
            <SubSubTitle>Christina Aguilera Teaches Singing </SubSubTitle>
        </CourseContent>
    </PopularVideoIndexContainer>
);

export default PopularVideoIndex;


const PopularVideoIndexContainer = styled.div`
    height: 10rem;
    ${ flexbox()};
`
const CourseContent = styled.div`
    text-align: left;
    line-height: 2;
    /* border: salmon dashed 1px; */
`
const Image = styled.img`
    width: 10rem;
    height: auto;
    border: solid 1px rgba(255,255,255,0.2);
    border-radius: 2px;
    overflow: hidden;
`
const SubTitle = styled.h3`
    text-align: left;
    font-size: 1.1rem;
    color: rgba(255,255,255,0.5);
    font-weight:normal;
    font-family: 'Lato';
    position: relative;
    line-height: 2;
`
const SubSubTitle = styled.h3`
    text-align: left;
    font-size: 1rem;
    color: rgba(255,255,255,0.5);
    font-weight:normal;
    font-family: 'Lato';
    position: relative;
    line-height: 1.5;
`
const Title = styled.h2`
    font-size: 1.5rem;
    color: #fff;
    font-family: 'Lato';
    text-align: left;
    line-height: 1.3;
`