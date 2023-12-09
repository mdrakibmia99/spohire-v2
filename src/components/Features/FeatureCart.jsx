
import imgcart1 from '/assets/feature/feature1.png'
import imgcart2 from '/assets/feature/feature2.png'
import imgcart3 from '/assets/feature/feature3.png'
const carts=[
    {className:{bgImg:"bg-[url('/assets/feature/bg-1.png')]"},title:"Confidentiality",description:"I can tell you first hand, ChainGPT is absolutely amazing. They have helped me and my team speed up our working process by 125%. The access to blockchain information was never easier.",img:imgcart1},
    {className:{bgImg:"bg-[url('/assets/feature/bg-2.png')]"},title:"Stay in Touch",description:"I can tell you first hand, ChainGPT is absolutely amazing. They have helped me and my team speed up our working process by 125%. The access to blockchain information was never easier.",img:imgcart2},
    {className:{bgImg:"bg-[url('/assets/feature/bg-3.png')]"},title:"Confidentiality",description:"I can tell you first hand, ChainGPT is absolutely amazing. They have helped me and my team speed up our working process by 125%. The access to blockchain information was never easier.",img:imgcart3},
]
const FeatureCart = () => {
    return (
        <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-6'>
            {
                carts.map((cart,index)=>(
                 <div className={`${cart.className.bgImg} bg-cover px-4 bg-no-repeat flex`} key={index}>
                    <div className='w-7/12 py-4'>
                       <h2 className='text-lg lg:text-3xl  font-bold mb-4'>{cart.title}</h2>
                       <p className='text-xs lg:text-xl'>{cart.description}</p>
                    </div>
                    <div className='w-5/12 '>
                    <img className='w-full h-full' src={cart.img} alt="" />
                    </div>
                 </div>
                ))
            }
        </div>
    );
};

export default FeatureCart;