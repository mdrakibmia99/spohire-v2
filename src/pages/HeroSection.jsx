const HeroSection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:min-h-screen">
            <div className="flex flex-col items-center md:items-start md:pl-20 md:justify-center  md:text-left text-center">
                <div className="w-full mt-5">
                    <p className="px-5 py-1 text-xs md:text-base border-white border rounded-full inline-block">
                        Sports + Announcements only for you
                    </p>
                </div>
                <div className="w-full py-5">

                <div className="h-14 flex justify-center md:justify-start">
                    <img src="/assets/images/Ready-to-get-text.png" alt="" className=" h-full" />
                </div>

                <p className="w-5/6 md:w-full mx-auto md:mx-0 text-4xl lg:text-6xl text-center md:text-left">Get matched with new sports club</p>
                <p className="text-xs pt-3 lg:text-2xl lg:mt-5">Add your profile and join a new sports team</p>
                </div>

                <button className="text-xs rounded-full bg-blueC p-4">Get Started Now</button>

            </div>

            <div className="mt-8">
                <img className="relative right-8" src="/assets/images/hero-banner-image.png" alt="" />
            </div>
        </div>
    );
};

export default HeroSection;