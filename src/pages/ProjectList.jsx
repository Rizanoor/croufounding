import Navbar from "../components/molecules/Navbar";

import projectImage from "../assets/images/project-image.jpg"
import projectSlider1 from "../assets/images/project-slider-1.jpg"
import projectSlider2 from "../assets/images/project-slider-2.jpg"
import projectSlider3 from "../assets/images/project-slider-3.jpg"
import projectSlider4 from "../assets/images/project-slider-4.jpg"
import testimonialIcon from "../assets/images/testimonial-1-icon.png"
import Footer from "../components/organisems/Footer";
import EasyFunding from "../components/organisems/EasyFunding";
import { Link } from "react-router-dom";

function ProjectList() {
  return (
    <div className="project-page">
      <section className="project-header pt-5">
        <div className="container mx-auto relative">
          <Navbar/>
        </div>
      </section>
      <section className="container project-container mx-auto -mt-56">
        <div className="flex mt-3">
          <div className="w-3/4 mr-6">
            <div className="bg-white p-3 mb-3 border border-gray-400 rounded-20">
              <figure className="item-image">
                <img src={projectImage} alt="" className="rounded-20 w-full" />
              </figure>
            </div>
            <div className="flex -mx-2">
              <div className="relative w-1/4 bg-white m-2 p-2 border border-gray-400 rounded-20">
                <figure className="item-thumbnail">
                  <img src={projectSlider1} alt="" className="rounded-20 w-full" />
                </figure>
              </div>
              <div className="relative w-1/4 bg-white m-2 p-2 border border-gray-400 rounded-20">
                <figure className="item-thumbnail">
                  <img src={projectSlider2} alt="" className="rounded-20 w-full" />
                </figure>
              </div>
              <div className="relative w-1/4 bg-white m-2 p-2 border border-gray-400 rounded-20">
                <figure className="item-thumbnail">
                  <img src={projectSlider3} alt="" className="rounded-20 w-full" />
                </figure>
              </div>
              <div className="relative w-1/4 bg-white m-2 p-2 border border-gray-400 rounded-20">
                <figure className="item-thumbnail">
                  <img src={projectSlider4} alt="" className="rounded-20 w-full" />
                </figure>
              </div>
            </div>
          </div>
          <div className="w-1/4">
            <div className="bg-white w-full p-5 border border-gray-400 rounded-20 sticky top-15px">
              <h3>Project Leader:</h3>
              <div className="flex mt-3">
                <div className="w-1/4">
                  <img src={testimonialIcon} alt="" className="w-full inline-block rounded-full" />
                </div>
                <div className="w-3/4 ml-5 mt-1">
                  <div className="font-semibold text-xl text-gray-800">
                    Julia Keeva
                  </div>
                  <div className="font-light text-md text-gray-400">
                    28.093 backers
                  </div>
                </div>
              </div>
              <h4 className="mt-5 font-semibold">What will you get:</h4>
              <ul className="list-check mt-3">
                <li>Equity of the startup directly from the founder</li>
                <li>Special service or product that startup has</li>
                <li>You can also sell your equity once the startup goes IPO</li>
              </ul>
              <input
                type="number"
                className="border border-gray-500 block w-full px-6 py-3 mt-4 rounded-full text-gray-800 transition duration-300 ease-in-out focus:outline-none focus:shadow-outline"
                placeholder="Amount in Rp"
                value=""
              />
              <Link
                to="/fund-success"
                className="text-center mt-3 button-cta block w-full bg-orange-button hover:bg-green-button text-white font-medium px-6 py-3 text-md rounded-full"
              >
                Fund Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto pt-8">
        <div className="flex justify-between items-center">
          <div className="w-full md:w-3/4 mr-6">
            <h2 className="text-4xl text-gray-900 mb-2 font-medium">
              Wireboard Fortune
            </h2>
            <p className="font-light text-xl mb-5">
              The new era of mechanical keyboard for everyone
            </p>
            <div className="relative progress-bar">
              <div className="overflow-hidden mb-4 text-xs flex rounded-full bg-gray-200 h-6">
                <div
                  style={{ width: '80%' }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-progress progress-striped"
                ></div>
              </div>
            </div>
            <div className="flex progress-info mb-6">
              <div className="text-2xl">80%</div>
              <div className="ml-auto font-semibold text-2xl">Rp 40.000.000</div>
            </div>
            <p className="font-light text-xl mb-5">
              Designed to fit your dedicated typing experience. No matter what you like, linear, clicky or a little in between, we’ve got you covered with three Gateron switches options (Blue, Brown, Red). With a lifespan of 50 million keystrokes, we want to make sure that you experience the same feedback for every keystroke.
            </p>
            <p className="font-light text-xl mb-5">
              With N-key rollover (NKRO on wired mode only), you can register as many keys as you can press at once without missing out characters. It allows using all the same media keys as conventional macOS.
            </p>
            <p className="font-light text-xl mb-5">
              This keyboard can last up to 72 hours typing or up to 9 days of normal use (8 hrs/day) with a 4000 mAh big battery.
            </p>
          </div>
          <div className="w-1/4 hidden md:block"></div>
        </div>
      </section>
      <EasyFunding/>
      <Footer/>
    </div>
  );
}

export default ProjectList;
