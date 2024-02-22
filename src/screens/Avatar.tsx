import { PageContainer } from "../components/layout/PageContainer";
import Col from "../components/layout/Col";
import AvatarModule from "../components/module/avatarModule/AvatarModule";
import RoundButton from "../components/button/roundButton/RoundButton";
import { useAvatarSelect } from "../hooks/useAvatarSelect";

const Avatar = () => {
  const { handleLeftArrowClick, handleRightArrowClick, currentAvatarName } =
    useAvatarSelect();
  return (
    <PageContainer>
      <AvatarModule
        onLeftArrowClick={handleLeftArrowClick}
        onRightArrowClick={handleRightArrowClick}
        avatarName={currentAvatarName}
      />
      <Col height={20} />
      <RoundButton
        status="primary"
        label={"저장"}
        width={120}
        height={40}
        onPress={() => {}}
      />
      <Col height={20} />
    </PageContainer>
  );
};

export default Avatar;
