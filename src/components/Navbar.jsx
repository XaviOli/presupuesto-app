import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-success bg-success'>
        <div className='container'>
            <Link to='/' className='btn btn-danger'>Inicio</Link>
            <Link to='/blog' className='btn btn-danger'>Blog</Link>
            <Link to='/contacto' className='btn btn-danger'>Contacto</Link>
        </div>
    </nav>
  )
}

export default Navbar