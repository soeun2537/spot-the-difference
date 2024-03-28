import { PageContainer } from "../components/layout/PageContainer";
import AvatarModule from "../components/module/avatarModule/AvatarModule";
import RoundButton from "../components/button/roundButton/RoundButton";
import Col from "../components/layout/Col";
import { useAvatarSelect } from "../hooks/useAvatarSelect";
import { useAvatarSave } from "../hooks/useAvatarSave";

const Home = () => {
  const { handleLeftArrowClick, handleRightArrowClick, currentAvatarName } =
    useAvatarSelect();
  const { handleAvatarSave } = useAvatarSave(currentAvatarName);

  return (
    <PageContainer>
      
    </PageContainer>
  );
};

export default Home;
