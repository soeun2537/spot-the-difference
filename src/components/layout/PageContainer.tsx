import styled from "@emotion/native";
import { colors } from "../../styles/colors";

type PageContainerProps = {
  margin?: number;
  backgroundColor?: string;
  children?: React.ReactNode;
};

const Container = styled.View<PageContainerProps>`
  flex: 1;
  margin: ${({ margin }) => `${margin}px`};
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 10px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor === "none" ? "none" : colors.White};
`;

export const PageContainer = ({
  margin = 0,
  children,
  backgroundColor = colors.White,
}: PageContainerProps) => {
  return (
    <Container margin={margin} backgroundColor={backgroundColor}>
      {children}
    </Container>
  );
};
