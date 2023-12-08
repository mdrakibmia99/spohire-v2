const featureOption = [
    { name: "Football", className: { borderColor: "border-[#75DB8B]" } },
    { name: "Volleyball", className: { borderColor: "border-[#6B71FF]" } },
    { name: "Football", className: { borderColor: "border-[#75DB8B]" } },
    { name: "BASKETBALL", className: { borderColor: "border-[#B844FF]" } },
    { name: "Handball", className: { borderColor: "border-[#FF3636]" } },
    { name: "Volleyball", className: { borderColor: "border-[#563AFF]" } },

]
const FeatureOption = () => {
    return (
        <div className="grid grid-cols-3 gap-4 my-8">
            {

                featureOption.map((item,index)=>(
                    <p className={`${item.className.borderColor} border flex justify-center items-center rounded-full text-xs font-bold py-2 px-6`} key={index}>{item.name}</p>
                ))
            }
        </div>
    );
};

export default FeatureOption;