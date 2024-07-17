import Header from "../components/header";
import List from "../components/list";
import { useEffect, useState } from "react";

function TaskPage() {
  const initDate = new Date();
  const [selectedDate, setSelectedDate] = useState(initDate.getDate());
  const date = new Date();
  date.setDate(selectedDate);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentDay = function (index) {
    const date = new Date();
    const dayOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    date.setDate(date.getDate() + index);
    return dayOfTheWeek[date.getDay()];
  };
  const switchDay = function (index) {
    setSelectedDate((s) => s + index);
  };

  return (
    <div>
      <Header />
      <main>
        <section>
          <h1 className="text-center roboto-bold">{`${
            months[date.getMonth()]
          } ${date.getFullYear()}`}</h1>
          <div>
            <ul className="flex justify-center items-center overflow-hidden gap-1 py-1">
              <li
                className="w-14 h-14 flex justify-center items-center rounded-md shadow- bg-primary shrink-0 cursor-pointer"
                onClick={() => switchDay(-3)}
              >
                <h2 className="text-center text-sm leading-none">
                  {currentDay(-3)}
                  <br /> <span className="font-bold">{date.getDate() - 3}</span>
                </h2>
              </li>
              <li
                className="w-14 h-14 flex justify-center items-center rounded-md shadow-md bg-primary shrink-0 cursor-pointer"
                onClick={() => switchDay(-2)}
              >
                <h2 className="text-center text-sm leading-none">
                  {currentDay(-2)}
                  <br /> <span className="font-bold">{date.getDate() - 2}</span>
                </h2>
              </li>
              <li
                className="w-14 h-14 flex justify-center items-center rounded-md shadow-md bg-primary shrink-0 cursor-pointer"
                onClick={() => switchDay(-1)}
              >
                <h2 className="text-center text-sm leading-none">
                  {currentDay(-1)}
                  <br /> <span className="font-bold">{date.getDate() - 1}</span>
                </h2>
              </li>
              <li
                className="w-16 h-16 flex justify-center items-center rounded-md shadow-md bg-primary shrink-0 cursor-pointer"
                onClick={() => switchDay(0)}
              >
                <h2 className="text-center text-sm leading-none">
                  {currentDay(0)}
                  <br /> <span className="font-bold">{date.getDate()}</span>
                </h2>
              </li>
              <li
                className="w-14 h-14 flex justify-center items-center rounded-md shadow-md bg-primary shrink-0 cursor-pointer"
                onClick={() => switchDay(1)}
              >
                <h2 className="text-center text-sm leading-none">
                  {currentDay(1)}
                  <br /> <span className="font-bold">{date.getDate() + 1}</span>
                </h2>
              </li>
              <li
                className="w-14 h-14 flex justify-center items-center rounded-md shadow-md bg-primary shrink-0 cursor-pointer"
                onClick={() => switchDay(2)}
              >
                <h2 className="text-center text-sm leading-none">
                  {currentDay(2)}
                  <br /> <span className="font-bold">{date.getDate() + 2}</span>
                </h2>
              </li>
              <li
                className="w-14 h-14 flex justify-center items-center rounded-md shadow-md bg-primary shrink-0 cursor-pointer"
                onClick={() => switchDay(3)}
              >
                <h2 className="text-center text-sm leading-none">
                  {currentDay(3)}
                  <br /> <span className="font-bold">{date.getDate() + 3}</span>
                </h2>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <List category={"Today’s schedule"} />
        </section>
      </main>
      {/* <footer></footer> */}
    </div>
  );
}

export default TaskPage;
