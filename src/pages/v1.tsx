import { useEffect, useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DroppableProps,
  OnDragEndResponder,
} from "react-beautiful-dnd";
import TaskItem from "../components/TaskItem";

const data = [
  {
    id: "1",
    name: "Re-designed the zero-g doggie bags. No more spills!",
    progress: "100%",
  },
  {
    id: "2",
    name: "Bundle interplanetary analytics for improved transmission",
    progress: "30%",
  },
];

export function StrictModeDroppable({ children, ...props }: DroppableProps) {
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
}

export default function VersionOne() {
  const [characters, updateCharacters] = useState(data);

  function handleOnDragEnd(results) {
    if (!results.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(results.source.index, 1);
    items.splice(results.destination.index, 0, reorderedItem);

    updateCharacters(items);
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
          {/* Task 1 */}
          <div className="rounded-md p-3 w-[326px] bg-primary-surface border-2 border-primary-border">
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
              <StrictModeDroppable droppableId="task-1">
                {(provided) => (
                  <div
                    className="flex flex-col space-y-4 my-2 justify-center items-start w-full"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {characters.map((item, index) => (
                      <Draggable
                        key={item.id.toString()}
                        draggableId={item.id.toString()}
                        index={index}
                      >
                        {(provided) => (
                          <TaskItem
                            provided={provided}
                            name={item.name}
                            progress={item.progress}
                          />
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </StrictModeDroppable>
            </DragDropContext>
            <button
              type="button"
              className="flex justify-center items-center space-x-2"
            >
              <img src="/images/plus.svg" alt="plus" />
              <span className="text-xs">New Task</span>
            </button>
          </div>
          {/* Task 2 */}
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
          {/* Task 3 */}
          <div className="rounded-md p-3 w-[326px] bg-danger-surface border-2 border-danger-border">
            <div className="space-y-2">
              <button
                type="button"
                className="border-danger-border border-2 rounded-md py-1 px-3 text-danger-main text-xs"
              >
                Group Task 3
              </button>
              <p className="font-bold text-xs">July - September</p>
            </div>
            <DragDropContext>
              <StrictModeDroppable droppableId="ROOT">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="flex flex-col space-y-4 my-2 justify-center items-start w-full"
                  >
                    <Draggable key="7" draggableId="7" index={1}>
                      {(provided) => (
                        <TaskItem
                          provided={provided}
                          name="Data Migration: Performance & Culture End Game"
                          progress="60%"
                        />
                      )}
                    </Draggable>
                    {provided.placeholder}
                  </div>
                )}
              </StrictModeDroppable>
            </DragDropContext>
            <button
              type="button"
              className="flex justify-center items-center space-x-2"
            >
              <img src="/images/plus.svg" alt="plus" />
              <span className="text-xs">New Task</span>
            </button>
          </div>
          {/* Task 4 */}
          <div className="rounded-md p-3 w-[326px] bg-success-surface border-2 border-success-border">
            <div className="space-y-2">
              <button
                type="button"
                className="border-success-border border-2 rounded-md py-1 px-3 text-success-main text-xs"
              >
                Group Task 4
              </button>
              <p className="font-bold text-xs">January - March</p>
            </div>
            <DragDropContext>
              <StrictModeDroppable droppableId="task-4">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="flex flex-col space-y-4 my-2 justify-center items-start w-full"
                  >
                    <Draggable key="task-4" draggableId="task-4" index={1}>
                      {(provided) => (
                        <TaskItem
                          provided={provided}
                          name="Bundle interplanetary analytics for improved transmission"
                          progress="20%"
                        />
                      )}
                    </Draggable>
                  </div>
                )}
              </StrictModeDroppable>
            </DragDropContext>
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
