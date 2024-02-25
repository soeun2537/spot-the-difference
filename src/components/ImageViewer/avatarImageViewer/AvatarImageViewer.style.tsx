import styled from "@emotion/native";
import { AvatarImageViewerProps } from "./AvatarImageViewer";

type StyledProps = Pick<AvatarImageViewerProps, "top">;

export const AvatarContainer = styled.View<StyledProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
  min-width: 50%;
  aspect-ratio: 0.55;

  z-index: 1;
  top: ${(props) => (props.top === "none" ? "none" : `${props.top}px`)};
`;

export const ImageElement = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: contain;
`;
