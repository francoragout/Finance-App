import React from 'react';
import Offcanvas from '../Offcanvas/Offcanvas';

const Table = ({ expenses, onDelete, onEdit }) => {
  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const year = dateObj.getFullYear();
    const month = (dateObj.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = dateObj.getUTCDate().toString().padStart(2, '0');
    return `${day}/${month}/${year}`;
  };

  return (
    <React.Fragment>
    <div className='table-responsive response mx-auto'>
      <table className="table table-dark table-sm table-responsive">
        <thead>
          <tr>
            <th scope="col" className="bg-secondary">
              Amount
            </th>
            <th scope="col" className="bg-secondary">
              Date
            </th>
            <th scope="col" className="bg-secondary">
              Category
            </th>
            <th scope="col" className="bg-secondary">
              Description
            </th>
            <th scope="col" className="bg-secondary">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
        {expenses.map((expense, index) => (
          <tr key={index}>
            <td>-${expense.amount}</td>
            <td>{formatDate(expense.date)}</td>
            <td>{expense.category}</td>
            <td>{expense.description}</td>
            <td>
              <div className='d-flex justify-content-around'>
                <button 
                type='button' 
                className='btn btn-sm btn-dark' data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" 
                onClick={() => onEdit(index, expense)}>
                <i className="bi bi-pen"></i>
                </button>
                <button 
                type='button' 
                className='btn btn-sm btn-dark' 
                onClick={() => onDelete(index)}>
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
    <Offcanvas />
    </React.Fragment>
  );
};

export default Table;
