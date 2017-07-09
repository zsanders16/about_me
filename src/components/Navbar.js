import React from 'react';
import { Menu, Segment } from 'semantic-ui-react'

const Navbar = () => {
  return (
    <Segment inverted>
      <Menu inverted secondary>
        <Menu.Item ><a href='https://zsanders16.github.io/about_me/' target="_blank">About Me</a></Menu.Item>
        <Menu.Item ><a href='https://github.com/zsanders16' target="_blank">GitHub</a></Menu.Item>
        <Menu.Item ><a href='https://www.linkedin.com/in/zachary-sanders-a189b071/' target="_blank">LinkedIn</a></Menu.Item>
      </Menu>
    </Segment>
  )
}

export default Navbar;
