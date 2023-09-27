import testimonialLine from "../../../assets/images/testimonial-line.svg";
import testimonialIcon1 from "../../../assets/images/testimonial-1-icon.png";
import testimonialIcon2 from "../../../assets/images/testimonial-2-icon.png";
import testimonialIcon3 from "../../../assets/images/testimonial-3-icon.png";


function Clients() {
    return (
        <>
            <section className="container mx-auto pt-24">
                <div className="flex justify-between items-center">
                    <div className="w-auto">
                        <h2 className="text-3xl text-gray-900 mb-8">
                            See What Our <br />
                            Happy Clients Say
                        </h2>
                    </div>
                </div>
                <div className="flex mb-10">
                    <div className="w-2/12 flex justify-center items-start">
                        <img src={testimonialLine} alt="" />
                    </div>
                    <div className="w-8/12 mt-16">
                        <h2 className="text-3xl text-gray-900 font-light">
                            “Funding at Bucker is very easy and comfortable. <br />
                            Just need to find an idea, click and already funding.”
                        </h2>
                        <div className="testimonial-info mt-8">
                            <div className="name text-xl font-semibold">Shopie Nicole</div>
                            <div className="title text-xl font-light text-gray-400">
                                Project Manager
                            </div>
                        </div>
                        <div className="testimonial-icon mt-10">
                            <img
                                src={testimonialIcon1}
                                alt=""
                                className="w-20 mr-5 inline-block testimonial-user rounded-full"
                            />
                            <img
                                src={testimonialIcon2}
                                alt=""
                                className="w-20 mr-5 inline-block testimonial-user rounded-full"
                            />
                            <img
                                src={testimonialIcon3}
                                alt=""
                                className="w-20 mr-5 inline-block testimonial-user active rounded-full"
                            />
                        </div>
                    </div>
                    <div className="w-2/12"></div>
                </div>
            </section>
        </>
    )
}

export default Clients;