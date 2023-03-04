import Avatar from "@/components/atoms/Avatar";
import Text, { TextSize } from "@/components/atoms/Text";
import React from "react";
import { Wrapper, Bubble } from "./styles";

interface Props {
  avatarUrl: string;
  author: "COACH" | "USER";
  message: string;
}

const ChatBubble = ({ avatarUrl, author, message }: Props) => {
  return (
    <Wrapper>
      {author === "COACH" && <Avatar url={avatarUrl} />}
      <Bubble author={author}>
        <Text size={TextSize.MD} as="span">
          <span dangerouslySetInnerHTML={{ __html: message }} />
        </Text>
      </Bubble>
      {author === "USER" && <Avatar url={avatarUrl} />}
    </Wrapper>
  );
};

export default ChatBubble;
