import { Link } from 'react-router-dom';

import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="header__inner">
                <Link to="/" className="header__logo">
                    tourView
                </Link>

                <nav className="header__nav">

                    <a
                        href="https://cheolll.github.io/portfolio"
                        className="header__portfolio"
                        >
                        Portfolio
                        <span>↗</span>
                    </a>
                    <a
                        href="https://github.com/cheolll"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        GitHub
                        <span>↗</span>
                    </a>
                </nav>
            </div>
        </header>
    );
};
export default Header;