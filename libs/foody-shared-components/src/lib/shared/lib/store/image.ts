import { create } from 'zustand';
import { UserSession } from '../types/user';

type ImageStore = {
  image: File | null;
  setImage: (image: File | null) => void;
};

const imageStore = create<ImageStore>(set => ({
  image: null,
  setImage: image => set({ image }),
}));

export { imageStore };
