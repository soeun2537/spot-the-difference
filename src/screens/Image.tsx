import { PageContainer } from "../components/layout/PageContainer";
import GridImageViewer from "../components/ImageViewer/gridImageViewer/GridImageViewer";
import RoundButton from "../components/button/roundButton/RoundButton";

const Image = () => {
  return (
    <PageContainer>
      <GridImageViewer />
      <RoundButton
        status={"primary"}
        label={"이미지 업로드"}
        height={50}
        fontWeight={"normal"}
        fontSize={16}
        onPress={() => {}}
      />
    </PageContainer>
  );
};

export default Image;
