import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg" style={{backgroundColor : '#005F9A'}}>
  <div class="container-fluid">
    <a class="navbar-brand text-light" href="#">EMI CALCULATOR</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       
        {/* <li class="nav-item">
          <a class="nav-link" href="/"></a>
        </li> */}
        {/* <li class="nav-item">
          <a class="nav-link " href="/homeloan">home</a>
        </li> */}
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar