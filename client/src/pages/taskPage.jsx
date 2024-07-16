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
            <ul className="flex justify-center">
              <li>
                <h2>
                  {date.getDate() - 3} <br />{" "}
                  <span>{currentDay("subtract", 3)}</span>
                </h2>
              </li>
              <li>
                <h2>
                  {date.getDate() - 2} <br />{" "}
                  <span>{currentDay("subtract", 2)}</span>
                </h2>
              </li>
              <li>
                <h2>
                  {date.getDate() - 1} <br />{" "}
                  <span>{currentDay("subtract", 1)}</span>
                </h2>
              </li>
              <li className="font-bold">
                <h2>
                  {date.getDate()} <br /> <span>{currentDay("add", 0)}</span>
                </h2>
              </li>
              <li>
                <h2>
                  {date.getDate() + 1} <br />{" "}
                  <span>{currentDay("add", 1)}</span>
                </h2>
              </li>
              <li>
                <h2>
                  {date.getDate() + 2} <br />{" "}
                  <span>{currentDay("add", 2)}</span>
                </h2>
              </li>
              <li>
                <h2>
                  {date.getDate() + 3} <br />{" "}
                  <span>{currentDay("add", 3)}</span>
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
