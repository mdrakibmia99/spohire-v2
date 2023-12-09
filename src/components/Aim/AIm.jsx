
const AIm = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 w-full h-auto lg:h-screen md:pt-5 overflow-scroll">
            <div className="flex flex-col gap-3 justify-center  mt-5 order-1 md:order-2">
                <h3 className="text-4xl lg:text-7xl text-center md:text-start font-bold w-2/3 md:w-full mx-auto">Why we made spohire?</h3>
                <p className="text-sm lg:text-3xl opacity-80 w-4/5 py-2 lg:py-8 mx-auto md:mx-0 text-center md:text-start">We aimed to simplify the process of finding a club for the player and coach.</p>
                <ul className="text-xs lg:text-lg opacity-80">
                    <li className="text-center md:text-start">• I can tell you first hand, ChainGPT is absolutely amazing. They have helped me and my team speed
                        up our working process by 125%. The access to blockchain information was never easier.
                    </li>
                    <li className="text-center md:text-start">• I can tell you first hand, ChainGPT is absolutely amazing. They have helped me and my team speed
                        up our working process by 125%. The access to blockchain information was never easier.
                    </li> <li className="text-center md:text-start">blockchain information was never easier.
                        • I can tell you first hand, ChainGPT is absolutely amazing. They have helped me and my team speed
                        up our working process by 125%. The access to blockchain information was never easier.</li>
                </ul>

                <div className="flex justify-center r">
                    <button className="bg-blueC text-base lg:text-2xl py-3 lg:py-5 px-4 lg:px-6 rounded-2xl">Get Started Now</button>
                </div>
            </div>

            <div className="w-full h-full relative left-7 order-2 md:order-1">
                <img  className="bottom-0 flex justify-end w-full h-full" src="/assets/images/why.png" alt="" />
            </div>
        </div>
    );
};

export default AIm;