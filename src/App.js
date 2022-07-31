import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 3.45,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 500.99,
      date: new Date(2020, 7, 15),
    },
    {
      id: "e3",
      title: "New Phone",
      amount: 200,
      date: new Date(2020, 7, 16),
    },
    {
      id: "e4",
      title: "New Computer",
      amount: 1000,
      date: new Date(2020, 7, 17),
    },
  ];

  return (
    <div className="App">
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
