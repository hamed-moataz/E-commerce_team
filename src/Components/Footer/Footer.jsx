import imgQr from "../../assets/images/Footer/Qr.jpg"
import google from '../../assets/images/Footer/google.png'
import app from '../../assets/images/Footer/app.png'
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";





const Footer = () => {
  return (
    <>
    <footer className="footer bg-neutral text-neutral-content p-10 absolute bottom-0 ">
  <nav>
    <h6 className="footer-title">Exclusive</h6>
    <a className="link link-hover">Subscribe</a>
    <a className="link link-hover">Get 10% off your first order</a>
  
  </nav>
  <nav>
    <h6 className="footer-title">Support</h6>
    <a className="link link-hover">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</a>
    <a className="link link-hover">exclusive@gmail.com</a>
    <a className="link link-hover">+88015-88888-9999</a>
  </nav>
  <nav>
    <h6 className="footer-title">Account</h6>
    <a className="link link-hover">My Account</a>
    <a className="link link-hover">Login / Register</a>
    <a className="link link-hover">Cart</a>
    <a className="link link-hover">Wishlist</a>
    <a className="link link-hover">Shop</a>
  </nav>
  <nav>
    <h6 className="footer-title">Quick Link</h6>
    <a className="link link-hover">Privacy Policy</a>
    <a className="link link-hover">Terms Of Use</a>
    <a className="link link-hover">FAQ</a>
    <a className="link link-hover">Contact</a>
  </nav>
  <nav>
    <h6 className="footer-title">Download App</h6>
    <a className="link link-hover">Save $3 with App New User Only</a>
    <div className="flex justify-start items-center gap-4 w-60">
      <img src={imgQr} alt="" className="w-16 h-16" />
      <div className="flex flex-col ">
        <img src={google} alt="" className="w-12" />
        <img src={app} alt="" className="w-12 " />
      </div>
    </div>
    <div className="flex gap-8 text-xl">
      <FaFacebookF />
      <FiTwitter />
      <FaInstagram />
      <FaLinkedinIn />
    </div>
  </nav>

</footer>
    </>
    
  )
}

export default Footer