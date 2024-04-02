import GameImageViewer from "../components/imageViewer/gameImageViewer/GameImageViewer";
import { IMAGE_URLS } from "../constants";
import { PageContainer } from "../components/layout/PageContainer";

const SpotTheDifference = () => {
  return (
    <PageContainer margin={0} backgroundColor="none">
      <GameImageViewer imageUrl={IMAGE_URLS[6]} />
      <GameImageViewer imageUrl={IMAGE_URLS[6]} />
    </PageContainer>
  );
};

export default SpotTheDifference;
