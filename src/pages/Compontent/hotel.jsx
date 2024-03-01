import Image from "next/image";
import Link from "next/link";

const hotel = () => {
  return (
    <div className=" w-full h-75 border border-red-400  mt-5 rounded-l ">
      <div className="flex">
        <Image
          src={"/hotel image.avif"}
          width={200}
          height={200}
          alt="hotelimg1"
          className="w-60 h-large-box px-5 pt-3 pb-3"
        />
        <div className=" grid grid-rows-3 my-3 pb-2">
          <Image
            src={"/hotel image.avif"}
            width={200}
            height={200}
            alt="hotelimg2"
            className="w-20  "
          />
          <Image
            src={"/hotel image.avif"}
            width={200}
            height={200}
            alt="hotelimg3"
            className="w-20  "
          />
          <Image
            src={"/hotel image.avif"}
            width={200}
            height={200}
            alt="hotelimg4"
            className="w-20  "
          />
          <Image
            src={"/hotel image.avif"}
            width={200}
            height={200}
            alt="hotelimg5"
            className="w-20  "
          />
        </div>
        <div className="mx-10">
          <h2 className="font-bold line-clamp-1 text-3xl pt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis,
            omnis!
          </h2>
          <p className="mt-5 text-justify text-xl ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
            veritatis eligendi odit, reiciendis corrupti vero sequi nihil
            architecto amet, vel deleniti similique. Earum, numquam sint eveniet
            consequatur minima at necessitatibus.
          </p>
          <p className="text-2xl my-5">
            <span className="font-bold ">Facilities :</span>
            <span className="px-2">
              Free wifi , Pet Care , GYM , Swimming Pool.{" "}
            </span>
          </p>
          <button
            type="text"
            className="w-70 h-10 text-center border bg-green-500 text-white font-bold rounded-lg hover:cursor-pointer">
            Book Now
          </button>
          <Link
            href={"/hotels/2"}
            className="text-xl font-bold text-red-600 ml-10">
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default hotel;
