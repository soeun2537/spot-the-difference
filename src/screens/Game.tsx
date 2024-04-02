import { ScrollView } from "react-native";
import { PageContainer } from "../components/layout/PageContainer";
import StarButtonViewer from "../components/imageViewer/starButtonViewer/StarButtonViewer";

const Game = ({ navigation: { navigate } }) => {
  return (
    <ScrollView>
      <PageContainer>
        <StarButtonViewer onPress={() => navigate("SpotTheDifference")} />
      </PageContainer>
    </ScrollView>
  );
};

export default Game;
