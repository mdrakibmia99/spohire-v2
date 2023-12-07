const HeroSection = () => {
    return (
        <div className="grid grid-cols-1">
            <div className="flex flex-col justify-center text-center">
                <div className="w-full ">
                    <p className="px-5 py-1 text-xs border-white border rounded-full inline-block">
                        Sports + Announcements only for you
                    </p>
                </div>
                <div className="h-14 flex justify-center">
                    <img src="/assets/images/Ready-to-get-text.png" alt="" className=" h-full" />
                </div>

                    <p className="w-2/3">Get matched with new sports club</p>
                
  

            </div>
        </div>
    );
};

export default HeroSection;