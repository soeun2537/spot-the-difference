import styled from "@emotion/native";
import { RoundButtonProps } from "./RoundButton";
import { colors } from "../../../styles/colors";

type StyledProps = Omit<RoundButtonProps, "label">;

export const Button = styled.TouchableOpacity<StyledProps>`
  justify-content: center;
  align-items: center;
  padding: 8px 0px;
  border-radius: 10px;
  width: ${({ width }) => (width === "full" ? "100%" : `${width}px`)};
  height: ${({ height }) => `${height}px`};
  background-color: ${({ status }) =>
    status === "primary" ? colors.Primary : colors.White};
`;
