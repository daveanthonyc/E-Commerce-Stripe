import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <AddCircleOutlineIcon />
                <div className="left">
                    <img src="img/en.png" alt="" />
                    <KeyboardArrowDownOutlinedIcon />
                </div>
                <div className="item">
                    <span>USD</span>
                </div>
                <div className="item">
                    <Link className='link'to="/products/1">Women</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/products/2">Men</Link>
                </div>
                <div className="item">
                    <Link className='link'to="/products/3">Children</Link>
                </div>
                <div className="center">
                    <Link className='link'to="/">LAMASTORE</Link>
                </div>
                <div className="right">
                    <div className="item">
                        <Link className='link'to="/">Homepage</Link>
                    </div>
                    <div className="item">
                        <Link className='link'to="/">About</Link>
                    </div>
                    <div className="item">
                        <Link className='link'to="/">Contact</Link>
                    </div>
                    <div className="item">
                        <Link className='link'to="/">Stores</Link>
                    </div>
                    <div className="icons">
                        <SearchIcon />
                        <PersonOutlineOutlinedIcon />
                        <FavoriteBorderOutlinedIcon />
                        <div className="cartIcon">
                            <ShoppingCartOutlinedIcon />
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
