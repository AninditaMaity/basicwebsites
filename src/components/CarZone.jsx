import React from "react";

export default function CarZone() {
  const car = [
    {
      image: "./carzone/car1.png",
      heading: "Online Vehicle Rental Booking",
    },
    {
      image: "./carzone/car2.png",
      heading: "Professional Technician Services",
    },
    {
      image: "./carzone/car3.png",
      heading: "Full Auto Servicing Facility",
    },
  ];
  const image = [
    "./carzone/image 31.png",
    "/carzone/image 33.png",
    "/carzone/image 34.png",
  ];
  return (
    <div>
      {/* page 1 */}
      <div
        className=" bg-cover bg-no-repeat "
        style={{ backgroundImage: 'url("./carzone/page1background.png")' }}
      >
        <div className="container flex justify-around pt-3">
          <div>
            <img src="./carzone/logo.png" alt="" className="h-full" />
          </div>
          <div>
            <ul className="hidden md:flex justify-evenly text-lg ">
              <li className="p-3">
                <a href="#">HOME</a>
              </li>
              <li className="p-3">
                <a href="#">NEW</a>
              </li>
              <li className="p-3">
                <a href="#">USED</a>
              </li>
              <li className="p-3">
                <a href="#">CAR DETAILS</a>
              </li>
              <li className="p-3">
                <a href="#">PAGES</a>
              </li>
            </ul>
          </div>
          <div className="flex justify-between">
            <img src="./carzone/notification.png" alt="" className="p-2" />
            <div className="p-3">
              <button className="rounded-lg border border-zinc-950 bg-white p-1 px-3">
                Login
              </button>
            </div>
          </div>
        </div>
        <div className="m-5">
          <div className="grid sm:grid-cols-2 place-items-center">
            <div>
              <h1 className="text-3xl sm:text-6xl font-bold">Best In Auto</h1>
              <h1 className="text-3xl sm:text-6xl font-bold pl-3">
                Rental & Service
              </h1>
            </div>
            <div>
              <img src="/carzone/page1pic1.png" alt="" className="p-3" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 place-items-center">
            <div className="sm:relative -bottom-24">
              <img src="/carzone/page1pic2.png" alt="" className="p-3 " />
            </div>
            <div className="">
              <p className="text-lg p-3">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* page 2 */}
      <div className="bg-[#FC621C] text-white p-10 ">
        <div className="grid  place-items-center pt-16">
          <h1 className="text-3xl sm:text-5xl">Why Choose Us ?</h1>
          <p className="sm:px-16 py-5">
            Delectus, nesciunt imperdiet dolor litora orci? Tristique per natus.
            Saepe convallis, nostra. Ducimus convallis necessitatibus alias
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-4 ">
          {car.map((item, index) => (
            <div className="my-3 shadow-lg ">
              <img src={item.image} alt="" />
              <div className="p-2">
                <h1 className="font-bold text-xl pt-2">{item.heading}</h1>
                <p className="font-light text-sm py-2">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* page 3 */}
      <div
        className=" bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url("./carzone/page3background.png")' }}
      >
        <div className="grid md:grid-cols-2 ">
          <div className="m-5 p-5">
            <h1 className="text-center font-bold text-3xl sm:text-5xl">
              Book And Rent A Car
            </h1>

            <p>
              Delectus, nesciunt imperdiet dolor litora orci? Tristique per
              natus. Saepe convallis, nostra. Ducimus convallis necessitatibus
              alias, bibendum elit nemo.
            </p>

            <div class="grid gap-4 md:flex my-3 md:justify-start">
              <input
                type="text"
                placeholder=" Your Name.."
                className="border rounded p-1 bg-[#F9F9F9]"
              />

              <input
                type="text"
                placeholder="Your Email.."
                className="border rounded p-1 bg-[#F9F9F9]"
              />
            </div>
            <div class="grid gap-4 md:flex my-3 md:justify-start">
              <input
                type="text"
                placeholder="phone Number.."
                className="border rounded p-1 bg-[#F9F9F9]"
              />

              {/* <button
                class="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                fdprocessedid="5qqq"
              >
                Toyota
              </button>
              {/* <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                <li>
                                    <hr class="dropdown-divider"/>
                                </li>
                                <li><a class="dropdown-item" href="#">Separated link</a></li>
                            </ul> */}
              {/* <input type="text" /> */}
            </div>
            <div class="grid gap-4 my-3 md:flex md:justify-start">
              <input
                type="text"
                placeholder="Pick Up date.."
                className="border rounded p-1 bg-[#F9F9F9]"
              />

              <input
                type="text"
                placeholder="Drop Off date.."
                className="border rounded p-1 bg-[#F9F9F9]"
              />
            </div>
            <div className="flex justify-center items-center mt-10">
              <button class="bg-[#FC621C] border rounded py-1 px-3 text-white">
                Inquery Now
              </button>
            </div>
          </div>

          <div className="">
            <img src="./carzone/page3pic.png" alt="" className="w-full" />
          </div>
        </div>
      </div>
      {/* page 4 */}
      <div
        className="my-10 bg-cover bg-no-repeat "
        style={{ backgroundImage: 'url("./carzone/page4background.png")' }}
      >
        <h1 className="text-3xl font-bold text-center">
          Comfortable Car For Hire !
        </h1>
        <p className="font-light text-center p-3">
          Delectus, nesciunt imperdiet dolor litora orci? Tristique per natus.
          Saepe convallis, nostra. Ducimus convallis necessitatibus alias,
          bibendum elit nemo.
        </p>
        <div className="grid md:grid-cols-3 gap-5 py-5">
          <div>
            <img src="./carzone/page4pic1.png" alt="" className="h-full" />
          </div>
          <div className="">
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem .
            </p>
            <p className="mt-3">
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything embarrassing hidden in the middle of
              text.{" "}
            </p>
          </div>
          <div>
            <img src="./carzone/page4pic2.png" alt="" className="h-full" />
          </div>
        </div>
      </div>
      {/* page 5 */}
      <div className="bg-[#FC621C] pt-3 ">
        <div className="grid sm:grid-cols-2 gap-10 place-items-center text-white mx-10 p-5">
          <h1 className="text-3xl font-bold text-center">
            Comfortable Car For Hire !
          </h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </p>
        </div>
        <img
          src="./carzone/page5pic.png"
          alt=""
          className="sm:relative -bottom-32"
        />
      </div>
      {/* page 6 */}
      <div
        className=" bg-cover bg-no-repeat p-10"
        style={{ backgroundImage: 'url("./carzone/page6background.png")' }}
      >
        <div className="grid  place-items-center pt-16 text-center">
          <h1 className="text-3xl sm:text-5xl">Our Faithful Staff</h1>
          <p className="sm:px-16 py-5">
            Delectus, nesciunt imperdiet dolor litora orci? Tristique per natus.
            Saepe convallis, nostra. Ducimus convallis necessitatibus alias,
            bibendum elit nemo.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-4 ">
          {image.map((item, index) => (
            <div className="my-3 shadow-lg " key={index}>
              <img src={item} alt="" />
              <div className="p-2">
                <h1 className="font-bold text-xl pt-2">William Scott -</h1>
                <p className="text-sm py-2">Rental Agent</p>
                <div className="flex">
                  <img src="./carzone/phn.png" alt="" className="size-4" />
                  <p className="font-light text-sm px-2">(+89)652 555 320</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* page 7 */}
      <div
        className=" bg-cover bg-no-repeat p-10"
        style={{ backgroundImage: 'url("./carzone/page7background.png")' }}
      >
        <div className="grid sm:flex">
          <h1 className="font-bold text-xl pt-2">
            {" "}
            Read the best review from our users
          </h1>
          <p className="text-sm py-8">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised
          </p>
        </div>
      </div>
      {/* page 8 */}
      <div className="bg-[#150A05] text-white px-10">
        <div className="grid sm:flex justify-between place-items-center p-16 border-b-2">
          <h1 className="font-bold text-2xl py-5"> Welcame car zone </h1>
          <div>
            <button className="rounded-full bg-[#FC621C] px-3 py-1">
              View Car
            </button>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-5 place-items-center p-2">
          <div className="col-span-1">
            <img src="./carzone/logo.png" alt="" />
            <p className="text-light">
              Eiusmod condimentum totam, ultrices, quis elem entum, dui.
            </p>
          </div>
          <div className="col-span-2 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div>
              <h5 className="font-bold pb-5">ABOUT US</h5>
              <ul className="grid gap-2 text-sm">
                <li className="">
                  <a href="#" className="">
                    Home
                  </a>
                </li>
                <li className="">
                  <a href="#" className="">
                    About
                  </a>
                </li>
                <li className="">
                  <a href="#" className="">
                    Car
                  </a>
                </li>
                <li className="">
                  <a href="#" className="">
                    Team
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold pb-5">COMPANY</h5>
              <ul className="grid gap-2 text-sm">
                <li className="">
                  <a href="#" className="">
                    Core values
                  </a>
                </li>
                <li className="">
                  <a href="#" className="">
                    Partner w/ us
                  </a>
                </li>
                <li className="">
                  <a href="#" className="">
                    Blog
                  </a>
                </li>
                <li className="">
                  <a href="#" className="">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold pb-5">SUPPORT</h5>
              <ul className="grid gap-2 text-sm">
                <li className="">
                  <a href="#" className="">
                    Support center
                  </a>
                </li>
                <li className="">
                  <a href="#" className="">
                    Feedback
                  </a>
                </li>
                <li className="">
                  <a href="#" className="">
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold pb-5">GET IN TOUCH</h5>
              <div className="grid gap-3">
                <input
                  type="text"
                  placeholder=" Your email here..."
                  className="rounded-full py-1 bg-[#c18468]"
                />
                <div>
                <button className="rounded-full px-3 py-1 bg-[#FC621C]">
                  Get Acess
                </button>
              </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
