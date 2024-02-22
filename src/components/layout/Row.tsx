import styled from "@emotion/native";

type RowProps = {
  height: number;
};

const Container = styled.View<RowProps>`
  height: ${({ height }) => `${height}px`};
`;

const Row = ({ height }: RowProps) => {
  return <Container height={height} />;
};

export default Row;
