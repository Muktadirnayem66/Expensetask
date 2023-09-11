import React from 'react';
import ExpenseDate from './ExpenseDate';
import { styled } from 'styled-components';

const ExpenseItem = ({ title, amount, date }) => {
    
    return (
      <ExpensItem>
        <ExpenseDate date={date} />

        <div className='infos'>
          <div>{title}</div>
          <div className='amountinfo'> ${amount}</div>
        </div>
      </ExpensItem>
    );
};

export default ExpenseItem;

const ExpensItem = styled.div`
  display: flex;
  color: white;
  .infos {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    .amountinfo {
      border: 1px solid white;
      border-radius: 10px;
      background-color: rgb(54, 3, 75);
      margin: 10px;
      padding: 5px 10px;
    }
  }
`;

