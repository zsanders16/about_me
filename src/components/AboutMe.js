import React from 'react';
import Project from './Project';
import { Segment, Container, Grid, Image } from 'semantic-ui-react';

class AboutMe extends React.Component{
  state = {
    languages: ['Ruby', 'Javascript', 'HTML', 'CSS', 'SQL', 'Java', 'C#'],
    frameworks: ['Rails', 'React', 'Redux', 'Bootstrap', 'Materialize', 'Semantic UI React' ],
    projects: [
      {title: 'Ruby Calculator',
        description: 'CLI calculator personal project written in ruby.  Allows for user to input mathmatical calcualtion. \
        It uses regular expressions to follow order of operations and retun the result.',
        gitLink: 'https://github.com/zsanders16/ruby-calculator'
      },
      {title: 'Ecommerce Applicaion',
        description: 'Ecommerce application was a group project written in Ruby on Rails.  It demonstrates relationships between SQL \
        tables with categories and items that belong to categories.  A user can login and has a shopping cart they an add items to. \
        In addition, mailers and jobs are used as well as RSpec for testing models and controllers.',
        gitLink: 'https://github.com/zsanders16/ecommerce_app-'
      },
      {title: 'Sticky Notes',
        description: 'This sticky notes app written in react. User is able to create as many sticky notes as they want and add list \
        items to each sticky note.',
        gitLink: 'https://github.com/zsanders16/redux-sticky-notes'
      },
      {title: 'Weather Application',
        description: 'This is our current group project we are working on.  It is written in Ruby on Rails as an API with a React \
        with Redux frontend.  We are collecting data from an Arduino with an active display in our react app.  Additionally, we are \
        pulling weather data from NOA api, allowing the user to select how they want to view and compare weather data from different locations. \
        It will eventually be hosted on heroku.',
        gitLink: 'https://github.com/zsanders16/weather-station-app'
      },
    ]
  }

  about() {
    return(
      <Segment raised>
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={3}>
              <Image src='http://res.cloudinary.com/dr8gznhjv/image/upload/c_scale,h_5184,z_1/v1499623918/IMG_2958_copy_edaqq3.jpg' />
            </Grid.Column>
            <Grid.Column width={13} >
              <Grid>
              <Grid.Row>
                <Grid.Column width={6}>
                  <h1>Zachary Sanders</h1>
                </Grid.Column>
                <Grid.Column width={4}>
                  <h1>Contact Info:</h1>
                </Grid.Column>
                <Grid.Column width={6} >
                  <p style={{marginTop: '5px'}, {marginBottom: '-3px'}}>Cell: (801) 839-8733</p>
                  <p style={{margin: '-3px'}}>zsanders@icloud.com</p>
                </Grid.Column>
              </Grid.Row>
              </Grid>
              <p style={{marginTop: '20px'}}>
                I am currently a student at DevPoint Labs, a full stack web development boot camp, that focuses on Ruby on Rails and PostgreSQL,
                as well as React on the client side.  In addition, I have worked in the Information Technology field for the past three
                years using PowerShell to efficiently manage Windows environments.  I have spent the last couple years earning a
                degree in software engineering and working towards a career in software. I have decided that web development is really where my
                interests are and I am excited to get into this field.
              </p>
              <ul>
                <li>Knowledge of software engineering concepts</li>
                <li>Solid understanding of Ruby on Rails, React, and MVC software architectural pattern</li>
                <li>Familiar with SQL and managing data in a relational database</li>
                <li>Experience using PowerShell to manage Windows workstations</li>
                <li>Knowledge of Routing, Switching, Windows 7 Configuration, and Active Directory</li>
                <li>Experience in Supervising System Administrators</li>
              </ul>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }

  projects() {
    let { projects } = this.state
    return(
      <Segment raised>
        <Grid columns={2} >
          <h2>Projects</h2>
          <Grid.Row>
              { projects.map( (project, i) => {
                  return <Project key={i} project={project} />
                })
              }
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }

  languages(){
    let { languages, frameworks } = this.state
    return(
      <Segment raised>
        <h3>Languages</h3>
        <ul>
          { languages.map( (language, i) => {
              return <li key={i}>{language}</li>
            })
          }
        </ul>
        <h3>Frameworks and Libraries</h3>
        <ul>
          { frameworks.map( (framework, i) => {
              return <li key={i}>{framework}</li>
            })
          }
        </ul>
      </Segment>
    )
  }

  experience() {

  }

  render(){
    return(
    <Container fluid style={ {backgroundImage: "url('https://res.cloudinary.com/dr8gznhjv/image/upload/v1499622795/about_background_mu4cep.jpg')"}}>
      <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            {this.about()}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={12}>
            {this.projects()}
          </Grid.Column>
          <Grid.Column width={4}>
            {this.languages()}
          </Grid.Column>
          <Grid.Column width={16}>
            {this.experience()}
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </Container>
      </Container>
    )
  }

}

export default AboutMe;
