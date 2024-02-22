import * as S from "./GridImageViewer.style";
import { IMAGE_URLS } from "../../../constants";

const GridImageViewer = () => {
  return (
    <S.GridContainer>
      {IMAGE_URLS.map((imageUrl, index) => (
        <S.ImageContainer key={index}>
          <S.ImageElement source={imageUrl} />
        </S.ImageContainer>
      ))}
    </S.GridContainer>
  );
};

export default GridImageViewer;
