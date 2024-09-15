import React from "react";

function Tailor() {
  return (
    <div className="max-w-7xl m-auto">
      {/* navbar       */}
      <div id="nav" className="flex m-5 justify-evenly">
        <div>
          <img src="./tailor/tailor.png" alt="Tailor" />
        </div>
        <div className="hidden sm:flex justify-evenly font-semibold ">
          <div className="mx-5 text-[#FF5324]">
            <a href="#">Home</a>
          </div>
          <div className="mx-5">
            <a href="#">Protfolio</a>
          </div>
          <div className="mx-5">
            <a href="#">Blog</a>
          </div>
          <div className="mx-5">
            <a href="#">Pages</a>
          </div>
        </div>
        <div className="flex justify-evenly gap-10">
          <div>
            <img src="./tailor/search.png" alt="Search" className="size-5" />
          </div>
          <div>
            <img
              src="./tailor/hamburger.png"
              alt="Hamburger"
              className="size-5 "
            />
          </div>
        </div>
      </div>
      {/* page 1 */}
      <div className="container grid sm:grid-cols-3 gap-4 bg-cover bg-no-repeat bg-scroll p-5 place-items-center" style={{backgroundImage:'url("./tailor/sidedesign.png")'}}>
       
        <div className="my-5">
          <h1 className="text-3xl font-bold p-1">
            <span className="text-[#FF5324]">Bigger, </span>Bolder & Better
          </h1>
          <p className="text-[xs] font-semibold border-l-2 border-zinc-500 p-1">
            Connect Otter to your Google or Microsoft calendar and it can
            automatically join and record
          </p>
        </div>
        <div>
          <img src="./tailor/pic1.png" alt="Pic1" className=" h-[80%] w-full" />
        </div>
        <div className="mt-3">
          <img src="./tailor/pic2.png" alt="Pic2" className="h-[60%] w-full" />
          <p className="text-[xs] py-2 px-3 font-semibold">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration{" "}
          </p>
        </div>
      </div>
      {/* page 2 */}
      <div className="container p-5">
        <div className="flex">
          <div>
            <h1 className="text-[#FF5324] text-3xl font-bold">
              Creative Design
            
            <span className=" text-black"> & Advertising</span></h1>
            <p className="text-[xs] font-semibold my-3">
              At pulvinar egestas ornare ac hendrerit ante Orci sit nisl
              ultricies enim pellentesque Tristique donec et amet nunc Quis
              bibendum aenean odio malesuada pellentesque semper turpis Faucibus
              sociis porttitor sed pellentesque faucibus dapibus luctus sed.
            </p>
          </div>
          <div className="place-content-end">
            <img src="./tailor/sideimage2.png" alt="" />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          <div>
            <img src="./tailor/pic3.png" alt="" className="p-2" />
          </div>
          <div>
            <img src="./tailor/pic4.png" alt="" className="p-2 mt-5" />
          </div>
        </div>
      </div>
      <div className="container bg-[#F55529]  text-white p-2 sm:text-xl grid sm:grid-cols-3 gap-5 text-bold place-items-center shadow-xl shadow-black">
        <div className="">
          2560 :Happy Clients in 25 Years
        </div>
        <div className="">
          7650 : Projects Completed Onthe
        </div>
        <div className="">
          Call Usdirectly:(88) 325 3264 33
        </div>
      </div>
      {/* page 3 */}
      <div className="container p-3 mt-10">
        <div className="grid sm:grid-cols-2 gap-3 p-2">
          <div className="">
            <h1 className="font-bold  underline text-3xl text-center">
              <span className=" text-[#F55529]
              underline">Latest</span> Works
            </h1>
          </div>
          <div className="">
            <p className="text-lg">
              At pulvinar egestas ornare ac hendrerit ante Orci sit nisl
              ultricies enim pellentesque Tristique donec et amet nunc Quis{" "}
            </p>
            <img src="./tailor/design.png" alt="Design" className="size-10" />
          </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-4 ">
          <div>
            <img src="./tailor/Rectangle1.png" alt="Rectangl1" className="" />
            <p className="text-center">(01) Landing page</p>
          </div>
          <div>
            <img src="./tailor/Rectangle2.png" alt="Rectangl2" className="" />
            <p className="text-center">(02) Landing page</p>
          </div>
          <div>
            <img src="./tailor/Rectangle3.png" alt="Rectangl3" className="" />
            <p className="text-center">(03) landing page</p>
          </div>
        </div>
      </div>
      {/* page 4 */}
      <img src="./tailor/design2.png" alt="" className="" />
      <div className="container grid sm:grid-cols-2 gap-10 p-7 place-items-center">
        <div className="">
          <h1 className="underline text-4xl font-bold">
            <span className="text-[#F55529] underline">
              Create an amazing website{" "}
            </span>
            that your visitors will love
          </h1>
          <p className="mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
        </div>
        <div>
          <img src="./tailor/pic12.png" alt="" className="h-[70%]" />
        </div>
      </div>
      {/* page 5 */}
      <div
        style={{ backgroundImage: 'url("./tailor/background.png")' }}
        className="flex flex-col justify-center items-center text-white bg-cover p-10"
      >
        <div className="m-10 text-center">
          <h1 className="text-5xl font-bold">
            Build authority, gain exposure and connect with your audience
          </h1>

          <p className="text-xl mt-3 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros
          </p>
        </div>
      </div>
      {/* page 6 */}
      <div className="container p-10 border-b-2 border-slate-600 grid sm:grid-cols-2 gap-10 place-items-center">
        <h1 className="underline font-bold text-3xl">Our Awards</h1>
        <div className="flex">
          
          <div className="grid grid-cols-3 gap-3">
            <div className="p-2 col-span-2">
              <h1 className="font-bold">Websites Of The Year 2020</h1>
              <p className=" text-slate-600 font-semibold">
                Lewis Studio
              </p>
            </div>
            <div>
              <p className=" text-slate-600 font-semibold mt-6 ml-3">
                See Project
              </p>
            </div>
            <div className="p-2 col-span-2">
              <h1 className="font-bold">Websites Of The Year 2020</h1>
              <p className=" text-slate-600 font-semibold ">
                Lewis Studio
              </p>
            </div>
            <div>
              <p className=" text-slate-600 font-semibold  mt-6 ml-3">
                See Project
              </p>
            </div>

            <div className="p-2 col-span-2">
              <h1 className="font-bold">Websites Of The Year 2020</h1>
              <p className=" text-slate-600 font-semibold">
                Lewis Studio
              </p>
            </div>
            <div>
              <p className=" text-slate-600 font-semibold  mt-6 ml-3">
                See Project
              </p>
            </div>

            <div className="p-2 col-span-2">
              <h1 className="font-bold">Websites Of The Year 2020</h1>
              <p className=" text-slate-600 font-semibold">
                Lewis Studio
              </p>
            </div>
            <div>
              <p className=" text-slate-600 font-semibold  mt-6 ml-3">
                See Project
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* page 7  */}
      <div className="bg-[#F9F6F4] grid sm:grid-cols-3 gap-3 mt-10 p-7 place-items-center">
        <div className="p-3">
          <h1 className="underline text-3xl font-bold">
              Boost Your Business Up To High Level
          </h1>
          <p className="font-bold text-lg">
            Start by <span className="text-[#F55529]"> Saying Hi </span>
          </p>
        </div>
        
        <div className="font-bold"> 
          <h1 className="underline text-xl">Links</h1>
          <p>Faqs</p>
          <p>About Us</p>
          <p>Privacy Policy help</p>
          <p>Affiliate Services</p>
        </div>
        <div className="font-bold">
          <h1 className="underline text-xl">Contact</h1>
          <p>Info@agence.com</p>
          <p>Phone: 345 655685</p>
          <p>facebook.agence </p>
        </div>
      </div>
    </div>
  );
}

export default Tailor;
