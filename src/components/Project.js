import React from 'react';
import { Grid, Accordion, Icon, Card, Image } from 'semantic-ui-react';

const Project = (props) => (
    <Grid.Column >
      <Card fluid style={{marginRight: '5px'}, {marginTop: '15px'}} >
        <Card.Content>
          <Card.Header>
            {props.project.title}
          </Card.Header>
          <Card.Meta>
            <a href={props.project.gitLink} >{props.project.gitLink}</a>
          </Card.Meta>
          <Card.Description>
          <Accordion>
            <Accordion.Title>
              <Icon name='dropdown' />
              Description Information
            </Accordion.Title>
            <Accordion.Content>
              <p>
                {props.project.description}
              </p>
            </Accordion.Content>
          </Accordion>
          </Card.Description>
        </Card.Content>
      </Card>
    </Grid.Column>
  )


export default Project;
