import React from "react"
import Card from "./Card"

export default function CardContainer(props) {
    return(
        <div className="cardContainer-section">
            {
                props.cards.filter(((card) =>
                    card.title.includes(props.searchInput) || card.body.includes(props.searchInput)
                )).map((card) => {
                    return(
                        <Card key={card.id}
                            card={card}
                            cards={props.cards}
                            updateUserCards={props.updateUserCards}/>
                    )
                })
            }
        </div>
    )
}