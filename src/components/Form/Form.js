import React, { useEffect, useState } from 'react';

const Form = ({ onSubmit, expenseToEdit }) => {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (expenseToEdit) {
      setAmount(expenseToEdit.amount);
      setCategory(expenseToEdit.category);
      setDate(expenseToEdit.date);
      setDescription(expenseToEdit.description);
    }
  }, [expenseToEdit]);

  const amountChangeHandler = (event) => {
    setAmount(event.target.value)
  }

  const dateChangeHandler = (event) => {
    setDate(event.target.value)
  }

  const categoryChangeHandler = (event) => {
    setCategory(event.target.value)
  }

  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value)
  }

  const isFormValid = amount && date && category;
  if (formValid !== isFormValid) {
    setFormValid(isFormValid);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    
    const newExpense = {
      amount,
      category,
      date,
      description,
    };

    onSubmit(newExpense);

    setAmount('');
    setCategory('');
    setDate('');
    setDescription('')
  }

  return (
    <form className='row' onSubmit={submitHandler}>

      <div className="mb-3 col-sm-12 col-md-6 col-lg-3">
        <label htmlFor="amount" className="form-label">Amount</label>
        <input 
        type="number" 
        className="form-control" 
        id="amount"
        value={amount}
        onChange={amountChangeHandler}/>       
        <div className='mt-2'>
          {!amount && <span style={{color: 'grey'}}>This field is required.</span>}
        </div>
      </div>

      <div className="mb-3 col-sm-12 col-md-6 col-lg-3">
        <label htmlFor="date" className="form-label">Date</label>
        <input 
        type="date" 
        className="form-control" 
        id="date"
        value={date}
        onChange={dateChangeHandler}/>
        <div className='mt-2'>
          {!date && <span style={{color: 'grey'}}>This field is required.</span>}
        </div>
      </div>

      <div className="mb-3 col-sm-12 col-md-6 col-lg-3">
        <label htmlFor="category" className="form-label">Category</label>
        <select 
        id='category'
        className="form-select" 
        aria-label="Default select example"
        value={category}
        onChange={categoryChangeHandler}>
          <option value=''>Select category</option>
          <option value="Housing">Housing</option>
          <option value="Transportation">Transportation</option>
          <option value="Food">Food</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Debt Payments">Debt Payments</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Clothing">Clothing</option>
          <option value="Education">Education</option>
          <option value="Savings/Investments">Savings/Investments</option>
          <option value="Other">Other</option>
        </select>
        <div className='mt-2'>
          {!category && <span style={{color: 'grey'}}>This field is required.</span>}
        </div>
      </div>

      <div className="mb-3 col-sm-12 col-md-6 col-lg-3">
        <label htmlFor="description" className="form-label">Description</label>
        <input 
        type="text" 
        className="form-control" 
        id="description"
        value={description}
        onChange={descriptionChangeHandler}/>
        <div className='mt-2'>
          {!description && <span style={{color: 'grey'}}>This field is optional.</span>}
        </div>
      </div>   

      <button type="submit" className="btn btn-secondary mx-auto w-50 mt-4" disabled={!formValid}>{expenseToEdit ? 'Update Expense' : 'Add Expense'}</button>
    </form>
  )
}

export default Form