import React from 'react'

// import css
import styled from 'styled-components'
// import { lighten, darken } from 'polished'
import "../../../node_modules/video-react/dist/video-react.css"
import { flexbox } from '../../styled/styleFunction'

// export default class Course extends React.Component {

//     state = {
//         // title: "title",
//         // description: "description",
//         // classImg: "https://d3e9iqx18mbphw.cloudfront.net/images/549/original/1489514805-SW_FeaturedImage_V1_A.jpg?1489514805"
//     }
//     render() {
//         return (
//             <ClassContainer >
//                 <Gradiant>
//                     <Image src={this.state.classImg} />
//                 </Gradiant>
//                 <ClassTitles>
//                     <CourseTitle>{this.title = "Serena Williams"}</CourseTitle>
//                     <CourseSubTitle>{this.description = "Teaches Tennis"}</CourseSubTitle>
//                 </ClassTitles>
//             </ClassContainer>
//         )
//     }
// }


const Course = ({ img_url, title, description }) => (    
    <ClassContainer >
        <Gradiant/>
        <Image src={img_url} />
        <ClassTitles>
            <CourseTitle>{title}</CourseTitle>
            <CourseSubTitle>{description}</CourseSubTitle>
        </ClassTitles>
    </ClassContainer>

)
export default Course;


const ClassContainer = styled.div`
    position: relative;
`
const Gradiant = styled.div`
    background-image: linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0.75) 20%, rgba(0, 0, 0, 0) 40%);
    position: absolute;
    /* border: 0.5px solid rgba(255,255,255,0.5);; */
    height: 101%;
    // width: 80vw;
    width: 100%;
    @media (min-width: 767px) {
        // width: 30vw;
        width: 100%;
  }
`

const Image = styled.img`
    @media (max-width: 767px) {
        margin-right: 0.8rem;
        width: 80vw;
    }
    @media (min-width: 767px) {
        width: 30vw;
        ${flexbox({ j: 'space-between' })}
  }
    /* cursor: pointer; */
`
// const Image = styled.img`
//     /* width: 30rem; */
//     height: auto;
//     object-position: center;
//     object-fit: cover;
//     overflow: hidden;
//     cursor: pointer;
// `

const CourseTitle = styled.h2`
    display: flex;
    font-size: 2rem;
    text-transform: uppercase;
    color: #fff;
    font-family: 'Lato';
    font-weight: normal;
`

const CourseSubTitle = styled.h2`
    display: none;
    
    @media (min-width: 767px) {
        display: flex;
        font-size: 1.2rem;
        text-transform: uppercase;
        color: #fff;
        font-family: 'Lato';
        opacity: 0.5;
        text-shadow: 0px 0px 6px #000000;
        line-height: 15px;
        font-weight: bold;
        letter-spacing: 0.17em; 
  }
`

const ClassTitles = styled.div`
    position: absolute;
    bottom: 0;
`
