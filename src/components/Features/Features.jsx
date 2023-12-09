import FeatureCart from "./FeatureCart";
import FeatureOption from "./FeatureOption";
import Featuretitle from "./Featuretitle";

const Features = () => {
    return (
        <div className="w-full lg:min-h-screen bg-whiteC text-blackC flex flex-col justify-around">
            <FeatureOption/>
            <div className="px-0 lg:px-5">
            <Featuretitle/>
            <FeatureCart/>
            </div>
        </div>
    );
};

export default Features;