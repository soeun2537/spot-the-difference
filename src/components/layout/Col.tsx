import styled from "@emotion/native";

type ColProps = {
  height: number;
};

const Container = styled.View<ColProps>`
  height: ${({ height }) => `${height}px`};
`;

const Col = ({ height }: ColProps) => {
  return <Container height={height} />;
};

export default Col;
