import './header.css';

const Header = () => {
    return (
        <header className='header'>
            <img src="./images/logo.svg" alt="" />
            <nav className="menu">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Careers</a></li>
                </ul>
            </nav>
            <button className="requestInviteBtn">Request invite</button>
        </header>
    );
};

export default Header;