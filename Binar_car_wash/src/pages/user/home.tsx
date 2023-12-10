import Banner from "../../components/user/banner"
import Asked from "../../components/landingpages/faq"
import Footer from "../../components/landingpages/footer"
import OurService from "../../components/landingpages/ourservices"
// import Testimonial from "../../components/landingpages/testinial"
import WhyUs from "../../components/landingpages/whyus"
import HeroSection from "../../components/user/herosection"
import HomeHeader from "../../components/user/navbar"
import TestimoniCarouser from "../../components/landingpages/carouser"
import { TUserInfoContext, UserInfoContext } from "../../context/userInfo";
import { ContextType, useContext, Context } from 'react'


function LandingPages() {
  const {userInfo} = useContext(UserInfoContext) as ContextType<Context<TUserInfoContext>>
    const username = userInfo ? userInfo.name || "" : "";
    return (
        <>
            
            <HomeHeader username={username}   />
            <HeroSection />
            <OurService />
            <WhyUs />
            <TestimoniCarouser />
            <Banner />
            <Asked />
            < Footer />

      
        </>
    );
}

export default LandingPages;
