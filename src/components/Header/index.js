import {Link} from 'react-router-dom'
import { IoMdPerson } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import './index.css'

const Header=()=>(
    <>
        <nav className='header-container  '>
            <Link className='class-link' to='/'>
            <h1 className='company-name'>Edureka</h1>
            </Link>
            <div className='nav-items-container'>
                <button type='button' className="joinBtn">Join Us</button>
                <Link to='/classes' className='class-link'>
                <p className="items">Classes</p>
                </Link>
                <Link className='class-link' to='/products'>
                <p className="items">Products</p>
                </Link>
                <Link className='class-link' to='/aboutus'>
                <p className="items">About Us</p>
                </Link>
                <IoMdPerson className="icons"/>
                <FaShoppingCart className="icons"/>
            </div>
        </nav>
    </>
)
export default Header