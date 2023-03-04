import React, { useEffect } from "react";
import { Wrapper } from "./styles";

interface Props {
  onInputChange: (val: string) => void;
  fetchAnswer: () => void;
  canSubmit: boolean;
  fetching: boolean;
  numOfQuestions: number;
  currentQuestion: string;
}

const ChatInput = ({
  onInputChange,
  fetchAnswer,
  canSubmit,
  fetching,
  numOfQuestions,
  currentQuestion,
}: Props) => {
  useEffect(() => {
    onInputChange("");
  }, [numOfQuestions]);

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      fetchAnswer();
    }
  };

  return (
    <Wrapper fetching={fetching}>
      <input
        value={currentQuestion}
        ref={(input) => input && input.focus()}
        onKeyDown={handleKeyDown}
        placeholder="Ask me about a trick you're struggling with"
        onChange={(v) => onInputChange(v.target.value)}
      />
      <button disabled={!canSubmit || fetching} onClick={fetchAnswer} />
    </Wrapper>
  );
};

export default ChatInput;
