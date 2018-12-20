import styled from 'styled-components';
// import { lighten,darken } from 'polished';
// import { flexbox } from './styleFunction';

const Spacer = styled.div`
    width:  ${p=>p.w||0};
    height: ${p=>p.h||0};
    display: ${p=>p.show===false?'none':'block'};
`;

export default Spacer;
