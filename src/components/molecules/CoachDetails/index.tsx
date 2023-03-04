import Avatar from "@/components/atoms/Avatar";
import Heading from "@/components/atoms/Heading";
import Text, { TextSize } from "@/components/atoms/Text";
import React from "react";
import { Wrapper } from "./styles";

const CoachDetails = () => (
  <Wrapper>
    <div className="title">
      <Heading level={4}>Your Coach</Heading>
    </div>
    <div className="details">
      <Avatar size={70} url="https://pbs.twimg.com/media/Ea5zqsUX0AMoxxi.jpg" />
      <div>
        <Text level={6} size={TextSize.LG}>Coach Frank</Text>
        <Text size={TextSize.XXS}>Legendary Skate Coach</Text>
      </div>
    </div>
  </Wrapper>
);

export default CoachDetails;
