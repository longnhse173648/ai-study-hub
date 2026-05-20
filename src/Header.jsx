import logo from '../assets/logo.png'
import './Header.css'
function Header() {

    return (
        <div className='header'>
            <img src={logo} alt="Logo" />
            <h1>AI Study Hub</h1>
        </div>
    )
}

export default Header
