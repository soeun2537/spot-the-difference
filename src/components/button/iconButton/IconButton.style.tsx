import styled from "@emotion/native";
import { IconButtonProps } from "./IconButton";

type StyledProps = Pick<IconButtonProps, "width" | "height">;

export const Container = styled.TouchableOpacity<StyledProps>`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
`;

export const ImageElement = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: contain;
`;
