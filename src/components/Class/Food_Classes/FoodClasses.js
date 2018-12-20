import React from 'react';

// import css
import styled from 'styled-components';
// import { lighten, darken } from 'polished';
import "../../../../node_modules/video-react/dist/video-react.css"
import { flexbox } from '../../../styled/styleFunction'
import Spacer from '../../../styled/styled.component'

import GordonRamsayClass from './GordonRamsayClass'
import ThomasKellerClass from './ThomasKellerClass'
import AliceWatersClass from './AliceWatersClass'



const FoodClasses = () => (
    <FoodClassContainer>
        <Spacer h="4rem" />
        <ClassTitle>Culinary Arts</ClassTitle>
        <Spacer h="2rem" />
        <ClassesStrip>
            <GordonRamsayClass />
            <Spacer w="2rem" />
            <ThomasKellerClass />
            <Spacer w="2rem" />
            <AliceWatersClass />
            <Spacer w="2rem" />
        </ClassesStrip>
    </FoodClassContainer>
);

export default FoodClasses;

const FoodClassContainer = styled.div`
    margin-left: 1.6rem;
`

const ClassTitle = styled.h2`
    font-size: 2rem;
    color: #fff;
    font-family: 'Lato';
    font-weight: normal;
`

const ClassesStrip = styled.div`
    ${flexbox()}
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`

