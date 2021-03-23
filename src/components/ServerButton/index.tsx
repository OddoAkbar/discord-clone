import React from 'react';

import Logo from '../../assets/rockeseat.svg';

import { Button } from './styles';

export interface ServerButtonProps {
  selected?: boolean;
  isHome?: boolean;
  hasNotification?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<ServerButtonProps> = ({
  selected, 
  isHome, 
  hasNotification,
  mentions
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotification={hasNotification}
      mentions={mentions}
      className={selected ? "active" : ""}
    >
      {isHome && <img src={Logo} alt="Rockseat" />}
    </Button>
  )
}

export default ServerButton;
