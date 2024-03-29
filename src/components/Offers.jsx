import { Link } from "react-router-dom";
import useScrollRestaurant from "../Hooks/useScrollRestaurant";
import { withofferlabel } from "./Restaurantmainmenucart";
import { Restaurantmainmenucart } from "./Restaurantmainmenucart";
import { Shimmercards } from "./Shimmercards";
import { Footer } from "./Footer";

const Offers = () => {
  const Restaurantoffercart = withofferlabel(Restaurantmainmenucart);

  const { data } = useScrollRestaurant();
  const mapdata = data[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  return (
    <div className="mx-1 my-40">
      <div className="text-center">
        <h1 className=" font-bold text-gray-800 text-6xl my-8 max-sm:text-4xl">
          Offer Carts
        </h1>
      </div>
      <div className=" inline-flex justify-center flex-wrap">
        {mapdata === undefined ? (
          <Shimmercards />
        ) : (
          mapdata.map((item) => {
            return (
              <Link key={item?.info?.id} to={"/offers/" + item?.info?.id}>
                <div>
                  {item?.info?.aggregatedDiscountInfoV2 === undefined && (
                    <Restaurantoffercart data={item} />
                  )}
                </div>
              </Link>
            );
          })
        )}
      </div>

    </div>
  );
};

export default Offers;
