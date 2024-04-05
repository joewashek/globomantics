'use client'

import { useCallback, useState } from "react";
import HouseList from "./components/HouseList";
import Banner from "./components/banner";
import House from "./components/house";
import { HouseRecord } from "./components/HouseRow";
import navValues,{NavState} from "./helpers/navValues";
import React from "react";
import ComponentPicker from "./components/ComponentPicker";

const navigationContext = React.createContext<NavState>({current: navValues.home, navigate(navTo) {
  throw Error("Navigation not created yet")
},});

const Home = () => {

  const navigate = useCallback(
    (navTo:string,param:any): void => setNav({current: navTo, navigate,param})
    ,[]);

  const [nav,setNav] = useState({current: navValues.home,navigate,param: undefined});

  return (
    <navigationContext.Provider value={nav}>
      <Banner headerText="Providing houses all over the world" />
      <ComponentPicker currentNavLocation={nav.current} />
    </navigationContext.Provider>
  );
}

export { navigationContext}
export default Home;