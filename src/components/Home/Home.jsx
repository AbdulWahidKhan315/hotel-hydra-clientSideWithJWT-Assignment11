import Featured from "../HomeComponents/Featured";
import GoogleMap from "../HomeComponents/GoogleMap";
import AutoPlay from "../HomeComponents/SliderSlik";

const Home = () => {
    return (
        <div>
            <AutoPlay></AutoPlay>
            <Featured></Featured>
            <GoogleMap></GoogleMap>
        </div>
    );
};

export default Home;