import React from 'react'
import Form from '../Form/Form'

const Offcanvas = ({ onSubmit, expenseToEdit }) => {
  const closeButtonHandler = () => {
    if (expenseToEdit) {
      window.location.reload();
    }
  };

  return (
    <div className="offcanvas offcanvas-top text-bg-dark response mx-auto h-auto bg-gradient" tabIndex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasTopLabel">{expenseToEdit ? 'Update ' : 'Add '}your expense here!</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" onClick={closeButtonHandler}></button>
      </div>
      <div className="offcanvas-body">
        <Form onSubmit={onSubmit} expenseToEdit={expenseToEdit}/>
      </div>
    </div>
  )
}

export default Offcanvas