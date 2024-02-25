import { ScrollView } from "react-native";
import { PageContainer } from "../components/layout/PageContainer";
import StarButtonViewer from "../components/ImageViewer/starButtonViewer/StarButtonViewer";

const Game = () => {
  return (
    <ScrollView>
      <PageContainer>
        <StarButtonViewer />
      </PageContainer>
    </ScrollView>
  );
};

export default Game;
