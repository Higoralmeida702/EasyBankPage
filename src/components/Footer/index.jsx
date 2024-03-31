import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='rede'>
               <a href="#"><img src="./images/icon-facebook.svg"alt=""/></a>
               <a href="#"><img src="./images/icon-youtube.svg" alt="" /></a>
               <a href="#"><img src="./images/icon-twitter.svg" alt="" /></a>
               <a href="#"><img src="./images/icon-pinterest.svg" alt="" /></a>
               <a href="#"><img src="./images/icon-instagram.svg" alt="" /></a>
                </div>
            <div className='sobre'>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className='sobre'>
          <ul>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className='btnFooter'>
            <button id="designBtnFooter">Request Invite</button>
        </div>
        </footer>
    )
}

export default Footer