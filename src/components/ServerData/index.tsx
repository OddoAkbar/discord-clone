import React, { useRef, useEffect } from 'react';
import ChannelMessage, { Mention } from '../ChannelMessage';
import { 
  Container,
  Messages,
  InputWrapper,
  Input,
  InputIcon,
} from './styles';

const ServerData: React.FC = () => {
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messageRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  },[messageRef]);

  return (
    <Container>
      <Messages ref={messageRef}>

        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage 
            key={n}
            author="Oddo"
            date="23/03/2021"
            content="Hoje Discord Clone, mas estou muito cansado!"
          />
        ))}

        <ChannelMessage 
          author="James"
          date="23/03/2021"
          content={
            <>
              <Mention>@Oddo</Mention>, me ajuda no C#, por favor?
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ServerData;
