import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {

  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect( ()=> {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }

  }, [messagesRef])

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(21).keys()).map((n) => (
          <ChannelMessage 
          author="João da Silva"
          date="11/05/2021"
          content="Hoje é meu aniversário"
        />
        ))}
        
        <ChannelMessage 
          author="Margarida Lucas"
          date="11/05/2021"
          content={
          <>
            <Mention>@Daniel Koti</Mention> me adiciona no Linkedin e me segue no Twitter por favor?
          </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;