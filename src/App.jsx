
import Expense from "./Components/Expenses/Expense";


const item = [
  {
    id: "e1",
    title: "Paper",
    amount: "94.12",
    date: new Date(2021, 7, 14),
  },
  {
    id: "e2",
    title: "Samsung TV",
    amount: "940.12",
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: "245.10",
    date: new Date(2021, 3, 8),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: "420",
    date: new Date(2021, 9, 19),
  },
];


const App = () => {
  
  return (
    <div>
      <h1>Expenses Task</h1>
      <Expense items={item} />
    </div>
  )
}

export default App

