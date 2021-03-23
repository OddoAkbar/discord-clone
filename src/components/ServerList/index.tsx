import React from 'react';
import { Container, Separator } from './styles';

import ServerButton from '../ServerButton';

const ServerList: React.FC = () => { 
  return (
    <Container>
      <ServerButton isHome/>

      <Separator />

      <ServerButton />
      <ServerButton />
      <ServerButton hasNotification/>
      <ServerButton />
      <ServerButton mentions={3}/>
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={50}/>
      <ServerButton />
      <ServerButton />
    </Container>
  );
}

export default ServerList;
