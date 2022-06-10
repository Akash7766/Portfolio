import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="py-10 mx-5 md:mx-16">
        <h2 className="text-3xl sm:text-5xl text-center border-b-2 pb-3 text-info">
          <i class="fa-solid fa-address-card mr-5"></i>Contact Me
        </h2>
      </div>
      <div className="w-full md:w-[700px] mx-auto p-5 ">
        <form>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            <div>
              <label htmlFor="" className="label">
                Name:
              </label>
              <input
                type="text"
                className="bg-transparent border-2 h-10 px-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="" className="label">
                Email:
              </label>
              <input
                type="text"
                className="bg-transparent border-2 h-10 px-2 w-full"
              />
            </div>
          </div>
          <label htmlFor="" className="label">
            Your Message
          </label>
          <textarea
            type="text"
            className="bg-transparent border-2 w-full h-36 px-2"
          />
          <div className="text-center mt-5">
            <button className="btn btn-outline btn-info border-4 rounded-none">
              Send Message
            </button>
          </div>
        </form>
      </div>
      <div className="px-5 py-20 grid md:grid-cols-3 gap-10">
        <div className="text-center">
          <i class="fa-solid fa-paper-plane text-4xl text-info"></i>
          <h3 className="text-xl mt-3">
            <a href="mailto:minhazur.akash1@gmail.com">
              minhazur.akash1@gmail.com
            </a>
          </h3>
        </div>
        <div className="text-center">
          <i class="fa-solid fa-location-dot text-4xl text-info"></i>
          <h3 className="text-xl mt-3">Tejgaon,Dhaka-1208</h3>
        </div>
        <div className="text-center">
          <i class="fa-solid fa-phone-flip text-4xl text-info"></i>
          <h3 className="text-xl mt-3">
            <a href="tel:+8801778613295">+8801778613295</a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
