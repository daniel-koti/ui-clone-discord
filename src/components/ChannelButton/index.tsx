import React from 'react';

import { Container, HashTagIcon, InviteIcon, SettingsIcon } from './styles';

export interface Props {
  channelName: string;
  selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({
  channelName,
  selected
}) => {

  return (
    <Container className={selected ? 'active' : ''}>
      <div>
        <HashTagIcon />
        <span>{channelName}</span>
      </div>

      <div className="box-icons">
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>
  );
}

export default ChannelButton;