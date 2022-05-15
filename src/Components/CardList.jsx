import CardItem from "./CardItem";

export default function CardList({data}) {
    
    return(
        <section className="card-list">
            {data.map(item => (
                <CardItem key={item.id} {...item}/>
            ))}
        </section>
    )
}