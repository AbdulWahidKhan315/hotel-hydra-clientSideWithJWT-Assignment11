import Featured from "../HomeComponents/Featured";
import GoogleMap from "../HomeComponents/GoogleMap";
import AutoPlay from "../HomeComponents/SliderSlik";
import ReactHelmet from "../ReactHelmet/ReactHelmet";

const Home = () => {
    return (
        <div>
            <ReactHelmet title='Home Page'></ReactHelmet>
            <AutoPlay></AutoPlay>
            <Featured></Featured>
            <GoogleMap></GoogleMap>
        </div>
    );
};

export default Home;