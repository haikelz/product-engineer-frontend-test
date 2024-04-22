import { atom } from "jotai";

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

const data = [
  {
    id: "0968f15a-fe6c-48a0-85f1-a041ecbcc5f4",
    name: "Group Task 1",
    monthRange: "January - March",
    tasks: [
      {
        id: "8d7bd016-75fb-413d-a0e1-0b2fdbf73c31",
        name: "Re-designed the zero-g doggie bags. No more spills!",
        progress: "100%",
      },
      {
        id: "733583c8-f999-425f-8fc4-26bf1e0e350f",
        name: "Bundle interplanetary analytics for improved transmission",
        progress: "30%",
      },
    ],
  },
  {
    id: "49786816-1bee-43b5-9abc-e1100c077e93",
    name: "Group Task 2",
    monthRange: "April - June",
    tasks: [],
  },
  {
    id: "bcba4848-b643-44f3-a876-6043213e976d",
    name: "Group Task 3",
    monthRange: "July - September",
    tasks: [
      {
        id: "b81079fc-161d-49a1-a1e1-123f2b6e4ad5",
        name: "Data Migration: Performance & Culture End Game",
        progress: "60%",
      },
    ],
  },
  {
    id: "2e4405c8-56bc-4bd1-af18-bfb57a823a44",
    name: "Group Task 4",
    monthRange: "October - December",
    tasks: [
      {
        id: "6c0f0087-156d-4499-8893-0595a5a26c33",
        name: "Bundle interplanetary analytics for improved transmission",
        progress: "20%",
      },
    ],
  },
];

export const dataAtom = atom<DataProps[]>(data);
export const isOpenMoreIdAtom = atom<string>("");
export const isOpenCreateTaskModalAtom = atom<boolean>(false);
export const isOpenEditTaskModalAtom = atom<boolean>(false);
export const isOpenAddNewGroupModalAtom = atom<boolean>(false);
