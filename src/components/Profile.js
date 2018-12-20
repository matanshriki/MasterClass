import React from 'react';
import styled from 'styled-components';
// import { lighten, darken } from 'polished';

const Profile = () => (
    <Main>
        <Header>Profile page</Header>
    </Main>
);

export default Profile;

const Header = styled.h1`
    display: flex;
    justify-content: center;
    align-items:center;
    align-items: center;
    font-family:'Arial';
    margin-bottom:.5rem;
`;

const Main = styled.div`
    margin-top: 5rem;
`;