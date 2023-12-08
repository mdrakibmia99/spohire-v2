const HeroSection = () => {
    return (
        <div className="grid grid-cols-1">
            <div className="flex flex-col items-center text-center">
                <div className="w-full mt-5">
                    <p className="px-5 py-1 text-xs border-white border rounded-full inline-block">
                        Sports + Announcements only for you
                    </p>
                </div>
                <div className="w-full py-5">

                <div className="h-14 flex justify-center">
                    <img src="/assets/images/Ready-to-get-text.png" alt="" className=" h-full" />
                </div>

                <p className="w-5/6 mx-auto text-4xl text-center">Get matched with new sports club</p>
                <p className="text-xs pt-3">Add your profile and join a new sports team</p>
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