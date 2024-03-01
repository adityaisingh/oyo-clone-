import Head from "next/head";

const login = () => {
  return (
    <div>
      <Head>
        <title>
          OYO: India's Best Online Hotel Booking Site For Sanitized Stay.
        </title>
      </Head>
      <div className="flex h-screen justify-center items-center relative bg-login-background bg-no-repeat bg-cover">
        <div className="absolute w-full top-10 px-20 flex items-center">
          <h2 className="text-5xl font-bold mr-5">OYO</h2>
          <p className="font-bold text-2xl text-white">
            Hotels and homes across 800 cities, 24+ countries
          </p>
        </div>
        <div className="flex justify-center w-5/12 ">
          <div>
            <p className="font-bold text-5xl text-justify pl-10 text-white">
              There's a smarter way to OYO around
            </p>
            <p className="text-2xl mt-8 pl-10 text-white">
              Sign up with your phone number and get exclusive access to
              discounts and savings on OYO stays and with our many travel
              partners.
            </p>
          </div>
        </div>
        <div className=" w-100 h-100  border border-red-500 ml-10  bg-white">
          <p className="h-10 font-bold text-white w-full flex items-center px-10 bg-gradient-to-r from-red-300 to bg-red-600 ">
            Sign up & Get ₹500 OYO Money
          </p>
          <div className="px-7">
            <p className="mt-3 text-3xl text-black text-bold">Login/Signup</p>
            <p className="mt-5 text-bold text-3xl">
              Please Enter Your Phone Number To Continue
            </p>
            <input
              type="email"
              placeholder="Enter Your Name"
              className="mt-3 w-80 border-2 rounded text-l text-bold  border-gray-500 flex items-center"
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="mt-3 w-80 border-2 rounded text-l text-bold  border-gray-500 flex items-center"
            />
            <input
              type="email"
              placeholder="Enter Your Password"
              className="mt-3 w-80 border-2 rounded text-l text-bold  border-gray-500 flex items-center"
            />
            <button className="mt-3 w-60 h-10 border-2 rounded border-gray-500 text-white bg-slate-500 hover:cursor-pointer hover:bg-red-500">
              Verify Email
            </button>
            <div className="mt-3">
              <span>Already have Account ?</span>
              <span className="border-b px-2 border-black text-red-600">
                Login
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
