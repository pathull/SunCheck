import logo from '../suncheck-pic.jpg'
import './Header.css'

export default function Header() {
  return (
    <div className='header-container'>
      <img className='logo-img' src={logo} alt='suncheck logo'></img>
      <p className='header-text'>Weekly Vitamin-D Planner</p>
    </div>
  )
}
