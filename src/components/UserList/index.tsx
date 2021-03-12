import React from 'react';

import { Container, Role, User, Avatar,  } from './styles';

interface Userprops {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<Userprops> = ({
  nickname,
  isBot,
}) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span> }
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Dísponível - 1</Role>
      <UserRow nickname="Daniel Koti"/>

      <Role>Offline - 18</Role>
      <UserRow nickname="Guilherme Manuel" isBot />
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
    </Container>
  );
};

export default UserList;