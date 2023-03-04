import { ConversationItem } from "@/types/index";
import React from "react";
import ChatBubble from "../ChatBubble";
import ChatInput from "../ChatInput";
import { Wrapper, Inner, Footer } from "./styles";

interface Props {
  responses: ConversationItem[];
  onInputChange: (val: string) => void;
  fetchAnswer: () => void;
  canSubmit: boolean;
  fetching: boolean;
  currentQuestion: string;
}

const ChatChannel = ({
  responses,
  onInputChange,
  fetchAnswer,
  canSubmit,
  fetching,
  currentQuestion,
}: Props) => {
  return (
    <Wrapper>
      <Inner>
        {responses.map((r) => (
          <span>
            <ChatBubble
              avatarUrl="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
              author="USER"
              message={r.question}
            />
            {r == null ? (
              ""
            ) : (
              <ChatBubble
                avatarUrl="https://pbs.twimg.com/media/Ea5zqsUX0AMoxxi.jpg"
                author="COACH"
                message={r.answer.answer}
              />
            )}
          </span>
        ))}
      </Inner>
      <Footer>
        <ChatInput
          onInputChange={onInputChange}
          fetchAnswer={fetchAnswer}
          canSubmit={canSubmit}
          fetching={fetching}
          numOfQuestions={responses.length}
          currentQuestion={currentQuestion}
        />
      </Footer>
    </Wrapper>
  );
};

export default ChatChannel;
