import { create } from 'zustand';

type ImageStore = {
  image: File | null;
  url: string | null;
  setImage: (image: File | null) => void;
  setImageUrl: (url: string | null) => void;
};

const imageStore = create<ImageStore>(set => ({
  image: null,
  url: null,
  setImage: image => set({ image }),
  setImageUrl: url => set({ url }),
}));

export { imageStore };
