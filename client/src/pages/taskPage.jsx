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
