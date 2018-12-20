import React from 'react'
// import css
import styled from 'styled-components'
// import { lighten, darken } from 'polished'
import "../../../node_modules/video-react/dist/video-react.css"
import Spacer from '../../styled/styled.component'
import Course from './course'
import { flexbox } from '../../styled/styleFunction'

const courses = [
    {
        title: "Serena Wiliams",
        description: "Teaches Tennis",
        img_url: "https://d3e9iqx18mbphw.cloudfront.net/images/549/original/1489514805-SW_FeaturedImage_V1_A.jpg?1489514805"
    },
    {
        title: "Stephen Curry",
        description: "Teaches Shooting and Scoring",
        img_url: "https://d3e9iqx18mbphw.cloudfront.net/images/1001/original/1510806323-1510785976-SC_Featured_Tile_V3.jpg?1510806323"
    },
    {
        title: "Daniel Negreanu",
        description: "Teaches Poker",
        img_url: "https://d3e9iqx18mbphw.cloudfront.net/images/1679/original/1528446322-Featured_Tile.jpg?1528446322"
     }
    //,
    // {
    //     title: "Gordon Ramsay",
    //     description: "Teaches Cooking",
    //     img_url: "https://d3e9iqx18mbphw.cloudfront.net/images/544/original/1513011323-Featured_Tile_%281%29.jpg?1513011323"
    // },
    // {
    //     title: "Thomas Keller",
    //     description: "Teaches Cooking Techniques",
    //     img_url: "https://d3e9iqx18mbphw.cloudfront.net/images/1085/original/1510618603-Featured_Tile.jpg?1510618603"
    // },
    // {
    //     title: "Alice Waters",
    //     description: "Teaches The Art of Home Cooking",
    //     img_url: "https://d3e9iqx18mbphw.cloudfront.net/images/1059/original/1510617641-Featured_Tile.jpg?1510617641"
    // }
]

const MainClass = () => (
    <MainClassContainer>

        <Spacer h="5rem" />
        <ClassTitle>Sports {'&'} Games</ClassTitle>
        <Spacer h="2rem" />

        <CurseContainer>
            {
                courses.map(course_data =>
                    <Course
                        title={course_data.title}
                        description={course_data.description}
                        img_url={course_data.img_url}
                    />
                )
            }
        </CurseContainer>

        <Spacer h="5rem" />
        <ClassTitle>Culinary Arts</ClassTitle>
        <Spacer h="2rem" />

        <CurseContainer>
            <Course title="Gordon Ramsay" description="Teaches Cooking" img_url="https://d3e9iqx18mbphw.cloudfront.net/images/544/original/1513011323-Featured_Tile_%281%29.jpg?1513011323" />
            <Spacer w="3rem" />
            <Course title="Thomas Keller" description="Teaches Cooking Techniques" img_url="https://d3e9iqx18mbphw.cloudfront.net/images/1085/original/1510618603-Featured_Tile.jpg?1510618603" />
            <Spacer w="3rem" />
            <Course title="Alice Waters" description="Teaches The Art of Home Cooking" img_url="https://d3e9iqx18mbphw.cloudfront.net/images/1059/original/1510617641-Featured_Tile.jpg?1510617641" />
        </CurseContainer>

        <Spacer h="5rem" />
        <ClassTitle>Sports {'&'} Games</ClassTitle>
        <Spacer h="2rem" />

        <CurseContainer>
            <Course title="Serena Wiliams" description="Teaches Tennis" img_url="https://d3e9iqx18mbphw.cloudfront.net/images/549/original/1489514805-SW_FeaturedImage_V1_A.jpg?1489514805" />
            <Spacer w="3rem" />
            <Course title="Stephen Curry" description="Teaches Shooting and Scoring" img_url="https://d3e9iqx18mbphw.cloudfront.net/images/1001/original/1510806323-1510785976-SC_Featured_Tile_V3.jpg?1510806323" />
            <Spacer w="3rem" />
            <Course title="Daniel Negreanu" description="Teaches Poker" img_url="https://d3e9iqx18mbphw.cloudfront.net/images/1679/original/1528446322-Featured_Tile.jpg?1528446322" />
        </CurseContainer>

        <Spacer h="5rem" />
        <ClassTitle>Culinary Arts</ClassTitle>
        <Spacer h="2rem" />

        <CurseContainer>
            <Course title="Gordon Ramsay" description="Teaches Cooking" img_url="https://d3e9iqx18mbphw.cloudfront.net/images/544/original/1513011323-Featured_Tile_%281%29.jpg?1513011323" />
            <Spacer w="3rem" />
            <Course title="Thomas Keller" description="Teaches Cooking Techniques" img_url="https://d3e9iqx18mbphw.cloudfront.net/images/1085/original/1510618603-Featured_Tile.jpg?1510618603" />
            <Spacer w="3rem" />
            <Course title="Alice Waters" description="Teaches The Art of Home Cooking" img_url="https://d3e9iqx18mbphw.cloudfront.net/images/1059/original/1510617641-Featured_Tile.jpg?1510617641" />
        </CurseContainer>

    </MainClassContainer>
);

export default MainClass;



const MainClassContainer = styled.div`
    width: 100%;
    min-height: 40rem;
    @media (min-width: 767px) {
        margin: 3rem;
  }
`

const CurseContainer = styled.div`
    ${flexbox({ j: 'flex-start' })}

    @media (min-width: 767px) {
        ${flexbox({ j: 'space-between' })}
  }
`
const ExploreTheClassTitle = styled.h1`
    /* margin: 5rem; */
    line-height: 3.6rem;
    font-size: 2.2rem;
    text-align: center;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #fff;
    font-family: 'Lato';
    font-weight: normal;
    background: linear-gradient(90deg, #000, #222 50%, #000);
`
const ClassTitle = styled.h2`
    font-size: 2rem;
    color: #fff;
    font-family: 'Lato';
    font-weight: normal;
`