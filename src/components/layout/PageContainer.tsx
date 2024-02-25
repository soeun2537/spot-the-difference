import styled from "@emotion/native";
import { colors } from "../../styles/colors";

type PageContainerProps = {
  margin?: number;
  children?: React.ReactNode;
};

const Container = styled.View<PageContainerProps>`
  flex: 1;
  margin: ${({ margin }) => `${margin}px`};
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 10px;
  border-radius: 20px;
  background-color: ${colors.White};
`;

export const PageContainer = ({
  margin = 10,
  children,
}: PageContainerProps) => {
  return <Container margin={margin}>{children}</Container>;
};
