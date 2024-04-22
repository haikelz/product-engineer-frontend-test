import { useSetAtom } from "jotai";
import { isOpenAddNewGroupModalAtom } from "~/store";

export default function AddNewGroupModal() {
  const setIsOpenAddNewGroupModal = useSetAtom(isOpenAddNewGroupModalAtom);

  return (
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
              <label htmlFor="description" className="text-sm font-bold mb-2">
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
                type="submit"
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
  );
}
