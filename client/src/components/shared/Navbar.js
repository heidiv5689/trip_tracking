import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
    {/* <nav>
      <ul>
        <Link to='/'>
          <li>
            Home
          </li>
        </Link>
        <Link to='/about'>
          <li>
            About
          </li>
        </Link>
        <Link to='/users'>
          <li>
            Users
          </li>
        </Link>
      </ul>
    </nav> */}


  <nav className="navbar navbar-expand-sm navbar-light bg-light shadow sticky-top">
  <button className="navbar-toggler" data-toggle="collapse" data-target="#navContent">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navContent">
    <ul className="navbar-nav">
      <li className="nav-item active">
      <a className="nav-link" href="/">Home</a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="/about">About</a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="/users"> Users</a>
      </li>
    </ul>

  </div>
  <a className="navbar-brand" href="/">Website</a>
</nav>
  </>
)

export default Navbar;
