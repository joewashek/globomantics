import HouseRow, { HouseRecord } from "./HouseRow"
import useHouses from "../hooks/useHouses"
import loadingStatus from "../helpers/loadingStatus"
import LoadingIndicator from "./loadingIndicator"

type HouseListProps = {
  selectHouse: (house:HouseRecord)=> void
}

const HouseList = ({selectHouse}:HouseListProps) => {
  console.log('houselist comp rendered')

  const {houses,setHouses,loadingState} = useHouses();

  if(loadingState !== loadingStatus.loaded)
    return <LoadingIndicator loadingState={loadingState} />

  const addHouse = () =>{
    console.log('addHouse Clicked')
    setHouses([
      ...houses,
      {
        id:3,
        address: "1234 1st Forks, zern",
        country: "USA",
        price: 600000
      }
    ])
  }

  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">

        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Address</th>
            <th>Country</th>
            <th>Asking Price</th>
          </tr>
        </thead>
        <tbody>
          {
            houses.map(h => 
              (
                <HouseRow key={h.id} house={h} selectHouse={selectHouse} />
              ) 
            )
          }
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={addHouse}>
        Add
      </button>
    </>
  )
}

export default HouseList