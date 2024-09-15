import React from "react";

export default function Influexa() {
  const news = [
    {
      image: "./influexa/news1.png",
      heading: "The Best Fonts for Modern Design",
      content: "A leisurely start as not expected at our next campsite....",
    },
    {
      image: "./influexa/news2.png",
      heading: "Identity Design for a New Crusader",
      content: "There is always one constant about international travel...",
    },
    {
      image: "./influexa/news3.png",
      heading: "The Best Fonts for Modern Design",
      content:
        "Just for once we were trying to forget Covid . We were out for the morning...",
    },
  ];
  const creative = [
    "./influexa/creative1.png",
    "./influexa/creative2.png",
    "./influexa/creative3.png",
  ];
  const workRule = [
    "./influexa/Rectangle 9.png",
    "./influexa/Rectangle 10.png",
    "./influexa/Rectangle 11.png",
    "./influexa/Rectangle 12.png",
  ];
const name=["SEO Analysis","Content Writing","MUSIC, VIDEOS"]
  return (
    <div>
      {/* page 1 */}
      <div className="flex-row-reverse md:flex justify-center relative">
        <div className="absolute flex justify-between w-full p-3">
          <img className="" src="./influexa/influexa.png" alt="page1" />
          <img
            className="w-7 h-6"
            src="./influexa/hamburger.png"
            alt="hamburger"
          />
        </div>

        <div className="">
          <img src="./influexa/page1pic.png" />
        </div>
        <div className="grid place-content-center sm:w-[70%] p-10">
          <h1 className="font-bold mb-3 text-3xl">We Bring</h1>
          <h1 className="text-[#F23802] font-bold mb-3 text-3xl">Customers</h1>
          <p className="">
            Et ullum iisque conclusionemque eam, mel ad erat cum accumsan
            noluisse, nostrum accumsan movet salutandi. Fugit expetenda
            interesset no, probo eloquentiam mei eu.{" "}
          </p>
          <div className="flex mt-5 relative">
            <button className="py-2 px-4 bg-[#F1F1F1] shadow-lg">
              {" "}
              Find Out more
            </button>
            <img
              src="./influexa/arrow.png"
              alt="Arrow"
              className="h-5 absolute top-4 left-28 ml-1"
            />
          </div>
        </div>
      </div>
      {/* page 2 */}
      <div className="bg-[#F5E2D4] grid md:grid-cols-3 lg:grid-cols-5 place-content-center py-3 px-10">
        <div>
          <img src="./influexa/image 5.png" alt="" className="p-2" />
        </div>
        <div>
          <img src="./influexa/image 6.png" alt="" className="p-2" />
        </div>
        <div>
          <img src="./influexa/image 7.png" alt="" className="p-2" />
        </div>
        <div>
          <img src="./influexa/image 8.png" alt="" className="p-2" />
        </div>
        <div>
          <img src="./influexa/image 9.png" alt="" className="p-2" />
        </div>
      </div>
      {/* page 3 */}
      <div className="container px-4 py-5">
        <div className="grid md:grid-cols-2 gap-3 py-5">
          <div className="flex place-content-center p-3">
            <img src="./influexa/page2pic.png" className="" alt="" />
          </div>
          <div className="p-3">
            <div>
              <h1 className="font-bold mb-3 text-3xl">
                Build Your Social
                <span className="text-[#F23802]"> Marketing</span> With Us
              </h1>
              <p className="text-[#939393]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat{" "}
              </p>
              <div className="flex my-2 ">
                <img src="./influexa/doubleArrow.png" alt="" />
                <p className="m-0 font-semibold"> Social Media Marketing</p>
              </div>
              <div className="flex my-2">
                <img src="./influexa/doubleArrow.png" alt="" />
                <p className="m-0 font-semibold">
                  {" "}
                  Growth Business Development
                </p>
              </div>
              <div className="flex my-2">
                <img
                  src="./influexa/doubleArrow.png"
                  alt=""
                  className="size-6"
                />
                <p className="m-0 font-semibold">
                  {" "}
                  Market Research &amp; Content Marketing
                </p>
              </div>
              <button className="bg-[#F23802] text-light py-2 px-4 mt-3 text-white rounded ">
                {" "}
                Find Out more
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* page 4 */}
      <div className="container p-7 grid md:grid-cols-3  gap-5">
        {name.map((item, index) => (
          <div className="mb-4 border-l-2 border-[#F23802]" key={index}>
            <div className="p-2">
              <p className="text-[#657280] font-light">{item}</p>
              <h4 className="font-bold text-xl">Developing Business Managment Skills</h4>
              <p className="text-[#939393]">Alia mucius ex nam, ea facer liber usu, e aliquam platontem est. Ut melo cum comune similique in.</p>
              <div className="flex mt-5 relative">
            <button className="py-2 px-4 shadow-lg">
              {" "}
              Find Out more
            </button>
            <img
              src="./influexa/arrow.png"
              alt="Arrow"
              className="h-5 absolute top-4 left-28 ml-1"
            />
          </div>
            </div>
          </div>
        ))}
      </div>
      {/* page 5 */}
      <div className="py-5">
        <div className="grid md:grid-cols-2 gap-3 py-5   place-items-center">
          <div className="p-16 container">
            <div>
              <h1 className="font-bold mb-3 text-3xl">
                What we can do for your{" "}
                <span className="text-[#F23802]">business</span>
              </h1>
              <p className="text-[#939393]">
                Learn more about the range of our services. Et ullum iisque
                conclusionemque eam, mel ad erat cum accumsan noluisse, nostrum
                accumsan movet salutandi. Fugit expetenda interesset no, probo
                eloquentiam mei eu. Sea id malorum dolor.{" "}
              </p>

              <button className="bg-[#F23802] text-light py-2 px-4 mt-3 text-white rounded ">
                {" "}
                Contact Us{" "}
              </button>
            </div>
          </div>
          <div className="flex place-content-center py-3 pl-3">
            <img src="./influexa/page5pic.png" className="" alt="" />
          </div>
        </div>
      </div>
      {/* page 6 */}
      <div className="py-5 bg-[#F5E2D4]">
        <div className="grid md:grid-cols-2 gap-3 py-5">
          <div className="p-16 container ">
            <h1 className="font-bold mb-3 text-3xl">Talk to our Team.</h1>
            <p className="text-[#939393]">
              Learn more about the range of our services. Et ullum iisque
              conclusionemque eam, mel ad erat
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <button className="bg-[#F23802] text-light py-2 px-5  text-white rounded ">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* page 7 */}
      <div className="">
        <img src="./influexa/page7pic.png" alt="" />
      </div>
      <div className=" container">
        <div className="grid md:grid-cols-2 gap-3 py-5">
          <div className="p-5 ">
            <h1 className="font-bold mb-3 text-3xl">
              The heart of our human centered{" "}
              <span className="text-[#F23802]">design skills </span>
            </h1>

            <p className="text-[#939393]">
              Et ullum iisque conclusionemque eam, mel ad erat cum accumsan ei
              noluisse, nostrum accumsan salutandi eam cu. Fugit expetenda ei
              prim interesset no his, probo mei eu eloquentiam. Sea id saepe
              dolores sed malorum sapientem, copiosae et melnusquam nam an
              abhorreant.
            </p>
          </div>
          <div className="p-5 ">
            <ul className="font-semibold">
              <li>– Project strategy</li>
              <li>– UX research and conceptualization</li>
              <li>-Information architecture (IA)</li>
              <li>– User interface design (UI)</li>
              <li>– Interaction design (IxD)</li>
            </ul>
          </div>
        </div>
      </div>
      {/* page  8 */}
      <div className="container p-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {workRule.map((item, index) => (
          <div className="mb-4 rounded" key={index}>
            <img className="" src={item} alt="" />
            <div className="p-3">
              <p className="text-[#657280] font-light">Business</p>
              <h4 className="font-semibold text-lg">Work rules</h4>
            </div>
          </div>
        ))}
      </div>
      {/* page 9 */}
      <div className="container p-10">
        <div className="grid sm:flex justify-between ">
          <h1 className="font-bold text-3xl pb-5">
            Meet our team of <span className="text-[#E54631]">Creatives</span>
          </h1>
          <p className="text-[#939393] py-5 px-3">
            Et ullum iisque conclusionemque eam, mel ad erat cum accumsan ei
            noluisse, nostrum accumsan salutandi eam cu.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 place-content-around gap-4">
          {creative.map((item, index) => (
            <div className="mb-4 rounded-lg " key={index}>
              <img className="" src={item} alt=""/>
              <div className="p-1 grid grid-cols-3 place-items-center">
                <div className="col-span-2">
                  <h4 className="text-[#304050] font-semibold text-lg">
                    Martin Guptill
                  </h4>

                  <p className="text-[#657280] font-light">
                    Senior at Business
                  </p>
                </div>

                <div className="col-span-1 ">
                  <img src="./influexa/Icon.png" alt="" className="w-100" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* page 10 */}
      <div className="container p-5">
        <div className="flex">
          <img src="./influexa/dash.png" alt="" className="h-0.5 my-3" />
          <p className="text-[#525969] pl-2 ">Testimonial</p>
        </div>
        <h1 className="font-bold text-4xl pb-5">
          Our <span className="text-[#E54631]">Patients</span>
        </h1>
        <div className="grid sm:grid-cols-2 gap-3 place-items-center">
          <div className="">
            <img src="./influexa/page10pic.png" alt="" />
          </div>
          <div className="m-10">
            <p className="font-semibold text-lg py-2">
              Labores placerat salutandi nam ea, id qui eligendi ex adipiscing
              sei disputationi. Iuvaret constituam id his, epicuri evertitur quo
              in, sint{" "}
            </p>
            <p className="font-semibold text-base pt-5">Joe Root</p>
            <p className="text-[#525969] font-light pb-5">Happy Patient</p>
            <img src="./influexa/pic123.png" alt="" />
          </div>
        </div>
      </div>
      {/* page 11 */}
      <div className="container p-10">
        <div className="flex">
          <img src="./influexa/dash.png" alt="" className="h-0.5 my-3" />
          <p className="text-[#525969] pl-2 ">Our Blog</p>
        </div>
        <h1 className="font-bold text-4xl pb-5">
          Check <span className="text-[#E54631]">the News</span>
        </h1>
        <div className="grid sm:grid-cols-3 place-content-around gap-4">
          {news.map((item, index) => (
            <div className="mb-4 rounded-lg " key={index}>
              <img className="" src={item.image} alt="" />
              <div className="p-3">
                <h4 className="underline text-[#304050] font-semibold text-lg">
                  {item.heading}
                </h4>
                <p className="text-[#657280] font-light text-sm">
                  By <span className="text-[#304050] font-semibold">Admin</span>{" "}
                  - January 25, 2021
                </p>
                <p className="text-[#657280] font-light">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* page 12 */}
      <div className="  text-white bg-black p-10 ">
        <div className="grid grid-cols-2 lg:grid-cols-4  gap-5 place-items-center">
          <div className="">
            <h5 className="font-bold pb-5">Company</h5>
            <ul className="grid gap-2 text-sm">
              <li className="">
                <a href="#" className="">
                  About
                </a>
              </li>
              <li className="">
                <a href="#" className="">
                  Features
                </a>
              </li>
              <li className="">
                <a href="#" className="">
                  Works
                </a>
              </li>
              <li className="">
                <a href="#" className="">
                  Career
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <h5 className="font-bold pb-5">Help</h5>
            <ul className="grid gap-2 text-sm">
              <li className="">
                <a href="#" className="">
                  Customer Support
                </a>
              </li>
              <li className="">
                <a href="#" className="">
                  Delivery Details
                </a>
              </li>
              <li className="">
                <a href="#" className="">
                  Terms & Conditions
                </a>
              </li>
              <li className="">
                <a href="#" className="">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <h5 className="font-bold pb-5">Resources</h5>
            <ul className="grid gap-2 text-sm">
              <li className="">
                <a href="#" className="">
                  Free eBooks
                </a>
              </li>
              <li className="">
                <a href="#" className="">
                  Development Tutoria
                </a>
              </li>
              <li className="">
                <a href="#" className="">
                  How to - Blog
                </a>
              </li>
              <li className="">
                <a href="#" className="">
                  Youtube Playlist
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <h5 className="font-bold pb-5">Links</h5>
            <ul className="grid gap-2 text-sm">
              <li className="">
                <a href="#" className="">
                  Free eBooks
                </a>
              </li>
              <li className="">
                <a href="#" className="">
                  Development Tutoria
                </a>
              </li>
              <li className="">
                <a href="#" className="">
                  How to - Blog
                </a>
              </li>
              <li className="">
                <a href="#" className="">
                  Youtube Playlist
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid sm:flex justify-between py-10 my-5">
          <div>
            <p>© 2023 Company, Inc. All rights reserved.</p>
          </div>
          <div>
            <ul className="flex ">
              <li className="">
                <a className="underline" href="#">
                  Privacy Policy
                </a>
              </li>
              <li className="">
                <a className="underline" href="#">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
