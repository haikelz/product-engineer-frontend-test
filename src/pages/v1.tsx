import { useAtom, useAtomValue } from "jotai";
import { DragDropContext, Draggable, DropResult } from "react-beautiful-dnd";
import StrictModeDroppable from "~/components/StrictModeDroppable";
import TaskItem from "~/components/TaskItem";
import AddNewGroupModal from "~/components/modal/AddNewGroupModal";
import CreateTaskModal from "~/components/modal/CreateTaskModal";
import DeleteModal from "~/components/modal/DeleteModal";
import EditTaskModal from "~/components/modal/EditTaskModal";
import { tw } from "~/lib/utils/tw";
import {
  dataAtom,
  isOpenAddNewGroupModalAtom,
  isOpenCreateTaskModalAtom,
  isOpenDeleteModalAtom,
  isOpenEditTaskModalAtom,
} from "~/store";

export default function VersionOne() {
  const data = useAtomValue(dataAtom);
  const [isOpenAddNewGroupModal, setIsOpenAddNewGroupModal] = useAtom(
    isOpenAddNewGroupModalAtom
  );
  const [isOpenCreateTaskModal, setIsOpenCreateTaskModal] = useAtom(
    isOpenCreateTaskModalAtom
  );

  const isOpenDeleteModal = useAtomValue(isOpenDeleteModalAtom);
  const isOpenEditTaskModal = useAtomValue(isOpenEditTaskModalAtom);

  function handleOnDragEnd(results: DropResult) {
    console.log(results);
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
      {isOpenCreateTaskModal ? <CreateTaskModal /> : null}
      {isOpenEditTaskModal ? <EditTaskModal /> : null}
      {isOpenAddNewGroupModal ? <AddNewGroupModal /> : null}
      {isOpenDeleteModal ? <DeleteModal /> : null}
    </>
  );
}
