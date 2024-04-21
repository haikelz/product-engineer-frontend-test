import { useAtom } from "jotai";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { DraggableProvided } from "react-beautiful-dnd";
import { tw } from "../lib/utils/tw";
import { isOpenMoreAtom } from "../store";

type TaskItemProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  provided: DraggableProvided;
  name: string;
  progress: string;
};

export default function TaskItem({ provided, name, progress }: TaskItemProps) {
  const [isOpenMore] = useAtom(isOpenMoreAtom);

  return (
    <>
      <div
        {...provided.dragHandleProps}
        {...provided.draggableProps}
        ref={provided.innerRef}
        className="bg-[#FAFAFA] w-fit rounded-md border-2 border-[#E0E0E0] p-4"
      >
        <div className="border-b-2 border-dashed border-[#E0E0E0] py-1.5">
          <p className="font-bold text-sm">{name}</p>
        </div>
        <div className="py-4 flex w-full justify-between items-center">
          <div className="flex justify-center items-center space-x-2">
            <div className="w-[201px] bg-[#EDEDED] rounded-full overflow-hidden h-5">
              <div
                style={{ width: progress }}
                className={tw(
                  "h-5 rounded-full rounded-r-none",
                  progress === "100%" ? "bg-success-main" : "bg-primary-main"
                )}
              ></div>
            </div>
            {progress === "100%" ? (
              <img src="/images/checklist.svg" alt="checklist" />
            ) : (
              <span className="text-xs text-[#757575]">{progress}</span>
            )}
          </div>
          <button type="button">
            <img src="/images/more.svg" alt="more" />
          </button>
        </div>
      </div>
      {isOpenMore ? (
        <div className="fixed top-0 drop-shadow-lg rounded-lg p-4">
          <ul className="flex flex-col justify-center items-center space-y-5">
            <li className="flex justify-center items-center w-fit space-x-4">
              <img src="" alt="move right" />
              <span>Move Right</span>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
}
