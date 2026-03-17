import React, { useState } from "react";

const App = () => {
  const [Title, setTitle] = useState("");
  const [Notes, setNotes] = useState("");
  const [Tasks, setTasks] = useState([]);

  function SubmitForm() {
    console.log("Task Added", { Heading: Title, List: Notes });

    let newTask = [...Tasks];
    newTask.push({ Heading: Title, List: Notes });
    setTasks(newTask);

    console.log(Tasks);

    setTitle("");
    setNotes("");
  }

  return (
    <>
      <section className="lg:flex items-center justify-center">
        {/* form for add new task */}
        <div className="lg:w-1/2 w-full h-screen flex items-center justify-center p-4">
          <div className="bg-black/70 max-w-sm p-2 rounded-3xl shadow-2xl">
            <form
              className="bg-black text-white w-full rounded-2xl p-6"
              onSubmit={(e) => {
                e.preventDefault();
                SubmitForm();
              }}
            >
              <h1 className="text-center text-4xl font-bold my-1">
                {" "}
                Add Your Task
              </h1>
              <input
                type="text"
                className="w-full px-4 py-2 bg-[#222] rounded-md my-2 text-white font-semibold outline-none focus:ring-2 focus:ring-white"
                placeholder="Heading"
                value={Title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />

              <textarea
                rows={8}
                className="w-full px-4 py-2 bg-[#222] rounded-md my-2 text-white"
                placeholder="Notes"
                value={Notes}
                onChange={(e) => {
                  setNotes(e.target.value);
                }}
              ></textarea>

              <input
                type="submit"
                value="Add Task"
                className="w-full bg-white text-black rounded-md font-semibold px-4 py-2 my-2 active:scale-95 active:bg-white/50 active:text-white outline-none focus:ring-2 focus:ring-white"
              />
            </form>
          </div>
        </div>

        {/* div for show all task  */}
        <div className="lg:w-1/2 w-full h-screen lg:border-l-2 border-dashed border-black max-lg:border-t-4 bg-gray-200 flex flex-wrap items-center justify-center p-6 gap-6 overflow-auto">
          {Tasks.map((task, id) => {
            return (
              <div
                className="w-full max-w-78 h-78 bg-white rounded-4xl shadow-2xl flex items-end justify-center p-3 relative"
                key={id}
              >
                <img
                  src="./pin.png"
                  alt=""
                  className="w-15 h-10 absolute z-10 top-2"
                />
                <div className="w-full h-58 bg-orange-200 rounded-4xl p-4">
                  <h1 className="text-5xl font-bold">{id + 1}</h1>
                  <h1 className="text-4xl font-semibold text-center my-1">
                    {task.Heading}
                  </h1>
                  <p className="text-gray-400 font-medium text-2xl">
                    {task.List}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default App;
