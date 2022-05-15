import { useEffect, useState } from "react"
import CardList from "./CardList";

export default function Main() {

  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => setData(data));

  }, [])
  
  return (
      <CardList data={data}/>
  )
}
