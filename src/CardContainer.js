import React from "react"
import Card from "./Card"

export default function CardContainer(props) {
    return(
        <div>
            {
                props.cards.map((card) => {
                    return(
                        <Card card={card}/>
                    )
                })
            }
        </div>
    )
}