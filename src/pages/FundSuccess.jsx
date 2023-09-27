import fundedIlustrasion from "../assets/images/funded-illustration.svg"
function FundSuccess() {
    return (
        <div className="success-page">
        <div className="container mx-auto h-screen flex justify-center items-center">
          <div className="w-full lg:w-1/3 px-10 lg:px-0">
            <div className="flex justify-center items-center mx-auto mt-6 mb-8">
              <img src={fundedIlustrasion} alt="" className="w-full" />
            </div>
            <h2 className="font-medium mb-3 text-3xl text-center">
              Yeay! You are super
            </h2>
            <p className="text-center font-light">
              Your money has ben transferred
              <br />
              into companys account
            </p>
            <div className="mb-4 mt-6">
              <div className="mb-3">
                <button
                  className="block w-full bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-4 text-lg rounded-full"
                >
                  Fund Other Project
                </button>
              </div>
              <div className="mb-4">
                <button
                  className="block w-full bg-transparent border border-gray-500 text-gray-500 hover:bg-green-button hover:border-green-button hover:text-white font-light px-6 py-4 text-lg rounded-full"
                >
                  My Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default FundSuccess;