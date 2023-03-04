import Avatar from "@/components/atoms/Avatar";
import Heading from "@/components/atoms/Heading";
import Text, { TextSize } from "@/components/atoms/Text";
import ChatChannel from "@/components/molecules/ChatChannel";
import CoachDetails from "@/components/molecules/CoachDetails";
import Video from "@/components/molecules/Video";
import { ConversationItem } from "@/types/index";
import api from "@/utils/api";
import React, { useEffect, useState } from "react";
import {
  Wrapper,
  Body,
  ChatWrapper,
  TrickDetailsHeader,
  VideoSection,
  ChatDetailsHeader,
  ChatChannelWrapper,
} from "./styles";

const ChatScreen = () => {
  const [fetchingResponse, setFetchingResponse] = useState(false);
  const [responses, setResponses] = useState<ConversationItem[]>([]);
  const [question, setQuestion] = useState<string | null>(null);
  const [videos, setVideos] = useState<string[]>([]);

  const _fetchAnswer = () => {
    // Must shame!
    if (
      question &&
      question?.toLocaleLowerCase().indexOf("rollerblade") !== -1
    ) {
      setResponses([
        {
          question: question,
          answer: {
            answer: "Get out of here with that, I am ending this conversation!",
            trickName: "Rollerblade fails",
            type: "Fake Trick",
            difficulty: "Child's work",
          },
        },
      ]);
    } else if ((question?.length ?? 0) > 5) {
      setFetchingResponse(true);
    }
  };

  useEffect(() => {
    if (responses.length) {
      api.youtube
        .getRelatedVideos(
          `Trick tips for ${responses[responses.length - 1]?.answer.trickName}`
        )
        .then((res) => {
          setVideos(res);
        });
    }
  }, [responses]);

  useEffect(() => {
    if (question != null && fetchingResponse) {
      api.openai.chatCompletion(question).then((res) => {
        if (res) {
          setResponses([
            ...responses,
            {
              question: question,
              answer: res,
            },
          ]);
          setFetchingResponse(false);
          setQuestion(null);
        }
      });
    }
  }, [fetchingResponse]);

  return (
    <Wrapper>
      <Body hidden={!responses.length}>
        <TrickDetailsHeader>
          <Heading level={1}>
            {responses[responses.length - 1]?.answer.trickName}
          </Heading>
          <div className="details">
            <Avatar size={60} />
            <div>
              <Heading level={6}>
                Difficulty Level:{" "}
                {responses[responses.length - 1]?.answer.difficulty}
              </Heading>
              <Text size={TextSize.SM}>
                Trick Type: {responses[responses.length - 1]?.answer.type}
              </Text>
            </div>
          </div>
        </TrickDetailsHeader>
        <VideoSection>
          <div className="main-video">
            {!!videos.length && <Video id={videos[videos.length - 1]} />}
          </div>
          <div className="secondary-videos">
            {videos.slice(1, videos.length - 1)?.map((v) => (
              <Video id={v} />
            ))}
          </div>
        </VideoSection>
      </Body>
      <ChatWrapper expanded={!responses.length}>
        <ChatDetailsHeader>
          <CoachDetails />
        </ChatDetailsHeader>
        <ChatChannelWrapper>
          <ChatChannel
            currentQuestion={question ?? ""}
            responses={responses}
            onInputChange={setQuestion}
            fetchAnswer={_fetchAnswer}
            canSubmit={(question?.length ?? 0) > 5}
            fetching={fetchingResponse}
          />
        </ChatChannelWrapper>
      </ChatWrapper>
    </Wrapper>
  );
};

export default ChatScreen;
