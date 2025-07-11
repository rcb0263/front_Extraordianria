import Card from "./Card.tsx";
import { Personaje } from "../types.ts";
import Character from "./Character.tsx";

type Props={
    personajes: Personaje[]
}

export default function Lista(pers:Props)  {
    return(
        <div class="characters">
            {pers.personajes.map(r=> <li><Card personaje={r}/></li>)}
        </div>

    )
}