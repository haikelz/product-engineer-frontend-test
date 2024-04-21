import { useAtom } from "jotai";
import { DragDropContext, Draggable, DropResult } from "react-beautiful-dnd";
import StrictModeDroppable from "../components/StrictModeDroppable";
import TaskItem from "../components/TaskItem";
import { dataAtom } from "../store";
import { tw } from "../lib/utils/tw";

export default function VersionOne() {
  const [data, setData] = useAtom(dataAtom);

  function handleOnDragEnd(results: DropResult) {
    if (!results.destination) return;

    const arr = data.filter((item) => item.tasks);

    const items = Array.from(arr);
    const [reorderedItem] = items.splice(results.source.index, 1);
    items.splice(results.destination.index, 0, reorderedItem);

    setData(items);
  }

  return (
    <>
      <header className="w-full px-4 py-4 flex justify-center items-center border-b-2 border-b-[#E0E0E0]">
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
        <section className="flex max-w-7xl w-full flex-col space-y-4 xl:space-y-0 xl:flex-row xl:space-x-4 justify-start items-center xl:items-start">
          {data.map((item) => (
            <div
              key={item.id}
              className={tw(
                "rounded-md p-3 w-[326px] border-2",
                item.monthRange === "January - March"
                  ? "bg-primary-surface border-2 border-primary-border"
                  : item.monthRange === "April - June"
                  ? "border-secondary-border bg-secondary-surface"
                  : item.monthRange === "July - September"
                  ? "bg-danger-surface border-danger-border"
                  : "bg-success-surface border-success-border"
              )}
            >
              <div className="space-y-2">
                <button
                  type="button"
                  className={tw(
                    "border-2 rounded-md py-1 px-3 text-xs",
                    item.monthRange === "January - March"
                      ? "border-primary-border text-primary-main"
                      : item.monthRange === "April - June"
                      ? "border-secondary-border text-secondary-main"
                      : item.monthRange === "July - September"
                      ? "text-danger-main border-danger-border"
                      : "text-success-main border-success-border"
                  )}
                >
                  {item.name}
                </button>
                <p className="font-bold text-xs">{item.monthRange}</p>
              </div>
              <DragDropContext onDragEnd={handleOnDragEnd}>
                <StrictModeDroppable droppableId={item.id}>
                  {(provided) => (
                    <div
                      className="flex flex-col space-y-4 my-2 justify-center items-start w-full"
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {item.tasks.map((task, index) => (
                        <Draggable
                          key={task.id}
                          draggableId={task.id}
                          index={index}
                        >
                          {(provided) => (
                            <TaskItem
                              provided={provided}
                              progress={task.progress}
                              name={task.name}
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
          ))}
        </section>
      </main>
    </>
  );
}

function GroupTaskOne() {
  const [data, setData] = useAtom(dataAtom);

  function handleOnDragEnd(results: DropResult) {
    if (!results.destination) return;

    const items = Array.from(data);
    const [reorderedItem] = items.splice(results.source.index, 1);
    items.splice(results.destination.index, 0, reorderedItem);

    setData(items);
  }

  return (
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
              {data.map((item, index) => (
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
  );
}

function GroupTaskTwo() {
  return (
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
  );
}

function GroupTaskThree() {
  function handleOnDragEnd() {}

  return (
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
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <StrictModeDroppable droppableId="ROOT">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex flex-col space-y-4 my-2 justify-center items-start w-full"
            >
              <Draggable key="task-3" draggableId="task-3" index={1}>
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
  );
}

function GroupTaskFour() {
  function handleOnDragEnd() {}

  return (
    <div className="rounded-md p-3 w-[326px] bg-success-surface border-2 border-success-border">
      <div className="space-y-2">
        <button
          type="button"
          className="border-success-border border-2 rounded-md py-1 px-3 text-success-main text-xs"
        >
          Group Task 4
        </button>
        <p className="font-bold text-xs">October - December</p>
      </div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <StrictModeDroppable droppableId="ROOT">
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
  );
}
