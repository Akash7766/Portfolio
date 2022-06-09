import React from "react";
import Services from "./Services";

const About = () => {
  return (
    <div>
      <div className="py-10 mx-16">
        <h2 className="text-5xl text-center border-b-2 pb-3">
          <i class="fa-solid fa-user-tie mr-3"></i>About Me
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-flow-col px-5 md:px-14 gap-8 text-white">
        <div className="col-span-8">
          <h2 className="text-2xl font-bold mb-8 text-white">
            Frontend Web Developer.
          </h2>
          <p>
            Dolor reprehenderit aut repudiandae maiores recusandae. Consequatur
            dolor nisi labore commodi ipsa? Excepturi velit laboriosam at
            voluptatibus cupiditate est vel. Dolorem praesentium itaque fugiat
            placeat quas consequatur? Obcaecati natus rerum Consectetur
            consectetur nesciunt nesciunt blanditiis amet? <br /> <br /> Quod
            quis unde aliquid excepturi laudantium? Illo architecto aliquam
            velit illo magnam neque perferendis sint Incidunt eius ipsa
            inventore labore eos velit. Minus hic magni reiciendis
            necessitatibus ex Quidem officia deleniti accusamus obcaecati
            dolores. Porro culpa quibusdam impedit porro praesentium excepturi.
            Alias ab consequatur?
          </p>
        </div>
        <div className="col-span-4">
          <h2 className="text-2xl mb-5 font-bold">Personal Information</h2>
          <p>Name: Minhazur Rahman Akash</p>
          <p>Age: 22 Years</p>
          <p>Country: Bangladesh</p>
          <p>Address: Tejgaon, Dhaka 1208</p>
          <p>Email: minhazur.akash1@gmail.com</p>
          <p>Freelance: Available</p>
          <button className="btn btn-outline btn-success mt-8">
            <a
              href="./../../../file/Minhazur__Rahman__Akash__Resume.pdf"
              download
            >
              Download Resume
            </a>
          </button>
        </div>
      </div>
      <Services></Services>
    </div>
  );
};

export default About;
