import React from "react"
import Card from "./Card"

export default function CardContainer(props) {
    return(
        <div className="cardContainer-section">
            {
                props.cards.map((card) => {
                    return(
                        <Card key={card.id}
                            card={card}/>
                    )
                })
            }
        </div>
    )
}