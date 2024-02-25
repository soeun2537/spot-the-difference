import styled from "@emotion/native";
import { colors } from "../../../styles/colors";

export const StageContainer = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: ${colors.White};
`;

export const ButtonContainer = styled.View`
  flex: 1;
  aspect-ratio: 0.6;
  min-width: 30%;
  align-items: center;
  justify-content: center;
`;
