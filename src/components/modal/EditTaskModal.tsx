import { useSetAtom } from "jotai";
import { isOpenEditTaskModalAtom } from "~/store";

export default function EditTaskModal() {
  const setIsOpenEditTaskModal = useSetAtom(isOpenEditTaskModalAtom);

  return (
    <div className="w-full flex justify-center items-center fixed backdrop-blur-lg top-0 min-h-screen">
      <div className="bg-white drop-shadow-lg w-[420px] p-4 rounded-lg">
        <div className="w-full flex justify-between items-center">
          <p className="text-lg font-bold">Edit Task</p>
          <button type="button" onClick={() => setIsOpenEditTaskModal(false)}>
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
                onClick={() => setIsOpenEditTaskModal(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="rounded-lg bg-primary-main text-sm text-white px-5 py-2 font-bold"
              >
                Save Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
