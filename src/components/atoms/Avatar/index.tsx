import React from "react";
import { Wrapper } from "./styles";

interface Props {
  size?: number;
  url?: string;
}

const Avatar = ({
  size = 45,
  url = "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
}: Props) => (
  <Wrapper size={size}>
    <img src={url} alt="Avatar Fella" />
  </Wrapper>
);

export default Avatar;
