import currencyFormatter from "../helpers/currencyFormatter"

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
  selectHouse: (house:HouseRecord)=> void
}

const HouseRow = ({house,selectHouse}: HouseRowProps) => {
  return (
    <tr onClick={() => selectHouse(house)}>
      <td>{house.address}</td>
      <td>{house.country}</td>
      {house.price && (
        <td className={`${house.price >= 500000 ? "text-primary" : ""}`}>{currencyFormatter.format(house.price)}</td>
      )}
      
    </tr>
  )
}

export default HouseRow