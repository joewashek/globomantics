import navValues from "../helpers/navValues";
import HouseList from "./HouseList";
import House from "./house";

export type ComponentPickerProps = {
  currentNavLocation: string
}

const ComponentPicker = ({currentNavLocation}:ComponentPickerProps) => {
  switch(currentNavLocation){
    case navValues.home:
      return <HouseList />;
    case navValues.house:
      return <House />;
    default:
      return (
        <h3>
          No component for navigation value {currentNavLocation} found
        </h3>
      )
  }
}

export default ComponentPicker;