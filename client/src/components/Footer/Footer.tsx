import './Footer.scss';

const Footer = () => {
    return (
        <div>
            <div className="top">
                <div className="item">
                    <h1>Categories</h1>
                    <span>Women</span>
                    <span>Men</span>
                    <span>Shoes</span>
                    <span>Accessories</span>
                    <span>New Arrivals</span>
                </div>
                <div className="item">
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies </span>
                </div>
                <div className="item"></div>
                <div className="item"></div>
            </div>
            <div className="bottom">
                <div className="left">
                    <span className="logo">Lamastore</span>
                    <span className="copyright">Copyright 2024. All Rights Resevered</span>
                </div>
                <div className="right">
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer;
