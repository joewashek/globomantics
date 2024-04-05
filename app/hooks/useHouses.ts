import { useEffect, useState } from "react";
import { HouseRecord } from "../components/HouseRow";
import useGetRequest from "./useGetRequest";

const useHouses = () => {
  const [houses,setHouses] =  useState<HouseRecord[]>([]);
  const { get, loadingState } = useGetRequest("/api/houses");

  useEffect(()=>{
    console.log('useHouses fetching houses')
    const fetchHouses = async () => {
      const houses = await get();
      setHouses(houses);
    }
    fetchHouses();
  },[get]);

  return { houses, setHouses,loadingState };
}

export default useHouses;