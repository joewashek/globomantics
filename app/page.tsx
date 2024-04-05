'use client'

import { useState } from "react";
import HouseList from "./components/HouseList";
import Banner from "./components/banner";
import House from "./components/house";
import { HouseRecord } from "./components/HouseRow";

export default function Home() {
  const [selectedHouse,setSelectedHouse] = useState<HouseRecord>();

  const selectHouse = (house:HouseRecord) : void =>{
    setSelectedHouse(house);
  }

  return (
    <>
      <Banner headerText="Providing houses all over the world" />
      {
        selectedHouse 
        ? <House house={selectedHouse}/>
        : <HouseList selectHouse={selectHouse}/>
      }
    </>
  );
}
