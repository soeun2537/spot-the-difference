import * as S from "./GameImageViewer.style";

const GameImageViewer = ({ imageUrl }) => {
  return (
    <S.Container>
      <S.ImageContainer>
        <S.ImageElement source={imageUrl} />
      </S.ImageContainer>
    </S.Container>
  );
};

export default GameImageViewer;
