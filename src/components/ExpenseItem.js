import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // const expenseDate = new Date(2026 , 5, 15);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = '12000000000';

  // const month =props.date.toLocaleString('en-US',{month:'long'});
  // const day = props.date.toLocaleString('en-US',{day:'2-digit'});
  // const year = props.date.getFullYear();
  //* This is called Helper Constants
  //?If u have no content between tags then we can directly use self closing tag. <ExpenseDate/>
  //* I can make new compoennt as date and from there i can use it here. lets do it
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
