import React from 'react'
import logo from '../assets/images/logo.png'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className="navbar bg-[#FF971D] lg:px-[80px]">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src={logo} alt="" className='h-[50px]' /></a>
          <ul className=' gap-[45px] text-white text-[16px] hidden lg:flex md:hidden sm:flex'>
            <NavLink to='/'> <li>Home</li></NavLink>
            <NavLink to='/about'><li>About Us</li></NavLink>
            <NavLink to='/shop'><li>Shop</li></NavLink>
            <NavLink to='/blog'><li>Blog</li></NavLink>
            <NavLink to='/contact'><li>Contact Us</li></NavLink>
          </ul>
          <div className='hidden sm:flex md:hidden lg:flex'>
            <button className='border-1 rounded-[30px] text-white px-[30px] text-[20px] py-[8px] border-[white]'>Login</button>
          </div>
          <div className='humberger lg:hidden'>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header ">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><a class="navbar-brand" href="#"><img src={logo} alt="" className='h-[50px]' /></a></h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">About Us</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Shop</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Blog</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Contact Us</a>
                  </li>
                  {/* <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li> */}
                </ul>
                <form class="d-flex mt-3" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
