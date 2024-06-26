import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useRestaurantDetails = () => {
  const [data, setdata] = useState("");

  useEffect(() => {
    fetchdata();
  }, []);

  const { resId } = useParams();

  ////(resId);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.89960&lng=80.22090&restaurantId=" +
      resId +
      "&catalog_qa=undefined&submitAction=ENTER"
    );
    const jsondata = await data.json();
    setdata(jsondata);
    ////(jsondata?.data?.cards.length);
  };

  return data;
};
