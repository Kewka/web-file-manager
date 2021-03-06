import React, { Component } from 'react';
import {
  IconButton,
  Icon,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';

import Router from 'next/router';

class HeaderMenu extends Component {
  state = {
    anchorEl: null
  };

  handleOpen = event => this.setState({ anchorEl: event.currentTarget });
  handleClose = () => this.setState({ anchorEl: null });

  get menuItems() {
    return [
      {
        icon: 'home',
        title: 'Home',
        onClick: () => Router.push('/')
      },
      {
        icon: 'file_download',
        title: 'Downloads',
        onClick: () => Router.push('/downloads')
      }
    ];
  }

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <IconButton onClick={this.handleOpen} color="inherit">
          <Icon>more_vert</Icon>
        </IconButton>
        <Menu open={!!anchorEl} anchorEl={anchorEl} onClose={this.handleClose}>
          {this.menuItems.map((item, key) => (
            <MenuItem key={key} onClick={item.onClick}>
              <ListItemIcon>
                <Icon>{item.icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

export default HeaderMenu;
