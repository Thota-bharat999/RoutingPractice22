import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt=" wave"
        className="logo-image"
      />
      <p className="logo-title">Wave</p>
    </div>
    <ul>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/about">
        <li>About</li>
      </Link>

      <Link to="/contact">
        <li>Contact</li>
      </Link>
    </ul>
  </nav>
)
export default Header
