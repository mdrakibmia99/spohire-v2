import FeatureCart from "./FeatureCart";
import FeatureOption from "./FeatureOption";
import Featuretitle from "./Featuretitle";

const Features = () => {
    return (
        <div className="w-full lg:min-h-screen">
            <FeatureOption/>
            <Featuretitle/>
            <FeatureCart/>
        </div>
    );
};

export default Features;