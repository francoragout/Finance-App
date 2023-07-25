import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Offcanvas from './components/Offcanvas/Offcanvas';
import Table from './components/Table/Table';
import Footer from './components/Footer/Footer';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses'));
    if (storedExpenses && storedExpenses.length > 0) {
      setExpenses(storedExpenses);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const handleAddExpense = (newExpense) => {
    if (isEditing) {
      const newExpenses = [...expenses];
      newExpenses[editIndex] = newExpense;
      setExpenses(newExpenses);

      setIsEditing(false);
      setEditIndex(null);
    } else {
      setExpenses([...expenses, newExpense]);
    }
  };

  const handleDeleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  const handleEditExpense = (index) => {
    setIsEditing(true);
    setEditIndex(index);
  };

  const getTotalAmountForCurrentMonth = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();
    const currentMonthExpenses = expenses.filter((expense) => {
      const expenseDate = new Date(expense.date);
      const expenseMonth = expenseDate.getMonth() + 1;
      const expenseYear = expenseDate.getFullYear();
      return expenseMonth === currentMonth && expenseYear === currentYear;
    });
    return currentMonthExpenses.reduce((total, expense) => total + parseFloat(expense.amount), 0).toFixed(2);
  };

  return (
    <div className='d-flex flex-column min-vh-100'>
      <Header />
      <Offcanvas onSubmit={handleAddExpense} expenseToEdit={isEditing ? expenses[editIndex] : null}/>
      <h4 className='text-light text-center my-3'>You spent ${getTotalAmountForCurrentMonth()} this mounth.</h4>
      <Table expenses={expenses} onDelete={handleDeleteExpense} onEdit={handleEditExpense}/>      
      <Footer />
    </div>
  );
}

export default App;
