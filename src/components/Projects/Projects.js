import React, { useState } from 'react'
import { projects } from '../../data/constants'
import ProjectCard from '../Cards/ProjectCards'
import { CardContainer, Container, Desc, Divider, Title, ToggleButton, ToggleButtonGroup, Wrapper } from './ProjectStyles'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'wordpress' ?
            <ToggleButton active value="wordpress" onClick={() => setToggle('wordpress')}>WORDPRESS</ToggleButton>
            :
            <ToggleButton value="wordpress" onClick={() => setToggle('wordpress')}>WORDPRESS</ToggleButton>
          }
          <Divider />
          {toggle === 'team project' ?
            <ToggleButton active value="team project" onClick={() => setToggle('team project')}>TEAM PROJECT</ToggleButton>
            :
            <ToggleButton value="team project" onClick={() => setToggle('team project')}>TEAM PROJECT</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects