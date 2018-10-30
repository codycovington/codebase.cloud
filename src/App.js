import React, { Component } from 'react';
import './App.css';
import Grid from "./components/Grid";
import projects from "./components/ProjectCard/projects.json"
import ProjectCard from "./components/ProjectCard"
import Wrapper from "./components/Wrapper";


class App extends Component {

state = {
  projects
}


  render() {
    return (
      <div className="App">
        <Grid>
        </Grid>
        
        
        <Wrapper>
        {this.state.projects.map(project => (
          <a href={project.link} target="_blank">
          <ProjectCard
            
            id={project.id}
            key={project.id}
            name={project.name}
            image={project.image}
            description={project.description}
          />
          </a>
        ))}
        
        </Wrapper>
        
      </div>
    );
  }
}

export default App;
