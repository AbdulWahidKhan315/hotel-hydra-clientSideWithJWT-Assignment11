import { useContext } from "react";
import Featured from "../HomeComponents/Featured";
import GoogleMap from "../HomeComponents/GoogleMap";
import AutoPlay from "../HomeComponents/SliderSlik";
import Testimonials from "../HomeComponents/Testimonials";
import Loader from "../Loader/Loader";
import ReactHelmet from "../ReactHelmet/ReactHelmet";
import { AuthContext } from "../../providers/AuthProvider";

const Home = () => {
    const { loading } = useContext(AuthContext)
    if(loading){
        return <Loader></Loader>
    }
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