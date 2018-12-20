import React from 'react';
import styled from 'styled-components';
// import { lighten, darken } from 'polished';
// import Filter from './Filter'

const TopBar = ({ children }) => {
    return (
        <MainTopBar>
            <MagnifierLogo src={'https://nr-customers.s3.amazonaws.com/Support/Matan/Bold360aiProject/images/magnified_glass.png'} />
            {/* <Filter/> */}
            <MasterClassLogo src={'https://do6eyjibs3jse.cloudfront.net/webpack/_/only-logo-b694f900dbf39f860dbb211981979d93.png'} />
            <Header>M A S T E R C L A S S</Header>
            <HamburgerButton src={'https://nr-customers.s3.amazonaws.com/Support/Matan/Bold360aiProject/images/hamburger_menu.png'} />
            <ProfileButton src={'https://do6eyjibs3jse.cloudfront.net/webpack/_/default-avatar@2x-84782939b7139d9b4a0bf1c2abc65e79.png'} />
        </MainTopBar>
    )
}

export default TopBar;

const Header = styled.h1`
    font-size: 1.6rem;
    font-weight:normal;
    font-family: 'Lato';
    color:#fff;
    @media (min-width: 767px) {
        display:none;
  }
`
const MainTopBar = styled.div`
    background: #000;
    width: 100%;
    height: 4rem;
    padding: 1rem;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    @media (min-width: 767px) {
        position: fixed;
        width: 100%;
        max-height: 5.6rem;
  }
`
const MagnifierLogo = styled.img`
    width: 3.5rem;
    @media (min-width: 767px) {
        display:none;
        background-image: url('https://do6eyjibs3jse.cloudfront.net/webpack/_/only-logo-b694f900dbf39f860dbb211981979d93.png');
  }
`
const MasterClassLogo = styled.img`
        display:none;
    @media (min-width: 767px) {
        display:block;
        width: 3rem;
        margin: 3% 5% 3%;
  }
`
const HamburgerButton = styled.img`
    width: 3.5rem;
    @media (min-width: 767px) {
        display:none;
  }
`;
const ProfileButton = styled.img`
    display: none;
    @media (min-width: 767px) {
        display:block;
        width: 2.5rem;
        margin: 3% 5% 3%;
}
`
