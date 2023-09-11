import { styled } from "styled-components";


const ExpenseDate = ({date}) => {

    const month = date.toLocaleString("en-US", { month: "long" });
    const day = date.toLocaleString("en-US", { day: "2-digit" });
    const year = date.getFullYear();

    return (
      <DateStyle>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </DateStyle>
    );
};

export default ExpenseDate;

const DateStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
border:2px solid white;
background-color: black;
color:white;
padding: 10px;
border-radius: 10px;
width:50px;
gap:10px;
margin: 10px;

`;