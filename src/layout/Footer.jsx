import { CiFacebook, CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="px-4">
             <h3 className="text-2xl font-bold text-center py-5">Spohire.</h3>
            <div className="flex gap-3 items-center justify-center py-3">
                <p>Follow us </p>
                <CiFacebook className="" />
                <CiInstagram className="text-[red]" />
                <CiTwitter className="" />
                <CiLinkedin className="" />
            </div>
            <div className="flex justify-around ">
                <div className="flex flex-col gap-2 whitespace-nowrap ">
                    <p className="text-base font-bold mb-2">Info</p>
                    <Link to="#" className="text-sm  opacity-80"> How it works</Link>
                    <Link to="#" className="text-sm  opacity-80">About us</Link>

                </div>
                <div className="flex flex-col gap-2 whitespace-nowrap ">
                    <p>Contact</p>
                    <Link to="#" className="text-sm opacity-80"> spohire@gmail.com</Link>
                    <Link to="#" className="text-sm opacity-80">+48 565 25 654</Link>
                    <Link to="#" className="text-sm opacity-80">+12 485 54684</Link>

                </div>



            </div>
            <div className="flex justify-between whitespace-nowrap text-xs py-5">
             <p>Privacy policy</p>
             <p>Terms & condition</p>
             <p>AMSL All Right Reserved</p>

            </div>
        </div>
    );
};

export default Footer;