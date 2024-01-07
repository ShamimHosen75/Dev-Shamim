import { Container, Divider, ToggleButton } from '@mui/material';
import React, { useState } from 'react';
import { CardContainer, Desc, Title, ToggleButtonGroup, Wrapper } from './ProjectStyles';


const Projects = () => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
      <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From CMS to Web Apps. Here are some of my projects.
        </Desc>

        <ToggleButtonGroup>
        {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>
              All
            </ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'cms' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WORDPRESS</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WORDPRESS</ToggleButton>
          }
          <Divider />
          {toggle === 'team projects' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>TEAM PROJECTS</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>TEAM PROJECTS</ToggleButton>
          }
          <Divider />
        </ToggleButtonGroup>
        
        <CardContainer>
          <h2>Hey!</h2>
          <h2>Hey!</h2>
          <h2>Hey!</h2>
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;