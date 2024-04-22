import { useAtom } from "jotai";
import { DragDropContext, Draggable, DropResult } from "react-beautiful-dnd";
import StrictModeDroppable from "../components/StrictModeDroppable";
import TaskItem from "../components/TaskItem";
import { tw } from "../lib/utils/tw";
import {
  dataAtom,
  isOpenAddNewGroupModalAtom,
  isOpenCreateTaskModalAtom,
} from "../store";

export default function VersionOne() {
  const [data] = useAtom(dataAtom);
  const [isOpenCreateTaskModal, setIsOpenCreateTaskModal] = useAtom(
    isOpenCreateTaskModalAtom
  );
  const [isOpenAddNewGroupModal, setIsOpenAddNewGroupModal] = useAtom(
    isOpenAddNewGroupModalAtom
  );

  function handleOnDragEnd(results: DropResult) {}

  return (
    <>
      <header className="w-full px-4 py-4 flex justify-center items-center border-b-2 border-b-[#E0E0E0]">
        <nav className="max-w-7xl flex justify-start items-center w-full">
          <div className="w-fit flex justify-center items-center space-x-3">
            <h1 className="font-bold text-lg">Product Roadmap</h1>
            <button
              type="button"
              className="py-1.5 px-4 text-xs bg-primary-main drop-shadow-md text-white font-bold rounded-lg"
              onClick={() => setIsOpenAddNewGroupModal(true)}
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
                      {item.tasks.length ? (
                        item.tasks.map((task, index) => (
                          <Draggable
                            key={task.id}
                            draggableId={task.id}
                            index={index}
                          >
                            {(provided) => (
                              <TaskItem
                                id={task.id}
                                provided={provided}
                                progress={task.progress}
                                name={task.name}
                              />
                            )}
                          </Draggable>
                        ))
                      ) : (
                        <div className="bg-[#FAFAFA] w-full rounded-md border-2 border-[#E0E0E0] py-3 px-4">
                          <p className="text-sm text-[#757575]">No Task</p>
                        </div>
                      )}
                      {provided.placeholder}
                    </div>
                  )}
                </StrictModeDroppable>
              </DragDropContext>
              <button
                type="button"
                className="flex justify-center items-center space-x-2"
                onClick={() => setIsOpenCreateTaskModal(true)}
              >
                <img src="/images/plus.svg" alt="plus" />
                <span className="text-xs">New Task</span>
              </button>
            </div>
          ))}
        </section>
      </main>
      {isOpenCreateTaskModal ? (
        <div className="w-full flex justify-center items-center fixed backdrop-blur-lg top-0 min-h-screen">
          <div className="bg-white drop-shadow-lg w-[420px] p-4 rounded-lg">
            <div className="w-full flex justify-between items-center">
              <p className="text-lg font-bold">Create Task</p>
              <button
                type="button"
                onClick={() => setIsOpenCreateTaskModal(false)}
              >
                <img src="/images/close.svg" alt="close" />
              </button>
            </div>
            <div className="mt-6">
              <div className="mb-6 space-y-4">
                <div className="flex flex-col justify-start items-start">
                  <label htmlFor="task" className="text-sm font-bold mb-2">
                    Task Name
                  </label>
                  <input
                    className="px-4 py-2 rounded-lg w-full border-[3px]"
                    type="text"
                    name="task"
                    id=""
                    placeholder="Type Your Task"
                  />
                </div>
                <div className="flex flex-col justify-start items-start">
                  <label htmlFor="progress" className="text-sm font-bold mb-2">
                    Progress
                  </label>
                  <input
                    className="px-4 py-2 rounded-lg w-[143px] border-[3px]"
                    type="text"
                    name="progress"
                    id=""
                    placeholder="70%"
                  />
                </div>
              </div>
              <div className="w-full flex justify-end items-center">
                <div className="flex justify-center items-center w-fit space-x-3">
                  <button
                    type="button"
                    className="rounded-md border border-[#E0E0E0] shadow-md font-bold text-sm px-5 py-2"
                    onClick={() => setIsOpenCreateTaskModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="rounded-lg bg-primary-main text-sm text-white px-5 py-2 font-bold"
                    onClick={() => setIsOpenEditTaskModalAtom(true)}
                  >
                    Save Task
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {isOpenAddNewGroupModal ? (
        <div className="w-full flex justify-center items-center fixed backdrop-blur-lg top-0 min-h-screen">
          <div className="bg-white drop-shadow-lg w-[420px] p-4 rounded-lg">
            <div className="w-full flex justify-between items-center">
              <p className="text-lg font-bold">Add New Group</p>
              <button
                type="button"
                onClick={() => setIsOpenAddNewGroupModal(false)}
              >
                <img src="/images/close.svg" alt="close" />
              </button>
            </div>
            <div className="mt-6">
              <div className="mb-6 space-y-4">
                <div className="flex flex-col justify-start items-start">
                  <label htmlFor="title" className="text-sm font-bold mb-2">
                    Title
                  </label>
                  <input
                    className="px-4 py-2 rounded-lg w-full border-[3px]"
                    type="text"
                    name="title"
                    id=""
                    placeholder="Placeholder"
                  />
                </div>
                <div className="flex flex-col justify-start items-start">
                  <label
                    htmlFor="description"
                    className="text-sm font-bold mb-2"
                  >
                    Description
                  </label>
                  <textarea
                    className="px-4 py-2 rounded-lg w-full border-[3px]"
                    name="description"
                    id=""
                    placeholder="Placeholder"
                  />
                </div>
              </div>
              <div className="w-full flex justify-end items-center">
                <div className="flex justify-center items-center w-fit space-x-3">
                  <button
                    type="button"
                    className="rounded-md border border-[#E0E0E0] shadow-md font-bold text-sm px-5 py-2"
                    onClick={() => setIsOpenAddNewGroupModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="rounded-lg bg-primary-main text-sm text-white px-5 py-2 font-bold"
                    onClick={() => setIsOpenAddNewGroupModal(true)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div className="w-full flex justify-center items-center fixed backdrop-blur-lg top-0 min-h-screen">
        <div className="bg-white drop-shadow-lg w-[420px] p-4 rounded-lg">
          <div className="w-full flex justify-between items-center">
            <div className="flex justify-center items-center w-fit space-x-2">
              <img src="/images/danger.svg" alt="danger" />
              <p className="text-lg font-bold">Delete Task</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpenCreateTaskModal(false)}
            >
              <img src="/images/close.svg" alt="close" />
            </button>
          </div>
          <div className="mt-6">
            <p>
              Are you sure want to delete this task? your action can’t be
              reverted.
            </p>
            <div className="w-full flex mt-3 justify-end items-center">
              <div className="flex justify-center items-center w-fit space-x-3">
                <button
                  type="button"
                  className="rounded-lg border-2 border-[#E0E0E0] shadow-md font-bold text-sm px-5 py-2"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="rounded-lg bg-danger-main text-sm text-white px-5 py-2 font-bold"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
