import React from 'react';
import Project from './Project';
import { Segment, Container, Grid, Image, Header } from 'semantic-ui-react';

class AboutMe extends React.Component{
  state = {
    languages: ['Ruby', 'Javascript', 'HTML', 'CSS', 'SQL', 'Java', 'C#'],
    frameworks: ['Rails', 'React', 'Redux', 'Bootstrap', 'Materialize', 'Semantic UI React' ],
    projects: [
      {title: 'Homeowner Association Site',
        description: 'This is a freelance project written with Ruby on Rails as an API with a React and Redux frontend.  This is a \
        fully dynamic webapp that uses Devise with JSON web tokens to authenticate standard and admin users. The application has \
        multiple modules, allowing the HOA to activate/deactivate the modules they want to utilize as well as set the security level \
        of those modules.  This allows the HOA board to modify the site to best fit their requirements.  In addition, they are able to send \
        mailers, display upcoming events, modify the home page, and discuss HOA business securely in a discussion forum.  This \
        application is in production so the code has not been made public, however access to the code can be provided upon request.',
        herokuLink: 'https://stubbedsite.com'
      },
      {title: 'Weather Application',
        description: 'This was a group project.  It is written in Ruby on Rails as an API with a React \
        and Redux frontend.  We are collecting data from an Arduino with an active display in our react app.  Additionally, we are \
        pulling weather data from the NOA api, allowing the user to select how they want to view and compare weather data from different locations. \
        It is currently hosted on heroku.  The login is test@test.com with password of password.  Part of the Tables and Charts functionality requires \
        the import of the Arduino data upload and will not be fully functional.',
        gitLink: 'https://github.com/zsanders16/weather-station-app',
        herokuLink: 'https://weather-station-app.herokuapp.com'
      },
      {title: 'Sticky Notes',
        description: 'This sticky notes app written in react. User is able to create as many sticky notes as they want and add list \
        items to each sticky note.',
        gitLink: 'https://github.com/zsanders16/redux-sticky-notes'
      },
      {title: 'Ecommerce Applicaion',
        description: 'Ecommerce application was a group project written in Ruby on Rails.  It demonstrates relationships between SQL \
        tables with categories and items that belong to categories.  A user can login and has a shopping cart they an add items to. \
        In addition, mailers and jobs are used as well as RSpec for testing models and controllers.',
        gitLink: 'https://github.com/zsanders16/ecommerce_app-'
      },
      {title: 'Ruby Calculator',
        description: "CLI calculator personal project written in ruby.  Allows for user to input mathmatical calcualtion. \
        It uses regular expressions to follow order of operations and retun the result.",
        gitLink: 'https://github.com/zsanders16/ruby-calculator'
      },
    ]
  }

  about() {
    return(
      <Segment raised>
        <Grid >
          <Grid.Row>
            <Grid.Column width={3}>
              <Image style={{marginTop: '20px'}} src='http://res.cloudinary.com/dr8gznhjv/image/upload/c_scale,h_5184,z_1/v1499623918/IMG_2958_copy_edaqq3.jpg' />
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
                  <p style={{marginTop: '5px', marginBottom: '-3px'}}>Cell: (801) 839-8733</p>
                  <p style={{margin: '-3px'}}>zsanders@icloud.com</p>
                </Grid.Column>
              </Grid.Row>
              </Grid>
              <p style={{marginTop: '20px', fontSize: '20px'}}>
              I am a software engineer that is enthusiastic about developing effective software solutions.  
              My most recent experience is with Ruby on Rails and React, as well as previous experience with Java, 
              PowerShell and the .net framework.  I have professional experience in both IT and non-IT fields for solving 
              interesting problems and creating innovative new software programs.  I am committed to working within client 
              and project specifications to deliver software solutions.
              
              </p>
              <ul style={{fontSize: '20px', lineHeight: '130%'}}>
                <li>Knowledge of software engineering concepts</li>
                <li>Solid understanding of Ruby on Rails and MVC software architectural pattern</li>
                <li>Efficient with React and single page applications</li>
                <li>Familiar with Java, and C# languages</li>
                <li>Familiar with SQL and managing data in a relational database</li>
                <li>Knowledge and experience with Git</li>
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
          <Header as='h1' style={{textDecoration: 'underline', marginTop: '10px'}}>Projects</Header>
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
        <h3 style={{fontSize: '20px'}}>Languages</h3>
        <ul style={{fontSize: '20px', lineHeight: '120%'}}>
          { languages.map( (language, i) => {
              return <li key={i}>{language}</li>
            })
          }
        </ul>
        <h3>Frameworks and Libraries</h3>
        <ul style={{fontSize: '20px', lineHeight: '120%'}}>
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
