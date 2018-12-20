import React from 'react';
import styled from 'styled-components';
import { lighten, darken } from 'polished';

const Welcome = () => (
    <Main>
        <Header>MasterClass HomePage</Header>
    </Main>
);

export default Welcome;

const Header = styled.h1`
    display: flex;
    justify-content: center;
    align-items:center;
    align-items: center;
    font-family:'Arial';
    margin-bottom:.5rem;
`;

const Image = styled.img`
    width: 5rem;
`;

const Main = styled.div`
    margin-top: 5rem;
`;