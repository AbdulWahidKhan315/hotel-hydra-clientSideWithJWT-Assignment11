import Featured from "../HomeComponents/Featured";
import GoogleMap from "../HomeComponents/GoogleMap";
import AutoPlay from "../HomeComponents/SliderSlik";
import Testimonials from "../HomeComponents/Testimonials";
import ReactHelmet from "../ReactHelmet/ReactHelmet";

const Home = () => {
    return (
        <div>
            <ReactHelmet title='Home Page'></ReactHelmet>
            <AutoPlay></AutoPlay>
            <Featured></Featured>
            <Testimonials></Testimonials>
            <GoogleMap></GoogleMap>
        </div>
    );
};

export default Home;