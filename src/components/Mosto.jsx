import React from "react";

export default function Mosto() {
  const blog=[
    {
      image:"./mosto/blog1.png",
      heading:"Make your team a Design driven company",
      content:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      circularImage:"./mosto/Circular1.png",
      name:"BY MIKE DAMON"
    },
    {
      image:"./mosto/blog2.png",
      heading:"How to nurture a calm and organized work culture",
      content:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
      circularImage:"./mosto/Circular2.png",
      name:"BY TIM NORTON"
    },
    {
      image:"./mosto/blog3.png",
      heading:"How can the architecture influence our mood",
      content:"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33.",
      circularImage:"./mosto/Circular3.png",
      name:"BY JESSICA JONES"
    },
  ];
  return (
    <div >
      {/* page 1 */}
      <div
        className="pb-5 text-white bg-cover bg-no-repeat bg-scroll"
        style={{ backgroundImage: 'url("./mosto/background.png")' }}
      >
        <div className="p-3 ">
          <div className="">
            <div className="flex justify-around">
              <img src="./mosto/mosto.png" alt="Mosto" />
              <div className="flex justify-between">
                <div className="hidden sm:flex">
                  <h6>Home Pages</h6>
                  <h6 className="px-4">Blogs</h6>
                  <h6>Pages</h6>
                  <h6 className="px-4">Ecommerce</h6>
                  <h6>RTL Version</h6>
                  <h6 className="px-4">Theme docs</h6>
                </div>
                <button className="bg-[#FF4343] px-2 rounded p-1 ">
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-4 py-5 my-5 text-center">
          <h4>WE CREATE DIGITAL PRODUCTS</h4>
          <h1 className="my-5 font-bold text-5xl sm:text-8xl">
            Introduce Our Creative Agency.
          </h1>
          <div className="mt-20 flex place-content-center">
            <button type="button" className="bg-[#FF4343] px-4 p-2 rounded">
              SEE OUR WORK
            </button>
          </div>
        </div>
      </div>
      {/* page 2 */}
      <div className="container my-10">
        <h4 className="font-2xl text-center text-2xl text-[#1F2C73]">
          WE CREATE DIGITAL PRODUCTS
        </h4>

        <div className="my-4 flex place-content-center">
          <img src="./mosto/Divider.png" alt="Divider" />
        </div>

        <p className="mx-5 text-lg text-center">
          Inertia was founded to help developers and designers with their
          projects by offering great quality products. By developing a nicely
          designed, easy to customize theme, we strive to offer a good variety
          of options to anyone without spending a lot of time and money.
        </p>
      </div>
      {/* page 3 */}
      <div className="text-center bg-[#EEF3F9]">
        <div className="container">
          <h4 className="pt-10 text-2xl font-semibold  text-[#1F2C73]">
            Featured Projects
          </h4>
          <div className="lg:col-10 pb-5 mb-5 lg:mb-0 md:col-10 text-center mx-auto">
            <div className="my-4 flex place-content-center">
              <img className="my-5" src="./mosto/Divider.png" alt="Divider2" />
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 text-center justify-center gap-4 mx-16">
              <img className="p-0" src="./mosto/Item1.png" alt="Item1" />
              <img className="p-0" src="./mosto/Item2.png" alt="Item2" />
              <img className="p-0 " src="./mosto/Item3.png" alt="Item3" />
              <img className="p-0" src="./mosto/Item4.png" alt="Item4" />
              <img className="p-0" src="./mosto/Item5.png" alt="Item5" />
              <img className="p-0" src="./mosto/Item6.png" alt="Item6" />
            </div>
          </div>
        </div>
        <img
          className="bg-[#EEF3F9] w-full"
          src="./mosto/Diagonal.png"
          alt="Diagonal"
        />
      </div>

      {/* page 4 */}
      <div className="px-4 pt-16 container">
        <div className="grid sm:grid-cols-2 items-center gap-5 py-5">
          <div className="m-5">
            <img src="./mosto/stripe.png" alt="Stripe" />
            <p className="font-light text-lg my-4">
              "The work that Inertia has done for our mobile app designs far
              exceeded our expectations, can't wait to work with them once
              again!"
            </p>
            <h4 className="font-semibold text-2xl">David Gilmour</h4>
            <p>Co-Founder</p>
          </div>
          <div className="m-5">
            <div>
              <img src="./mosto/dribble.png" alt="Dribble" className="w-full" />
            </div>
            <p className="font-light text-lg my-4">
              "Focus on creating and growing your projects and websites, and
              we‘ll always take care of spinning up new designs for your users
              and making sure they look great"
            </p>
            <h4 className="font-semibold text-2xl">Roger Waters</h4>
            <p>Head of Design</p>
          </div>
        </div>
      </div>
      {/* page 5 */}
      <div className=" container p-5">
        <div className="pt-5">
          <div className="grid lg:grid-cols-2">
            <div>
              <h4 className="pt-5 text-2xl font-semibold  text-[#1F2C73]">
                Careers at Inertia
              </h4>
              <div className="my-4 flex place-content-center">
                <img src="./mosto/Divider2.png" alt="divider2" />
              </div>
              <p className=" my-4 font-light text-lg">
                Join us in our quest to bring the best experiences through
                design and technology to the world, our most important vision is
                to have the best work culture possible.
              </p>
            </div>
            <div></div>
          </div>

          <div className="grid md:grid-cols-3 p-5 m-5">
            <div className="mb-2">
              <div className="flex mb-3 place-content-center">
                <h3 className="text-xl font-semibold  text-[#1F2C73]">
                  Dublin{" "}
                </h3>
                <img
                  className="px-2"
                  src="./mosto/Location.png"
                  alt="Location"
                />
              </div>

              <ul className="p-3 mx-5">
                <li className="mb-2">
                  <a href="#" className="">
                    Head of Marketing
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="">
                    UX Designer
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="">
                    Senior Programmer
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="">
                    Mobile UI Designer
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="">
                    Lead Product Designer
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-2">
              <div className="flex mb-3 place-content-center">
                <h3 className="text-xl font-semibold  text-[#1F2C73]">
                  Amsterdam{" "}
                </h3>
                <img
                  className="px-2"
                  src="./mosto/Location.png"
                  alt="Location"
                />
              </div>

              <ul className="p-3 mx-5">
                <li className="mb-2">
                  <a href="#" className="">
                    Head of Operations
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="">
                    Mobile Engineer
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="">
                    Animation Designer
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-2">
              <div className="flex mb-3 place-content-center">
                <h3 className="text-xl font-semibold  text-[#1F2C73]">
                  Mexico City{" "}
                </h3>
                <img
                  className="px-2"
                  src="./mosto/Location.png"
                  alt="Location"
                />
              </div>

              <ul className="p-3 mx-5">
                <li className="mb-2">
                  <a href="#" className="">
                    Head of Motion Design
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="">
                    Graphic Designer
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="">
                    Senior UI Designer
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="">
                    Backend Engineer
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <button className="flex bg-[#FF4343] p-2 px-4 rounded text-white font-semibold text-lg">
            Careers At Intertia
            <img src="./mosto/arrow.png" alt="arrow" className="m-1 px-1" />
          </button>
        </div>
      </div>
      {/* page 6 */}
      <div className="container p-2">
        <h1 className="pt-5 text-2xl font-semibold  text-[#1F2C73]">
          From the blog
        </h1>
        <div className="my-4 flex place-content-center">
          <img src="./mosto/Divider2.png" alt="divider2" />
        </div>
        <div className="grid md:grid-cols-3 gap-4 m-3 sm:m-5">
          {blog.map((item, index) => (
            <div className="m-1 shadow-lg " key={index}>
              <div className="">
                <img src={item.image} alt="newsImage" className="w-full"/>
                <ul className="my-4 p-2">
                  <li>
                    <p className="text-md">{item.content}</p>
                  </li>
                  <li className="flex my-3 p-2 text-md">
                    <img src={item.circularImage} alt="" className="size-8" />
                    <p className="px-1">{item.name}</p>
                    
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* page 7 */}
      <div
        className="mt-5  text-white bg-cover bg-no-repeat bg-scroll"
        style={{ backgroundImage: 'url("./mosto/Background2.png")' }}
      >
        <div className="px-4 py-5  text-center ">
          <h1 className="font-bold text-5xl sm:text-8xl p-5">
            Want to hire us?
          </h1>
          <p className="text-xl p-3">
            Have an idea for an awesome project? We'd love to help make it real.
          </p>
          <div className="flex place-content-center p-5 mb-16">
            <button
              type="button"
              className=" bg-[#FF4343] p-2 px-4 rounded text-white font-semibold text-lg"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* page 8 */}
      <div className="bg-black text-white">
        <div className="container p-16">
          <div className="pt-5 ">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-5 gap-4 ">
              <div className=" mb-3">
                <h5 className="text-xl font-semibold">COMPANY</h5>
                <ul className="mt-2">
                  <li className="mb-2">
                    <a href="#">Portfolio</a>
                  </li>
                  <li className=" mb-2">
                    <a href="#">Our clients</a>
                  </li>
                  <li className="mb-2">
                    <a href="#">Careers</a>
                  </li>
                  <li className="mb-2">
                    <a href="#">Mobile UI Designer</a>
                  </li>
                  <li className="mb-2">
                    <a href="#">Lead Product Designer</a>
                  </li>
                </ul>
              </div>
              <div className="mb-3">
                <h5 className="text-xl font-semibold">OFFICES </h5>
                <ul className="mt-2">
                  <li className="mb-2">
                    <a href="#">
                      345 Main St. San Francisco, CA 103 N. 13th Street.
                      Seattle, WA
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-3">
                <h5 className="text-xl font-semibold">CONTACT </h5>
                <ul className="mt-2">
                  <li className="mb-2">
                    <a href="#">+81 555 489 902</a>
                  </li>
                  <li className="mb-2">
                    <a href="#">info@themes.com</a>
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <h5 className="text-xl font-semibold">ABOUT</h5>
                <ul className="mt-2">
                  <li className="mb-2">
                    <a href="#">Log in to your account</a>
                  </li>
                  <li className="mb-2">
                    <a href="#">Support</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex place-content-center">
              <img src="./mosto/Social.png" alt="Social" className="size-50" />
            </div>
          </div>
          <div className="m-5 pt-5 text-center">
            <p className="mb-1">All rights reserved. © 2020.</p>
            <ul className="flex justify-evenly">
              <li className="">
                <a href="#">Privacy &amp; terms</a>
              </li>

              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
