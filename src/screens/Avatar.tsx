import { PageContainer } from "../components/layout/PageContainer";
import AvatarModule from "../components/module/avatarModule/AvatarModule";
import RoundButton from "../components/button/roundButton/RoundButton";
import Col from "../components/layout/Col";
import { useAvatarSelect } from "../hooks/useAvatarSelect";
import { useAvatarSave } from "../hooks/useAvatarSave";

const Avatar = () => {
  const { handleLeftArrowClick, handleRightArrowClick, currentAvatarName } =
    useAvatarSelect();
  const { handleAvatarSave } = useAvatarSave(currentAvatarName);

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
        onPress={handleAvatarSave}
      />
      <Col height={20} />
    </PageContainer>
  );
};

export default Avatar;
