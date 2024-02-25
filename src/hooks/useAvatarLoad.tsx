import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

export function useAvatarLoad() {
  const [savedAvatar, setSavedAvatar] = useState(null);

  const HandleAvatarLoad = async () => {
    try {
      const avatar = await AsyncStorage.getItem("selectedAvatar");
      setSavedAvatar(avatar);
    } catch (error) {
      console.error(
        "AsyncStorage에서 아바타를 가져오는 중 오류가 발생했습니다. 오류명:",
        error
      );
    }
  };

  return {
    savedAvatar,
    HandleAvatarLoad,
  };
}
