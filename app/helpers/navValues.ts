import { HouseRecord } from "../components/HouseRow";

export type NavState = {
  current: string
  navigate: (navTo:string,house?: HouseRecord)=>void
  param?: any
}

const navValues = {
  home: "Home",
  house: "House"
};

export default navValues;