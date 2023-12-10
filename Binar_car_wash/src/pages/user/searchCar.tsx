import Footer from "../../components/landingpages/footer";
import FormSearchCar from "../../components/searchcar/form";
// import FormSearchCar from "../../components/searchcar/form";
import HeroSection from "../../components/user/herosection";
import HomeHeader from "../../components/user/navbar";
import { TUserInfoContext, UserInfoContext } from "../../context/userInfo";
import { ContextType, useContext, Context } from 'react'


function CariMobil() {
    const {userInfo} = useContext(UserInfoContext) as ContextType<Context<TUserInfoContext>>
    const username = userInfo ? userInfo.name || "" : "";
    return (
        <>
            <HomeHeader username={username}/>
            <HeroSection />
            <FormSearchCar />
            <Footer />
        </>
    );
}

export default CariMobil;

