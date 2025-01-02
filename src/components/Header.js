import Logo from '../assets/logo.png'
import { Link,NavLink } from 'react-router-dom'
export  function Header() {
  return (
    <div>
      <img src={Logo} alt="Routemate image" className='logo'/>
      <span>RouteMate</span>&nbsp;
      <NavLink to="/">Home</NavLink> &nbsp;
      <NavLink to="/products">Products</NavLink>&nbsp;
      <NavLink to="/contact">Contact</NavLink>
    </div>
  )
}
