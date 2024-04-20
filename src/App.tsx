export default function App() {
  return (
    <>
      <header className="w-full py-3 flex justify-center items-center border-b border-b-neutral-50">
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
      <main className="w-full flex justify-center items-center">
        <section className="flex max-w-6xl w-full justify-center items-center flex-col">
          <div className="rounded-md p-3 border-2 border-primary-main">
            <div>
              <button type="button">Group Task 1</button>
              <span>January - March</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
