import Header from "../components/header";

function TaskPage() {
  // Object of dates and then render them all at once
  const date = new Date();
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
  const currentDay = function (expression, index) {
    const date = new Date();
    const dayOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    if (expression === "subtract") {
      date.setDate(date.getDate() - index);
    } else if (expression === "add") {
      date.setDate(date.getDate() + index);
    }
    return dayOfTheWeek[date.getDay()];
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
              <li className="w-14 h-14 flex justify-center items-center rounded-md shadow- bg-primary shrink-0">
                <h2 className="text-center text-sm leading-none">
                  {currentDay("subtract", 3)}
                  <br /> <span>{date.getDate() - 3}</span>
                </h2>
              </li>
              <li className="w-14 h-14 flex justify-center items-center rounded-md shadow-md bg-primary shrink-0">
                <h2 className="text-center text-sm leading-none">
                  {currentDay("subtract", 2)}
                  <br /> <span>{date.getDate() - 2}</span>
                </h2>
              </li>
              <li className="w-14 h-14 flex justify-center items-center rounded-md shadow-md bg-primary shrink-0">
                <h2 className="text-center text-sm leading-none">
                  {currentDay("subtract", 1)}
                  <br /> <span>{date.getDate() - 1}</span>
                </h2>
              </li>
              <li className="w-16 h-16 flex justify-center items-center rounded-md shadow-md bg-primary shrink-0">
                <h2 className="text-center text-sm leading-none">
                  {currentDay("add", 0)}
                  <br /> <span>{date.getDate()}</span>
                </h2>
              </li>
              <li className="w-14 h-14 flex justify-center items-center rounded-md shadow-md bg-primary shrink-0">
                <h2 className="text-center text-sm leading-none">
                  {currentDay("add", 1)}
                  <br /> <span>{date.getDate() + 1}</span>
                </h2>
              </li>
              <li className="w-14 h-14 flex justify-center items-center rounded-md shadow-md bg-primary shrink-0">
                <h2 className="text-center text-sm leading-none">
                  {currentDay("add", 2)}
                  <br /> <span>{date.getDate() + 2}</span>
                </h2>
              </li>
              <li className="w-14 h-14 flex justify-center items-center rounded-md shadow-md bg-primary shrink-0">
                <h2 className="text-center text-sm leading-none">
                  {currentDay("add", 3)}
                  <br /> <span>{date.getDate() + 3}</span>
                </h2>
              </li>
            </ul>
          </div>
        </section>
      </main>
      {/* <footer></footer> */}
    </div>
  );
}

export default TaskPage;
