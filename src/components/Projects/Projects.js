import { Container, ToggleButton } from '@mui/material';
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
          <ToggleButton>Web</ToggleButton>
        </ToggleButtonGroup>
      </Wrapper>
    </Container>
  );
};

export default Projects;