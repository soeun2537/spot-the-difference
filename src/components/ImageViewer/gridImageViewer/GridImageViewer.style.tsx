import styled from "@emotion/native";
import { colors } from "../../../styles/colors";

export const GridContainer = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: ${colors.White};
`;

export const ImageContainer = styled.View`
  flex: 1;
  aspect-ratio: 1;
  min-width: 30%;
  margin: 3px;
`;

export const ImageElement = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
