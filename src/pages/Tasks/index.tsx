import { ReactElement } from "react";
import {
  CheckCircleIcon,
  NoSymbolIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";
import { Todo } from "../../models/Todo";

export function TasksList(): ReactElement {
  const tasks = [
    {
      Id: "6B29FC40-CA47-1067-B31D-00DD010662D3",
      Name: "Change dryer",
      Done: true,
      Priority: "Low",
      DueDate: "22-03-2023",
      Text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus ex, quidem perspiciatis at minima nihil tempora? Harum autem saepe cum officiis assumenda hic. Quas eaque facilis necessitatibus labore earum tenetur saepe nesciunt!",
    },
    {
      Id: "6B29FC11-CA47-1067-B31D-00DD010662D1",
      Done: false,
      Priority: "Normal",
      Name: "Repair dryer",
      DueDate: "29-03-2023",
      Text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus ex, quidem perspiciatis at minima nihil tempora? Harum autem saepe cum officiis assumenda hic. Quas eaque facilis necessitatibus labore earum tenetur saepe nesciunt!",
    },
    {
      Id: "6B29FC11-CA47-1067-B31D-02DD010662D1",
      Done: false,
      Priority: "High",
      Name: "Third One",
      DueDate: "29-03-2023",
      Text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus ex, quidem perspiciatis at minima nihil tempora? Harum autem saepe cum officiis assumenda hic. Quas eaque facilis necessitatibus labore earum tenetur saepe nesciunt!",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {tasks?.map(({ Id, Name, Done, Text, DueDate, Priority }) => (
          <div
            className="bg-white rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
            key={Id}
          >
            <div className="flex justify-between">
              <h1 className="text-slate-500 dark:text-slate-700 font-bold">
                {Name}
              </h1>

              <h2
                className={`text-${
                  Priority == `High`
                    ? "yellow"
                    : Priority == `Low`
                    ? "red"
                    : "green"
                }-500`}
              >
                {Priority}
              </h2>
              {Done ? (
                <CheckCircleIcon className="h-6 w-6 text-green-500" />
              ) : (
                <NoSymbolIcon className="h-6 w-6 text-red-500" />
              )}

              
            </div>

            <p className="text-slate-500 dark:text-slate-700 mt-2 text-sm mt-10">
              {Text}
            </p>

            <div className="flex justify-between mt-5 text-slate-900 ">
              <h1 className="text-slate-500 dark:text-slate-700 font-italic">
                 {DueDate}
              </h1>
              <PencilSquareIcon className="h-6 w-6 text-black-900" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
