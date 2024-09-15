import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const array = [
    { name: "Tailor", link: "/tailor", image: "./tailor/tailor1.png" },
    { name: "CarZone", link: "/carzone", image: "./carzone/carzone2.png" },
    { name: "Influexa", link: "/influexa", image: "./influexa/Influenxa3.png" },
    { name: "Mosto", link: "/mosto", image: "./mosto/mosto4.png" },
    {
      name: "SpinFulence",
      link: "/spinfluence",
      image: "./spinfluence/spinflunce5.png",
    },
  ];
  return (
    <div class="p-10">
      <h1 class="text-center font-bold text-5xl">Basic Websites</h1>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
        {array.map((item, index) => (
          <div class="bg-white rounded-lg shadow-lg">
            <div class="h-[60%]">
              <img src={item.image} alt="" class="rounded-lg" />
            </div>
            <div class="p-6 ">
              <h2 class="text-2xl font-bold text-gray-800 mb-4">{item.name}</h2>

              <div
                onClick={() => navigate(item.link)}
                class="block text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 col-span-1"
              >
                Visit
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
