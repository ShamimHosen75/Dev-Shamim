import { Container, Divider, ToggleButton } from '@mui/material';
import React from 'react';
import { Desc, Title, ToggleButtonGroup, Wrapper } from './ProjectStyles';


const Projects = () => {
  return (
    <Container id="projects">
      <Wrapper>
      <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From CMS to Web Apps. Here are some of my projects.
        </Desc>

        <ToggleButtonGroup>
          <ToggleButton>ALL</ToggleButton>
          <Divider />
          <ToggleButton>WEB APP'S</ToggleButton>
          <Divider />
          <ToggleButton>CMS</ToggleButton>
          <Divider />
          <ToggleButton>TEAM PROJECTS</ToggleButton>
          <Divider />
        </ToggleButtonGroup>
      </Wrapper>
    </Container>
  );
};

export default Projects;