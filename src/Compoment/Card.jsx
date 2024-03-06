import {useState} from "react";
import "remixicon/fonts/remixicon.css";

function Card({
  movieName,
  year,
  director,
  time,
  action,
  disc,
  poster,
  image,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      className="w-[70%]  lg:h-80  sm:h-4/6 rounded-lg mt-9 "
      style={{
        // boxShadow:
        // "box-shadow: rgba(211, 17, 17, 0.24) 0px 0px 20px",
        boxShadow: isHovered
        ? "-5px -20px 60px -25px rgba(255, 0, 0, 0.8), 10px 0px 40px -20px rgba(255, 0, 0, 0.8), 10px 25px 40px -20px rgba(255, 0, 0, 0.8), -10px 10px 40px -15px rgba(255, 0, 0, 0.8)"
        : "-5px -20px 40px -25px rgba(255, 0, 0, 0.5), 10px 0px 30px -20px rgba(255, 0, 0, 0.5), 10px 25px 30px -20px rgba(255, 0, 0, 0.5), -10px 10px 30px -15px rgba(255, 0, 0, 0.5)",
      transition: "box-shadow 0.3s ease"

      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-screen-lg mx-auto  w-full  h-full  ">
        <div
          className="flex justify-evenly rounded-lg w-full  h-full "
          style={{
            backgroundImage: `linear-gradient(to right, black 50%, transparent),
         url(${image})`,
            width: "100%",
            height: "100%",
            backgroundSize: "contain",
           
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-3/6">
            <div className="flex  m-8">
              <div className="">
                <img className="h-32" src={poster} width="100px" alt="" />
              </div>
              <div className="ml-4">
                <h1 className="text-4xl font-semibold text-white">
                  {movieName}
                </h1>
                <p className="mt-1 text-blue-600 ">
                  {year}, {director}
                </p>
                <div className="flex gap-2">
                  <p className="border lg:px-2  rounded-md text-white">
                    {time}
                  </p>
                  <p className="text-white">{action}</p>
                </div>
              </div>
            </div>
            <div className="my-2 mx-4">
              <p className="mt-2 text-white">{disc}</p>
            </div>
            <div className="ml-5 flex gap-4">
              <i className="ri-share-fill text-white"></i>
              <i className="ri-heart-fill text-white"></i>
              <i className="ri-chat-4-fill text-white"></i>
            </div>
          </div>
          <div className="w-3/6"></div>
        </div>
      </div>
    </div>
  );
}

export default Card;
