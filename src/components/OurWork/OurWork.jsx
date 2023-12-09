
const OurWork = () => {
    return (
        <div className="w-full gap-8 lg:min-h-screen">
            <h1 className="text-2xl lg:text-7xl text-center mt-8">How it works</h1>
            <div className="bg-[#1e1034] w-10/12 md:w-[300px] lg:w-[700px] my-8 mx-auto rounded-full">
                <ul className="flex flex-row gap-3 justify-between text-xs lg:text-2xl items-center px-3">
                    <li className="bg-blueC px-3 py-2 rounded-md">Player</li>
                    <li>Coach</li>
                    <li>Manager / Agent</li>
                </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-2 w-full lg:w-[900px] mx-auto mb-12">
                <div className="flex flex-col gap-4 ">
                    <div className="flex gap-2 rounded-md p-4 justify-center items-center bg-whiteC text-blackC font-bold">
                        <div className="w-2/4">
                            <h1 className="text-base mb-2">Local News, Teams & Players</h1>
                            <button className="text-xs bg-whiteC shadow-md py-1 px-2 text-blueC font-bold rounded-lg">Allow Location</button>
                        </div>
                        <img className="w-1/4 h-2/3" src="/public/assets/work/before-circle.png" alt="" />
                        <img className="w-1/4 h-2/3" src="/public/assets/work/circle-second.png" alt="" />
                    </div>

                    <div className="bg-whiteC rounded-md text-blackC flex  p-4 gap-2">
                        <div className="w-8/12 overflow-hidden">
                            <h3 className="text-xs font-bold text-blackC">Robert Lewandowski</h3>
                            <div className="grid grid-cols-2 gap-2  text-[8px] mt-3">
                                <button className="shadow-whiteC px-2 py-1 bg-whiteBtn shadow-sm rounded-xl ">Place of birth</button>
                                <button className="shadow-whiteC px-2 py-1 bg-whiteBtn shadow-sm rounded-xl ">Poland</button>
                                <button className="shadow-whiteC px-2 py-1 bg-whiteBtn shadow-sm rounded-xl ">Current Team:</button>
                                <button className="shadow-whiteC px-2 py-1 bg-whiteBtn shadow-sm rounded-xl ">Barcelona</button>
                            </div>
                        </div>
                        <div className="w-3/12 flex justify-center items-center">

                            <img className="h-2/3" src="/public/assets/work/second-curve.png" alt="" />
                        </div>

                        <div className="flex flex-row w-4/12 gap-2">
                            <div className="text-[8px] lg:text-base flex flex-col gap-2 items-center">
                                <button className="bg-whiteBtn  px-2">Age</button>
                                <button className="bg-whiteBtn  px-2">Height:</button>
                                <button className="bg-whiteBtn  px-2">Weight:</button>
                            </div>
                            <div>

                                <button className="text-xs px-2 py-1 bg-whiteBtn text-blueC inline">Striker</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-blueC p-4 rounded-md flex">
                        <div className="w-2/3">
                            <div className="flex gap-2 items-center mb-2">
                                <p className="p-2 text-md  bg-whiteC inline-block text-blackC font-bold rounded-full ">03</p>
                                <div>
                                    <h3 className="text-md font-bold">Connect With Us</h3>
                                    <p className="text-xs opacity-75">Wait for contact with your new team.</p>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <p className="p-2 text-md  bg-whiteC inline-block text-blackC font-bold rounded-full ">03</p>
                                <div>
                                    <h3 className="text-md font-bold">Connect With Us</h3>
                                    <p className="text-xs opacity-75">Wait for contact with your new team.</p>
                                </div>
                            </div>

                        </div>

                        <div className="w-1/3">
                            <div className="flex justify-end items-center gap-2">
                                <p>Filter</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                                    <path d="M13.084 4.40202H1.72666C1.55932 4.40202 1.39884 4.3363 1.28051 4.2193C1.16218 4.1023 1.0957 3.94362 1.0957 3.77816C1.0957 3.6127 1.16218 3.45402 1.28051 3.33702C1.39884 3.22003 1.55932 3.1543 1.72666 3.1543H13.084C13.2513 3.1543 13.4118 3.22003 13.5301 3.33702C13.6484 3.45402 13.7149 3.6127 13.7149 3.77816C13.7149 3.94362 13.6484 4.1023 13.5301 4.2193C13.4118 4.3363 13.2513 4.40202 13.084 4.40202ZM10.9808 7.31339H3.82987C3.66252 7.31339 3.50204 7.24766 3.38371 7.13066C3.26538 7.01366 3.1989 6.85498 3.1989 6.68952C3.1989 6.52407 3.26538 6.36538 3.38371 6.24839C3.50204 6.13139 3.66252 6.06566 3.82987 6.06566H10.9808C11.1481 6.06566 11.3086 6.13139 11.4269 6.24839C11.5452 6.36538 11.6117 6.52407 11.6117 6.68952C11.6117 6.85498 11.5452 7.01366 11.4269 7.13066C11.3086 7.24766 11.1481 7.31339 10.9808 7.31339ZM8.45691 10.2248H6.35371C6.18637 10.2248 6.02588 10.159 5.90755 10.042C5.78922 9.92503 5.72275 9.76635 5.72275 9.60089C5.72275 9.43543 5.78922 9.27675 5.90755 9.15975C6.02588 9.04275 6.18637 8.97702 6.35371 8.97702H8.45691C8.62425 8.97702 8.78474 9.04275 8.90307 9.15975C9.02139 9.27675 9.08787 9.43543 9.08787 9.60089C9.08787 9.76635 9.02139 9.92503 8.90307 10.042C8.78474 10.159 8.62425 10.2248 8.45691 10.2248Z" fill="white" />
                                </svg>
                            </div>
                        </div>

                    </div>
                </div>
                {/* form  */}
                <div className="bg-blueC flex rounded-md flex-col p-4 mt-5 md:mt-0 lg:mt-0">
                    <div className="w-1/2 ">
                        <h3 className="text-base ">Sign Up</h3>
                        <p className="text-xs opacity-75">Create an account ad add your profile for those loking.</p>
                    </div>
                    <form className="mt-3 p-4 bg-whiteC rounded-lg" >
                        <div className="grid grid-cols-2 gap-5  text-blackC  ">
                            <div className="">
                                <p>First Name</p>
                                <input className="w-full bg-whiteBtn" type="text" />

                            </div>
                            <div>
                                <p>Last Name</p>
                                <input className="w-full bg-whiteBtn" type="text" />

                            </div>
                            <div>
                                <p>Email Address</p>
                                <input className="w-full bg-whiteBtn" type="email" />

                            </div>
                            <div>
                                <p>Phone Number</p>
                                <input className="w-full bg-whiteBtn" type="tel" />

                            </div>


                        </div>

                        <div className="text-blackC">
                            <h4 className="text-base font-bold">Kind Of Sports</h4>
                            <div className="flex flex-wrap gap-2 text-xs my-2">
                                <span className="flex items-center" ><input type="radio"  /> Football </span>
                                <span className="flex items-center"><input type="radio" /> Baskeball </span>
                                <span className="flex items-center"><input type="radio" /> Handball </span>
                                <span className="flex items-center"><input type="radio" /> Vollyeball </span>
                            </div>
                            <h4 className="text-base font-bold">You</h4>
                            <div className="flex gap-2 text-xs my-2">
                                <span className="flex items-center" ><input type="radio" /> Player </span>
                                <span className="flex items-center"><input type="radio" /> Manager </span>
                                <span className="flex items-center"><input type="radio" /> Coach </span>
                            </div>


                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default OurWork;