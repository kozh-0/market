import { useEffect, useState } from "react"
import CardList from "./CardList";
import Prealoader from "./Help/Prealoader";

export default function Products() {

  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => setData(data));

    return () => setData([]);
  }, [])
  
  return (
    <div className="content">

      <div className=" container">
        {data.length ? <CardList data={data}/> : <Prealoader/>}
      </div>
    </div>
  )
}
