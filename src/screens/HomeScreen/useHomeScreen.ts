import userStore from '../../store/userStore';

export const useHomeScreen = () => {
  const { userName, setUserName, currentLocation, setCurrentLocation } = userStore();
  return { userName, setUserName, currentLocation, setCurrentLocation };
};
