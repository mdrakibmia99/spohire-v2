import { CiFacebook, CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="px-4">
            <div className="block md:flex justify-between">
             <h3 className="order-1 md:w-1/5  text-2xl lg:text-4xl font-bold text-center py-5">Spohire.</h3>
            <div className="order-2 md:order-3 md:w-2/5 flex gap-3 items-center justify-center py-3">
                <p className="text-base lg:text-2xl">Follow us </p>
                <CiFacebook className="" />
                <CiInstagram className="text-[red]" />
                <CiTwitter className="" />
                <CiLinkedin className="" />
            </div>
            <div className="order-3 md:order-2 md:w-2/5 md:mt-8 flex justify-around ">
                <div className="flex flex-col gap-2 whitespace-nowrap ">
                    <p className="text-base lg:text-2xl font-bold mb-2">Info</p>
                    <Link to="#" className="text-sm lg:text-xl  opacity-80"> How it works</Link>
                    <Link to="#" className="text-sm lg:text-xl  opacity-80">About us</Link>

                </div>
                <div className="flex flex-col gap-2 whitespace-nowrap ">
                    <p className="text-base lg:text-2xl">Contact</p>
                    <Link to="#" className="text-sm lg:text-xl opacity-80"> spohire@gmail.com</Link>
                    <Link to="#" className="text-sm lg:text-xl opacity-80">+48 565 25 654</Link>
                    <Link to="#" className="text-sm lg:text-xl opacity-80">+12 485 54684</Link>


            </div>
                </div>


            </div>
            <div className="flex justify-between whitespace-nowrap text-xs lg:text-2xl py-5 w-full px-4 md:max-w-2xl lg:max-w-4xl mx-auto">
             <p>Privacy policy</p>
             <p>Terms & condition</p>
             <p>AMSL All Right Reserved</p>

            </div>
        </div>
    );
};

export default Footer;