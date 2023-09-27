import hero from "../../../assets/images/hero-image@2x.png";
import Navbar from "../../molecules/Navbar";

function Hero() {
    return (
        <>
            <section className="landing-hero pt-5">
                <div className="header__bg"></div>
                <div className="container mx-auto relative">
                    <Navbar />
                    <div className="flex items-center pt-10 px-5 md:px-0">
                        <div className="w-1/2">
                            <h1 className="text-4xl text-white mb-5">
                                We help <u className="hero-underline">startups</u> to <br />
                                get started & <u className="hero-underline">secure funding</u> <br />
                                for their true needs
                            </h1>
                            <p className="text-white text-xl font-light mb-8">
                                Fund the best ideas to turn them into <br />
                                real products and be a contributor
                            </p>
                            <button className="block bg-orange-button hover:bg-green-button text-white font-semibold px-12 py-3 text-xl rounded-full">
                                Find a Project
                            </button>
                        </div>
                        <div className="w-1/2 flex justify-center">
                            <img src={hero} alt="crowdfunding project" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero