import * as S from "./RoundButton.style";
import { colors } from "../../../styles/colors";
import { Text } from "react-native";

export type RoundButtonProps = {
  status: "primary" | "cancel";
  label: string;
  width?: number | "full";
  height?: number;
  fontWeight?: "normal" | "bold";
  fontSize?: number;
  onPress: () => void;
};

const RoundButton = ({
  status,
  label,
  width = "full",
  height = 40, //이후 기본값 수정
  fontWeight = "normal",
  fontSize = 16,
  onPress,
}: RoundButtonProps) => {
  return (
    <S.Button onPress={onPress} status={status} width={width} height={height}>
      <Text
        style={{
          fontSize: fontSize,
          fontWeight: fontWeight,
          color: status === "primary" ? colors.Black : colors.Black,
        }}
      >
        {label}
      </Text>
    </S.Button>
  );
};

export default RoundButton;
