import React from 'react';
import { Menu, Segment } from 'semantic-ui-react'

const Navbar = () => {
  return (
    <Segment inverted>
      <Menu inverted secondary>
        <Menu.Item name='About Me Page' />
        <Menu.Item name='Github Page'  />
        <Menu.Item name='LinkedIn'  />
      </Menu>
    </Segment>
  )
}

export default Navbar;
