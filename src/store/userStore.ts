import { create } from 'zustand';

interface Location {
  latitude: number | undefined;
  longitude: number | undefined;
}

interface UserStore {
  userName: string;
  currentLocation: Location;
  destination: Location;
  history: Array<object>;
  setUserName: (userName: string) => void;
  setCurrentLocation: (currentLocation: Location) => void;
  setDestination: (destination: Location) => void;
}
const userStore = create<UserStore>()((set) => ({
  userName: '',
  currentLocation: { latitude: undefined, longitude: undefined },
  destination: { latitude: undefined, longitude: undefined },
  history: [],
  setUserName: (userName: string) => set({ userName }),
  setCurrentLocation: (currentLocation: Location) => set({ currentLocation }),
  setDestination: (destination: Location) => set({ destination }),
}));

export default userStore;
