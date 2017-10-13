import React from 'react';
import { Grid, Accordion, Icon, Card, Image, Popup, Button } from 'semantic-ui-react';

const Project = (props) => (
    <Grid.Column >
      <Card fluid style={{marginRight: '5px', marginTop: '15px', height: '130px'}} >
        <Card.Content>
          <Card.Header style={{fontSize: '20px'}}>
            {props.project.title}
          </Card.Header>
          <Card.Meta >
            { props.project.gitLink ?
              <p style={{marginTop: '5px', width: '350px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Github :<a 
                  
                href={props.project.gitLink} 
              >
                {props.project.gitLink}
              </a></p> :
              <p><br/></p>
            }
            { props.project.herokuLink ? 
              <p style={{ width: '350px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Heroku :<a 
                href={props.project.herokuLink} 
              >
                {props.project.herokuLink}
              </a></p> :
              <p><br/></p>
            }
          </Card.Meta>
          <Card.Description>
            <Popup
              style={{width: '700px', fontSize: '18px'}}
              trigger={<Button primary>Description Information</Button>}
              flowing
              hoverable
              content={props.project.description}
            >
            </Popup>
          </Card.Description>
        </Card.Content>
      </Card>
    </Grid.Column>
  )


export default Project;
