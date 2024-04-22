import { atom } from "jotai";
import { data } from "~/lib/utils/data";

type DataProps = {
  id: string;
  name: string;
  monthRange: string;
  tasks: {
    id: string;
    name: string;
    progress: string;
  }[];
};

export const dataAtom = atom<DataProps[]>(data);
export const moreIdAtom = atom<string>("");
export const isOpenMoreIdAtom = atom<boolean>(false);

export const isOpenCreateTaskModalAtom = atom<boolean>(false);
export const isOpenEditTaskModalAtom = atom<boolean>(false);
export const isOpenAddNewGroupModalAtom = atom<boolean>(false);
export const isOpenDeleteModalAtom = atom<boolean>(false);
