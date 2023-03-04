import React, { useState } from "react";
import YouTube from "react-youtube";

import { Wrapper } from "./styles";

interface Props {
  id: string;
}

const Video = ({ id }: Props) => {
  const [ready, setReady] = useState(false);

  const opts = {
    playerVars: {
      autoplay: 0,
    },
  };

  const _onReady = (event: any) => {
    event.target.pauseVideo();
    setReady(true)
  };

  return (
    <Wrapper ready={ready}>
      <YouTube videoId={id} opts={opts} onReady={_onReady} />
    </Wrapper>
  );
};

export default Video;
