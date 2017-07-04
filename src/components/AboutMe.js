import React from 'react';
import { Accordion, Icon, Button, Card, Segment, Container, Grid, Image } from 'semantic-ui-react'

class AboutMe extends React.Component{

  about() {
    return(
      <Segment raised>
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={3}>
              <Image src='/assets/images/wireframe/image.png' />
            </Grid.Column>
            <Grid.Column width={13} centered>
              <h1>About Me</h1>
              <p>This is going to be a paragraph about me.</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }

  projects() {
    return(
      <Segment raised>
        <Grid columns={3}>
          <h2>Projects</h2>
          <Grid.Row>
            <Grid.Column>
              <Card>
                <Card.Content>
                  <Image floated='right' size='mini' src='/assets/images/avatar/large/steve.jpg' />
                  <Card.Header>
                    Project Title
                  </Card.Header>
                  <Card.Meta>
                    Friends of Elliot
                  </Card.Meta>
                  <Card.Description>
                  <Accordion>
                    <Accordion.Title>
                      <Icon name='dropdown' />
                      What is a dog?
                    </Accordion.Title>
                    <Accordion.Content>
                      <p>
                        A dog is a type of domesticated animal. Known for its loyalty and faithfulness, 
                        {' '}it can be found as a welcome guest in many households across the world.
                      </p>
                    </Accordion.Content>
                  </Accordion>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className='button'>
                    <Button basic color='green'>Go to Github</Button>
                  </div>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card>
                <Card.Content>
                  <Image floated='right' size='mini' src='/assets/images/avatar/large/steve.jpg' />
                  <Card.Header>
                    Project Title
                  </Card.Header>
                  <Card.Meta>
                    Friends of Elliot
                  </Card.Meta>
                  <Card.Description>
                  <Accordion>
                    <Accordion.Title>
                      <Icon name='dropdown' />
                      What is a dog?
                    </Accordion.Title>
                    <Accordion.Content>
                      <p>
                        A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
                        {' '}it can be found as a welcome guest in many households across the world.
                      </p>
                    </Accordion.Content>
                  </Accordion>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className='button'>
                    <Button basic color='green'>Go to Github</Button>
                  </div>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card>
                <Card.Content>
                  <Image floated='right' size='mini' src='/assets/images/avatar/large/steve.jpg' />
                  <Card.Header>
                    Project Title
                  </Card.Header>
                  <Card.Meta>
                    Friends of Elliot
                  </Card.Meta>
                  <Card.Description>
                  <Accordion>
                    <Accordion.Title>
                      <Icon name='dropdown' />
                      What is a dog?
                    </Accordion.Title>
                    <Accordion.Content>
                      <p>
                        A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
                        {' '}it can be found as a welcome guest in many households across the world.
                      </p>
                    </Accordion.Content>
                  </Accordion>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className='button'>
                    <Button basic color='green'>Go to Github</Button>
                  </div>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }

  languages(){
    return(
      <Segment raised>
        <h3>Languages</h3>
      </Segment>
    )
  }


  render(){
    return(
      <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            {this.about()}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={10}>
            {this.projects()}
          </Grid.Column>
          <Grid.Column width={6}>
            {this.languages()}
          </Grid.Column>
        </Grid.Row>
      </Grid>

      </Container>
    )
  }

}

export default AboutMe;
