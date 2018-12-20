import React from 'react';
import styled from 'styled-components';
// import { lighten, darken } from 'polished';
// import css
import "../../node_modules/video-react/dist/video-react.css"
import { flexbox } from '../styled/styleFunction'
import Spacer from '../styled/styled.component'

export default class AccessButton extends React.Component {
    state = {
        show: false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.changePositionAfterScroll)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.changePositionAfterScroll)
    }

    changePositionAfterScroll = () => {
        if (window.scrollY > 350) {
            this.setState({
                show: true
            })
        } else {
            this.setState({
                show: false
            })
        }
    }
    render() {
        return (
            <AccessButtonsContainer show={this.state.show}>
                <GetAllAccessBtn > Get all-access </GetAllAccessBtn> <Spacer w="1rem" />
                <GiveAsAGiftBtn > Give as a gift </GiveAsAGiftBtn>
            </AccessButtonsContainer>
        )
    };
}

// const AccessButtons = () => (
//     <AccessButtonsContainer>
//         <GetAllAccessBtn > Get all-access </GetAllAccessBtn> <Spacer w="1rem" />
//         <GiveAsAGiftBtn > Give as a gift </GiveAsAGiftBtn>
//     </AccessButtonsContainer>
// );

// export default AccessButtons;


const AccessButtonsContainer = styled.div`
    /* opacity: ${props => props.show ? 1 : 0}; */
    position: ${props => props.show ? 'fixed' : 'relative'};
    top: 2rem;
    right: 0;
    left: 0;
    z-index: 2;
    /* left: 0; */
    margin: -0.5rem;
    height: 10rem;
    ${ flexbox()}
    
    @media (max-width: 450px) {
        margin: 1.5rem;
        height: 11rem;
        ${ flexbox()}
        flex-direction: column;
        justify-content: space-between;
  }
`
const GetAllAccessBtn = styled.button`
    width: 22.5rem;
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
const GiveAsAGiftBtn = styled.button`
    width: 22.5rem;
    height: 5rem;
    background-color: #333;
    border: none;
    border-radius: 0.5rem;
    color: #fff;
    font-weight:bold;
    letter-spacing: 0.3rem;
    cursor: pointer;
    text-transform: uppercase;
    @media (max-width: 450px) {
        width: 32.2rem;
  }
`

