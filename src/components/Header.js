import logo from '../sun.png';
import './Header.css';

export default function Header() {
  return (
    <div className="header-container">
      <img className="logo-img" src={logo} alt="suncheck logo"></img>
      <h1 className="header-title">SunCheck</h1>
      <p className="header-text">Vitamin-D Daily Tracker</p>
    </div>
  );
}
