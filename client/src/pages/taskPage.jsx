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
  // Gets the number of days in the month
  // function NumberOfDays(year, month) {
  // const date = new Date(year, month, 1);
  // const days = [];
  // date.setDate(date.getDate() + 31);
  // console.log(date);

  // while (date.getMonth() === month) {
  // days.push(date.getDate());
  // date.setDate(date.getDate() + 1);
  // }
  // return days;
  // }
  // const HowManyDays = NumberOfDays(date.getFullYear(), date.getMonth());

  console.log(HowManyDays);

  return (
    <div>
      <Header />
      <main>
        <section>
          <h1 className="text-center roboto-bold">{`${
            months[date.getMonth()]
          } ${date.getFullYear()}`}</h1>
        </section>
      </main>
      {/* <footer></footer> */}
    </div>
  );
}

export default TaskPage;
