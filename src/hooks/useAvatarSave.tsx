import AsyncStorage from "@react-native-async-storage/async-storage";

export function useAvatarSave(currentAvatarName) {
  const handleAvatarSave = async () => {
    try {
      await AsyncStorage.setItem("selectedAvatar", currentAvatarName);
    } catch (error) {
      console.error(
        "AsyncStorage에서 아바타를 저장하는 중 오류가 발생했습니다. 오류명:",
        error
      );
    }
  };

  return {
    handleAvatarSave,
  };
}
