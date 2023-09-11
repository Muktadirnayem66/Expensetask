import { styled } from "styled-components";
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'

const Expense = ({ items }) => {
   
    return (
      <Card>
        <ExpenseItems>
          <div className="expensestyle">
            <ExpenseItem
              title={items[0].title}
              amount={items[0].amount}
              date={items[0].date}
            />
          </div>
          <div className="expensestyle">
            <ExpenseItem
              title={items[1].title}
              amount={items[1].amount}
              date={items[1].date}
            />
          </div>
          <div className="expensestyle">
            <ExpenseItem
              title={items[2].title}
              amount={items[2].amount}
              date={items[2].date}
            />
          </div>
          <div className="expensestyle">
            <ExpenseItem
              title={items[3].title}
              amount={items[3].amount}
              date={items[3].date}
            />
          </div>
        </ExpenseItems>
      </Card>
    );
};

export default Expense;

const ExpenseItems = styled.div`
  display: flex;
  flex-direction: column;
  .expensestyle {
    background-color: rgb(37, 37, 37);
    border-radius: 10px;
    margin: 10px;
  }
`;