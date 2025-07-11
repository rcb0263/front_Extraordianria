import { Personaje } from "../types.ts";

type Props={
    personaje: Personaje
}

export default function Card({personaje}:Props){
    return(
            <a href={`/character/${personaje.id}`} class="character-card">
                <img src={personaje.image} alt={personaje.name} class="image"></img>
                <p>{personaje.name}</p>
            </a>
    )
}