import lineSteps from "../../../assets/images/line-step.svg";
import steps1 from "../../../assets/images/step-1-illustration.svg";
import steps2 from "../../../assets/images/step-2-illustration.svg";
import steps3 from "../../../assets/images/step-3-illustration.svg";


function Ideas() {
    return (
        <section className="container mx-auto pt-24">
            <div className="flex justify-between items-center mb-10">
                <div className="w-auto">
                    <h2 className="text-3xl text-gray-900 mb-8">
                        Only 3 steps to execute <br />
                        your bright ideas
                    </h2>
                </div>
            </div>
            <div className="flex">
                <div className="w-full px-56 mb-5">
                    <img src={lineSteps} alt="" className="w-full" />
                </div>
            </div>
            <div className="flex justify-between items-center text-center">
                <div className="w-1/3">
                    <figure className="flex justify-center items-center">
                        <img src={steps1} alt="" className="h-30 mb-8" />
                    </figure>
                    <div className="step-content">
                        <h3 className="font-medium">Sign Up</h3>
                        <p className="font-light">
                            Sign Up account and start <br />funding project
                        </p>
                    </div>
                </div>
                <div className="w-1/3">
                    <figure className="flex justify-center items-center -mt-24">
                        <img src={steps2} alt="" className="h-30 mb-8" />
                    </figure>
                    <div className="step-content">
                        <h3 className="font-medium">Open Project</h3>
                        <p className="font-light">
                            Choose some project idea, <br />
                            and start funding
                        </p>
                    </div>
                </div>
                <div className="w-1/3">
                    <figure className="flex justify-center items-center -mt-48">
                        <img src={steps3} alt="" className="h-30 mb-8" />
                    </figure>
                    <div className="step-content">
                        <h3 className="font-medium">Execute</h3>
                        <p className="font-light">
                            Time to makes dream <br />
                            comes true
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ideas;