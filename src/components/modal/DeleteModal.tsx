import { useSetAtom } from "jotai";
import { isOpenDeleteModalAtom } from "~/store";

export default function DeleteModal() {
  const setIsOpenDeleteModal = useSetAtom(isOpenDeleteModalAtom);

  return (
    <div className="w-full flex justify-center items-center fixed backdrop-blur-lg top-0 min-h-screen">
      <div className="bg-white drop-shadow-lg w-[420px] p-4 rounded-lg">
        <div className="w-full flex justify-between items-center">
          <div className="flex justify-center items-center w-fit space-x-2">
            <img src="/images/danger.svg" alt="danger" />
            <p className="text-lg font-bold">Delete Task</p>
          </div>
          <button type="button" onClick={() => setIsOpenDeleteModal(false)}>
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
                onClick={() => setIsOpenDeleteModal(false)}
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
  );
}
