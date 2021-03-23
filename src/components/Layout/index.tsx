import React from 'react';
import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ChannelInfo from '../ChannelInfo';
import ChannelList from '../ChannelList';
import { Grid } from './styles';
import UserInfo from '../UserInfo';
import UserList from '../UserList';
import ServerData from '../ServerData';

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelInfo />
      <ChannelList />
      <UserInfo />
      <ServerData />
      <UserList />
    </Grid>
  );
};

export default Layout;
