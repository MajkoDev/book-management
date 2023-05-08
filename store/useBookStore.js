import { create } from "zustand";
import createBookSlice from "./createBookSlice";

const useBookStore = create((set, get) => ({
  ...createBookSlice(set, get),
}));

export default useBookStore;
