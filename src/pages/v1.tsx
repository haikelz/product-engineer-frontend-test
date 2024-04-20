import { useEffect, useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DroppableProps,
} from "react-beautiful-dnd";
import { tw } from "../lib/utils/tw";

const data = [
  {
    id: "1",
    name: "Re-designed the zero-g doggie bags. No more spills!",
  },
  {
    id: "2",
    name: "Bundle interplanetary analytics for improved transmission",
  },
  {
    id: "3",
    name: "mantap dan luar biasa",
  },
];

export const StrictModeDroppable = ({ children, ...props }: DroppableProps) => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return <Droppable {...props}>{children}</Droppable>;
};

export default function VersionOne() {
  const [characters, updateCharacters] = useState(data);

  function handleOnDragEnd(results) {
    const { source, destination, type } = results;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (type === "group") {
      const reorderedCharacters = [...characters];

      const [removedCharacters] = reorderedCharacters.splice(source.index, 1);
      reorderedCharacters.splice(destination.index, 0, removedCharacters);

      return updateCharacters(reorderedCharacters);
    }
  }

  return (
    <>
      <header className="w-full py-4 flex justify-center items-center border-b-2 border-b-[#E0E0E0]">
        <nav className="max-w-7xl flex justify-start items-center w-full">
          <div className="w-fit flex justify-center items-center space-x-3">
            <h1 className="font-bold text-lg">Product Roadmap</h1>
            <button
              type="button"
              className="py-1.5 px-4 text-xs bg-primary-main drop-shadow-md text-white font-bold rounded-lg"
            >
              + Add New Group
            </button>
          </div>
        </nav>
      </header>
      <main className="w-full py-4 flex justify-center items-start min-h-screen">
        <section className="flex max-w-7xl w-full space-x-4 justify-start items-start">
          <div className="rounded-md p-3 w-[326px] bg-primary-surface border-2 border-primary-main">
            <div className="space-y-2">
              <button
                type="button"
                className="border-primary-border border-2 rounded-md py-1 px-3 text-primary-main text-xs"
              >
                Group Task 1
              </button>
              <p className="font-bold text-xs">January - March</p>
            </div>
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId="ROOT" type="group">
                {(provided) => (
                  <div
                    className="flex flex-col list space-y-4 my-2 justify-center items-start w-full"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {characters.map((item, index) => (
                      <Draggable
                        key={item.id.toString()}
                        draggableId={item.id.toString()}
                        index={index + 1}
                      >
                        {(provided) => (
                          <div
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                            ref={provided.innerRef}
                            className="bg-[#FAFAFA] w-fit rounded-md border-2 border-[#E0E0E0] p-4"
                          >
                            <div className="border-b-2 border-dashed border-[#E0E0E0] py-1.5">
                              <p className="font-bold text-sm">{item.name}</p>
                            </div>
                            <div className="py-4 flex w-full justify-between items-center">
                              <div className="flex justify-center items-center space-x-2">
                                <div className="w-[201px] bg-[#EDEDED] rounded-full overflow-hidden h-5">
                                  <div
                                    className={tw(
                                      `w-1/2 h-5 rounded-full rounded-r-none bg-primary-main`
                                    )}
                                  ></div>
                                </div>
                                <span className="text-xs text-[#757575]">
                                  30%
                                </span>
                              </div>
                              <button type="button">
                                <img src="/images/more.svg" alt="more" />
                              </button>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
            <button
              type="button"
              className="flex justify-center items-center space-x-2"
            >
              <img src="/images/plus.svg" alt="plus" />
              <span className="text-xs">New Task</span>
            </button>
          </div>
          <div className="border-2 rounded-md p-3 w-[326px] border-secondary-border bg-secondary-surface">
            <div className="space-y-2">
              <button
                type="button"
                className="border-secondary-border border-2 rounded-md py-1 px-3 text-secondary-pressed text-xs"
              >
                Group Task 2
              </button>
              <p className="font-bold text-xs">April - June</p>
            </div>
            <div className="bg-[#FAFAFA] my-2 w-full text-[#757575] border-2 px-4 py-3 rounded-md border-[#E0E0E0]">
              <p className="text-sm">No Task</p>
            </div>
            <button
              type="button"
              className="flex justify-center items-center space-x-2"
            >
              <img src="/images/plus.svg" alt="plus" />
              <span className="text-xs">New Task</span>
            </button>
          </div>
          <div className="rounded-md p-3 w-[326px] bg-primary-surface border-2 border-primary-main">
            <div className="space-y-2">
              <button
                type="button"
                className="border-primary-border border-2 rounded-md py-1 px-3 text-primary-main text-xs"
              >
                Group Task 3
              </button>
              <p className="font-bold text-xs">July - September</p>
            </div>
            <DragDropContext>
              <Droppable droppableId="ROOT" type="group">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="flex flex-col space-y-4 my-2 justify-center items-start w-full"
                  >
                    <div className="bg-[#FAFAFA] w-fit rounded-md border-2 border-[#E0E0E0] p-4">
                      <div className="border-b-2 border-dashed border-[#E0E0E0] py-1.5">
                        <p className="font-bold text-sm">
                          Data Migration: Performance & Culture End Game
                        </p>
                      </div>
                      <div className="py-4 flex w-full justify-between items-center">
                        <div className="flex justify-center items-center space-x-2">
                          <div className="w-[201px] bg-[#EDEDED] rounded-full overflow-hidden h-5">
                            <div
                              className={tw(
                                `h-5 w-3/5 rounded-full rounded-r-none bg-primary-main`
                              )}
                            ></div>
                          </div>
                          <span className="text-xs text-[#757575]">60%</span>
                        </div>
                        <button type="button">
                          <img src="/images/more.svg" alt="more" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </Droppable>
            </DragDropContext>
            <button
              type="button"
              className="flex justify-center items-center space-x-2"
            >
              <img src="/images/plus.svg" alt="plus" />
              <span className="text-xs">New Task</span>
            </button>
          </div>
          <div className="rounded-md p-3 w-[326px] bg-primary-surface border-2 border-primary-main">
            <div className="space-y-2">
              <button
                type="button"
                className="border-primary-border border-2 rounded-md py-1 px-3 text-primary-main text-xs"
              >
                Group Task 1
              </button>
              <p className="font-bold text-xs">January - March</p>
            </div>
            <div className="flex flex-col space-y-4 my-2 justify-center items-start w-full">
              <div className="bg-[#FAFAFA] w-fit rounded-md border-2 border-[#E0E0E0] p-4">
                <div className="border-b-2 border-dashed border-[#E0E0E0] py-1.5">
                  <p className="font-bold text-sm">
                    Bundle interplanetary analytics for improved transmission
                  </p>
                </div>
                <div className="py-4 flex w-full justify-between items-center">
                  <div className="flex justify-center items-center space-x-2">
                    <div className="w-[201px] bg-[#EDEDED] rounded-full overflow-hidden h-5">
                      <div
                        className={tw(
                          `h-5 w-1/5 rounded-full rounded-r-none bg-primary-main`
                        )}
                      ></div>
                    </div>
                    <span className="text-xs text-[#757575]">30%</span>
                  </div>
                  <button type="button">
                    <img src="/images/more.svg" alt="more" />
                  </button>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="flex justify-center items-center space-x-2"
            >
              <img src="/images/plus.svg" alt="plus" />
              <span className="text-xs">New Task</span>
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
