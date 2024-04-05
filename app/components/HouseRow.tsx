import { useContext } from "react"
import currencyFormatter from "../helpers/currencyFormatter"
import { navigationContext } from "../page"
import navValues from "../helpers/navValues"

export type HouseRecord = {
  id:number,
  address: string,
  country: string,
  price: number,
  description?: string,
  photo?: string
}

export type HouseRowProps = {
  house:HouseRecord
}

const HouseRow = ({house}: HouseRowProps) => {
  const {navigate} = useContext(navigationContext);

  return (
    <tr onClick={() => navigate(navValues.house, house)}>
      <td>{house.address}</td>
      <td>{house.country}</td>
      {house.price && (
        <td className={`${house.price >= 500000 ? "text-primary" : ""}`}>{currencyFormatter.format(house.price)}</td>
      )}
      
    </tr>
  )
}

export default HouseRow