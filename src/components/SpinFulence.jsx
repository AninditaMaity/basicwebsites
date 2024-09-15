import React from "react";

export default function SpinFulence() {
  const card = [
    {
      image: "./spinfluence/cardimage1.png",
      heading: "Core WordPress",
      content:
        "Hub IT allows your business and technology computers to store, analyze, and manipulate big data in the digital world.",
    },
    {
      image: "./spinfluence/cardiamge2.png",
      heading: "Core WordPress",
      content:
        "Hub IT allows your business and technology computers to store, analyze, and manipulate big data in the digital world.",
    },
    {
      image: "./spinfluence/cardimage1.png",
      heading: "Core WordPress",
      content:
        "Hub IT allows your business and technology computers to store, analyze, and manipulate big data in the digital world.",
    },
  ];
  const feature = [
    {
      image: "./spinfluence/Category1.png",
      heading: "Solve Problems Real Time",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      image: "./spinfluence/Category2.png",
      heading: "Secured & Safe Payments",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      image: "./spinfluence/Category3.png",
      heading: "24/7 Customers Support",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
  ];
  const news = [
    {
      image: "./spinfluence/news1.png",
      content: "Business Mistakes to Avoid When Starting a Business",
    },
    {
      image: "./spinfluence/news2.png",
      content:
        "Utilize these nine resources to help you take the stress out of preparing your taxes",
    },
    {
      image: "./spinfluence/news3.png",
      content: "Investment Update, Successful people ask better questions",
    },
  ];
  const itSolution = [
    {
      image: "./spinfluence/pic1.png",
    },
    {
      image: "./spinfluence/pic2.png",
    },
    {
      image: "./spinfluence/pic3.png",
    },
  ];
  return (
    <div>
      {/* page 1 */}

      <div className="container p-5">
        <div className="flex place-content-center justify-between">
          <div className="">
            <a href="/">
              <img
                className=""
                src="./spinfluence/Spinfluence.png"
                alt="Spinfluence"
              />
            </a>
          </div>

          <ul className="hidden sm:flex justify-center my-2">
            <li>
              <a href="#" className="font-semibold px-3">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="font-semibold px-3">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="font-semibold px-3">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="font-semibold px-3">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="font-semibold px-3">
                About
              </a>
            </li>
          </ul>

          <div className="flex justify-between my-2">
            <a href="#" className="font-semibold px-3">
              Login
            </a>
            <img
              className="size-7 mx-5"
              src="./spinfluence/hanburger.png"
              alt="Hamburger"
            />
          </div>
        </div>
      </div>
      <div
        className="px-4 py-5 mb-5 bg-cover bg-no-repeat bg-scroll"
        style={{ backgroundImage: 'url("./spinfluence/background.png")' }}
      >
        <div className="container py-5 text-white text-center">
          <h1 className="my-5 font-bold text-5xl">
            The best IT servicefor your security
          </h1>
          <p className=" font-light text-lg mb-4">
            Hub IT allows your business and technology computers to store and
            manipulate big data in the digital world.
          </p>
          <div className="sm:flex sm:justify-center">
            <button type="button" className="bg-blue-700 p-2 px-5 rounded-md">
              DISCOVER HUB
            </button>
            <button type="button" className="underline p-4">
              Hotline: (733)865-5485
            </button>
          </div>
        </div>
      </div>
      {/* page 2 */}
      <div className="container">
        <div className="grid md:grid-cols-3">
          {card.map((item, index) => (
            <div
              className="m-4 p-5 rounded-3 shadow-md border rounded-lg"
              key={index}
            >
              <div className="flex place-content-center">
                <img src={item.image} alt="cardimage" />
              </div>
              <ul className=" mt-3 mb-4 text-center">
                <li className="font-bold text-lg mb-4">{item.heading}</li>
                <li>{item.content}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* page 3 */}
      <div className="container p-5">
        <div className="grid lg:grid-cols-2 justufy-between py-5 my-5">
          <div className="">
            <img
              src="./spinfluence/sideimage.png"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
            />
          </div>
          <div className=" grid place-content-center p-5 m-5 lg:pl-16 gap-3">
            <p>COMPANY'S VISION</p>
            <h1 className="font-bold text-5xl mb-3">
              IT solutions for your business.
            </h1>
            <p className="font-light">
              Hub IT allows your business and technology computers to store,
              transmit, analyze, and manipulate big data in the digital world.
            </p>
            <div>
              <button
                type="button"
                className="text-white bg-[#1E47FF] px-4 py-2 rounded"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* page 4 */}
      <div className="container p-3 my-16">
        <div className="text-center">
          <h1 className="text-3xl">IT solutions foryour business.</h1>
          <p className="py-2">
            Hub IT allows your business and technology computers to store,
            transmit, analyze,and manipulate big data in the digital world.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4 m-3">
          {itSolution.map((item, index) => (
            <div className="m-1 shadow-lg " key={index}>
              <div className="">
                <img src={item.image} alt="newsImage" className="w-full" />
                <p className="text-lg p-2">
                  Hub IT allows your business and technology computers to store,
                  transmit, analyze,and manipulate big data in the digital
                  world.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* page 5 */}
      <div>
        <img
          src="./spinfluence/background2.png"
          alt="back2"
          className="w-full"
        />
      </div>
      {/* page 6 */}
      <div className="container px-4 my-5 p-5">
        <h1 className="font-bold text-3xl text-center mb-5">
          Why our product are different
        </h1>
        <div className="grid md:grid-cols-3">
          {feature.map((item, index) => (
            <div className="p-5 m-5" key={index}>
              <div className="mb-3">
                <img src={item.image} alt="Category" />
              </div>
              <h3 className="font-semibold text-2xl">
                Solve Problems Real Time
              </h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>

              <a href="#" className="underline text-lg text-blue-500 py-5 flex">
                Learn More
                <img
                  src="./spinfluence/arrow.png"
                  alt="Arrow"
                  className="pl-1"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* page 7 */}
      <div className="container md:px-4 py-10">
        <div className="grid md:grid-cols-2 py-2 bg-[#1E47FF]">
          <div className="">
            <img
              src="./spinfluence/testimonial.jpg"
              className="p-3"
              alt="testimonial"
            />
          </div>
          <div className="text-white text-center md:text-left grid place-content-center gap-3">
            <h1 className="font-semibold text-xl">Satisfied Customers</h1>
            <p className="font-light">
              " Every detail has been taken care these team are realy amazing
              and talented! They can help me with fast and accurate solutions to
              all kinds of issues. Love it! Five stars for them."
            </p>
            <p className="text-lg">Joeby Ragpa</p>
            <p className="font-light">Associate</p>
          </div>
        </div>
      </div>
      {/* page 8 */}
      <div className="container py-3">
        <div className="p-3 text-center">
          <h1 className="text-2xl font-bold">Latest News</h1>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:m-5 m-3">
          {news.map((item, index) => (
            <div className="m-1 shadow-lg " key={index}>
              <div className="">
                <img src={item.image} alt="newsImage" className="w-full" />
                <ul className="my-4 p-1">
                  <li>
                    <p className="text-lg">{item.content}</p>
                  </li>
                  <li className="flex align-items-center my-2 text-md">
                    <img src="./spinfluence/Ellipse.png" alt="" />
                    <p className="px-1 text-[#1E47FF]">Alexander Samokhin</p>
                    <p> - July 06, 2018</p>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* page 9 */}
      <div
        className="my-5 bg-cover bg-no-repeat bg-scroll text-white text-center"
        style={{ backgroundImage: 'url("./spinfluence/background3.jpg")' }}
      >
        <div className="w-full h-full px-4 py-16 ">
          <div className="py-5 ">
            <h1 className="my-5 font-bold text-3xl">
              Ready to get started? Get your Finance out of the way
            </h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4">
                If you deliver enough value, making money becomes the easy part.
                Why should you be stressful? Let us make this easier for you.
              </p>
              <div className="">
                <button
                  type="button"
                  className="bg-[#1E47FF] rounded-full btn-lg px-4 py-2"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* page 10 */}
      <div className="container">
        <div className="p-5">
          <div className="grid md:grid-cols-2 gap-3 justify-items-center">
            <div className="mx-10">
              <img src="./spinfluence/Spinfluence.png" alt="Spinfluence" />
              <div className="flex mt-10">
                <img
                  className="px-3"
                  src="./spinfluence/twitter.png"
                  alt="twitter"
                />
                <img
                  className="px-3"
                  src="./spinfluence/facebook.png"
                  alt="fb"
                />
                <img className="px-3" src="./spinfluence/g+.png" alt="g+" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="mb-3">
                <h5 className="font-semibold text-xl mb-1">Solution</h5>
                <ul className="text-gray-700">
                  <li className="mb-2">
                    <a href="#">Finance Strategy</a>
                  </li>
                  <li className="mb-2">
                    <a href="#">Advertising</a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#">SMM</a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#">SEO</a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#">Google AdWords</a>
                  </li>
                </ul>
              </div>
              <div className="mb-3">
                <h5 className="font-semibold text-xl mb-1">Company</h5>
                <ul className="text-gray-700">
                  <li className="mb-2">
                    <a href="#">8910 University Center Lane</a>
                  </li>
                  <li className="mb-2">
                    <a href="#">Features</a>
                  </li>
                  <li className=" mb-2">
                    <a href="#">Phone 858-490-6910</a>
                  </li>
                  <li className=" mb-2">
                    <a href="#">Fax 858-490-6985</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between py-4 my-4">
            <ul className="flex text-gray-900">
              <li className=" underline">
                <a className="" href="#">
                  About
                </a>
              </li>
              <li className="mx-3 underline">
                <a className="" href="#">
                  Services
                </a>
              </li>
              <li className="mx-3 underline">
                <a className="" href="#">
                  Prices
                </a>
              </li>
              <li className="mx-3  underline">
                <a className="" href="#">
                  Blog
                </a>
              </li>
              <li className=" underline">
                <a className="" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <p>© 2018 Casumi, Made by DeoThemes.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
