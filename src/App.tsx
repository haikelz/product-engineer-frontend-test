import { tw } from "./lib/utils/tw";

const data = [
  { id: 1, name: "Re-designed the zero-g doggie bags. No more spills!" },
  { id: 2, name: "Bundle interplanetary analytics for improved transmission" },
];

export default function App() {
  return (
    <>
      <header className="w-full py-4 flex justify-center items-center border-b-2 border-b-primary-main">
        <nav className="max-w-6xl flex justify-start items-center w-full">
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
        <section className="flex max-w-6xl w-full space-x-4 justify-start items-start">
          <div className="rounded-md p-3 w-[326px] bg-primary-surface border-2 border-primary-main">
            <div className="space-y-2 mb-2">
              <button
                type="button"
                className="border-primary-border border-2 rounded-md py-1 px-3 text-primary-main text-xs"
              >
                Group Task 1
              </button>
              <p className="font-bold text-xs">January - March</p>
            </div>
            <div className="flex flex-col space-y-4 justify-center items-start w-full">
              {data.map((item, index) => (
                <div
                  key={index + 1}
                  className="bg-[#FAFAFA] w-fit rounded-md border-2 border-[#E0E0E0] p-4"
                >
                  <div className="border-b-2 border-dashed border-[#E0E0E0] py-1.5">
                    <p className="font-bold text-sm">{item.name}</p>
                  </div>
                  <div className="py-4 flex w-full justify-between items-center">
                    <div className="w-20 bg-[#EDEDED] rounded-full overflow-hidden h-6">
                      <div
                        className={tw(
                          `w-[${item.id}] h-6 rounded-full rounded-r-none bg-primary-main`
                        )}
                      ></div>
                    </div>
                    <button type="button">
                      <img src="/images/more.svg" alt="more" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button
              type="button"
              className="flex justify-center items-center space-x-2"
            >
              <img src="/images/plus.svg" alt="plus" />
              <span>New Task</span>
            </button>
          </div>
          <div className="border-2 rounded-md p-3 w-[326px] border-secondary-border bg-secondary-surface">
            <div className="space-y-2 mb-2">
              <button
                type="button"
                className="border-secondary-border border-2 rounded-md py-1 px-3 text-secondary-pressed text-xs"
              >
                Group Task 2
              </button>
              <p className="font-bold text-xs">April - June</p>
            </div>
            <div className="bg-[#FAFAFA] w-full text-[#757575] border-2 px-4 py-3 rounded-md border-[#E0E0E0]">
              <p className="text-sm">No Task</p>
            </div>
            <button
              type="button"
              className="flex justify-center items-center space-x-2"
            >
              <img src="/images/plus.svg" alt="plus" />
              <span>New Task</span>
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
