import React from 'react'

const Header = () => {
  return (
    <div className='response mx-auto'>
      <nav className="navbar bg-dark bg-gradient" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Finance App</a>
          <button className="btn btn-sm btn-dark" type="button" data-bs-toggle="offcanvas"data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
            New Expense
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Header