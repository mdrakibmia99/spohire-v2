import img1 from "/public/assets/testimonal/airbnb1.png"
import img2 from "/public/assets/testimonal/amazon2.png"
import img3 from "/public/assets/testimonal/Creative3.png"
import img4 from "/public/assets/testimonal/shopify4.png"
import img5 from "/public/assets/testimonal/Google5.png"
const images = [img1,
    img2,
    img3,
    img4,
    img5]
const Review = () => {
    return (
        <div className="bg-whiteC text-blackC lg:min-h-screen w-full grid place-content-center">
            <div>
                <h2 className="text-2xl lg:text-6xl text-center font-bold pt-8 md:pt-12">What people say</h2>
                <p className="text-xs lg:text-2xl opacity-75 w-2/3 mx-auto text-center pb-6 pt-2 md:pt-7  lg:pb-16">Lorem ipsum dolor sit amet considei suhcsd sla;askls sajsduh dsjdsuh</p>
            </div>


            <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:w-[900px] w-full mx-auto gap-3 relative">
              
                <div className="bg-whiteC text-blackC border-[15px] border-orangeC p-4">
                    <div className="flex gap-2 items-center">
                        <img src="/public/assets/review/profile.svg" alt="" />
                        <div>
                            <p className="text-base lg:text-xl font-bold">Jow Ella</p>
                            <p className="text-xs lg:text-base opacity-75">User Interface Design</p>
                        </div>
                    </div>
                    <p className="mt-3 text-base lg:text-xl">“In urna, non nisl tincidunt gravida elementum turpis. Risus, ac ultrices tincie quam arcu odio volutpat.”</p>
                    <div className="flex items-center gap-2 text-sm my-4">
                        <img className="p-1 bg-whiteC rounded-full" src="/public/assets/review/google.png" alt="" />
                        <span>A5.00</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="9" viewBox="0 0 44 9" fill="none">
                            <path d="M4.05652 0.77832L4.92418 3.35938L7.75103 3.35345L5.46043 4.94271L6.33985 7.52011L4.05652 5.92126L1.77318 7.52011L2.6526 4.94271L0.362003 3.35345L3.18885 3.35938L4.05652 0.77832Z" fill="#43BA80" />
                            <path d="M12.9374 0.77832L13.805 3.35938L16.6319 3.35345L14.3413 4.94271L15.2207 7.52011L12.9374 5.92126L10.654 7.52011L11.5335 4.94271L9.24286 3.35345L12.0697 3.35938L12.9374 0.77832Z" fill="#43BA80" />
                            <path d="M21.8124 0.77832L22.6801 3.35938L25.507 3.35345L23.2164 4.94271L24.0958 7.52011L21.8124 5.92126L19.5291 7.52011L20.4085 4.94271L18.1179 3.35345L20.9448 3.35938L21.8124 0.77832Z" fill="#43BA80" />
                            <path d="M30.6895 0.77832L31.5572 3.35938L34.3841 3.35345L32.0935 4.94271L32.9729 7.52011L30.6895 5.92126L28.4062 7.52011L29.2856 4.94271L26.995 3.35345L29.8219 3.35938L30.6895 0.77832Z" fill="#43BA80" />
                            <path d="M39.5741 0.77832L40.4418 3.35938L43.2686 3.35345L40.978 4.94271L41.8574 7.52011L39.5741 5.92126L37.2908 7.52011L38.1702 4.94271L35.8796 3.35345L38.7064 3.35938L39.5741 0.77832Z" fill="#43BA80" />
                        </svg>
                        <p>reviews from ELlia joe</p>
                    </div>
                </div>
                <div className="bg-whiteC text-blackC border-[15px] border-blueC p-4">
                    <div className="flex gap-2 items-center">
                        <img src="/public/assets/review/profile.svg" alt="" />
                        <div>
                            <p className="text-base lg:text-xl font-bold">Jow Ella</p>
                            <p className="text-xs lg:text-base opacity-75">User Interface Design</p>
                        </div>
                    </div>
                    <p className="mt-3 text-base lg:text-xl">“In urna, non nisl tincidunt gravida elementum turpis. Risus, ac ultrices tincie quam arcu odio volutpat.”</p>
                    <div className="flex items-center gap-2 text-sm my-4">
                        <img className="p-1 bg-whiteC rounded-full" src="/public/assets/review/google.png" alt="" />
                        <span>A5.00</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="9" viewBox="0 0 44 9" fill="none">
                            <path d="M4.05652 0.77832L4.92418 3.35938L7.75103 3.35345L5.46043 4.94271L6.33985 7.52011L4.05652 5.92126L1.77318 7.52011L2.6526 4.94271L0.362003 3.35345L3.18885 3.35938L4.05652 0.77832Z" fill="#43BA80" />
                            <path d="M12.9374 0.77832L13.805 3.35938L16.6319 3.35345L14.3413 4.94271L15.2207 7.52011L12.9374 5.92126L10.654 7.52011L11.5335 4.94271L9.24286 3.35345L12.0697 3.35938L12.9374 0.77832Z" fill="#43BA80" />
                            <path d="M21.8124 0.77832L22.6801 3.35938L25.507 3.35345L23.2164 4.94271L24.0958 7.52011L21.8124 5.92126L19.5291 7.52011L20.4085 4.94271L18.1179 3.35345L20.9448 3.35938L21.8124 0.77832Z" fill="#43BA80" />
                            <path d="M30.6895 0.77832L31.5572 3.35938L34.3841 3.35345L32.0935 4.94271L32.9729 7.52011L30.6895 5.92126L28.4062 7.52011L29.2856 4.94271L26.995 3.35345L29.8219 3.35938L30.6895 0.77832Z" fill="#43BA80" />
                            <path d="M39.5741 0.77832L40.4418 3.35938L43.2686 3.35345L40.978 4.94271L41.8574 7.52011L39.5741 5.92126L37.2908 7.52011L38.1702 4.94271L35.8796 3.35345L38.7064 3.35938L39.5741 0.77832Z" fill="#43BA80" />
                        </svg>
                        <p>reviews from ELlia joe</p>
                    </div>
                </div>
                <div className="absolute w-full h-full grid justify-center items-center">
                    <div className="inline-block md:-rotate-90 rotate-0">
                        <div className="bg-whiteBtn p-4 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none">
                                <path d="M16 10.6364V10.6364C12.6476 10.9655 9.83731 13.3107 8.9135 16.5501L8.5 18M8.5 18L8.22452 16.873C7.39187 13.4667 4.49135 10.9628 1 10.6364V10.6364M8.5 18L8.5 -3.27835e-07" stroke="#2D2D2D" stroke-width="0.853672" />
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
            <h3 className="text-base lg:text-4xl font-bold text-center py-5">Trusted by Greatest Companies</h3>
            <div className="flex flex-wrap pb-5 md:pb-10 justify-center items-center gap-x-7 gap-y-3">
                {
                    images.map((img, index) => (
                        <div className=" basis-20 lg:basis-36 shrink" key={index}>
                            <img className="w-full" src={img} alt="" />
                        </div>

                    ))
                }


            </div>
      
        </div>
    );
};

export default Review;