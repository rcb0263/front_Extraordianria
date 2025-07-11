import { Personaje } from "../types.ts";

type Props={
    personaje: Personaje
}

export default function Character(pers:Props){
        console.log(pers.personaje)
    return(
        <div>
            <a href="/" class="back-link" data-ancestor="true" aria-current="true">Volver</a>
            <div class="character-detail">
                <img src={pers.personaje.image} width="200"></img>
                <div class="character-info">
                    <h1 class="tittle">{pers.personaje.name}</h1>
                    <ul>
                        <li>
                            <strong>Status:</strong>
                            {pers.personaje.status}
                        </li>
                        <li>
                            <strong>Species:</strong>
                            {pers.personaje.species}
                        </li>
                        <li>
                            <strong>Gender:</strong>
                            {pers.personaje.gender}
                        </li>
                        <li>
                            <strong>Origin:</strong>
                            {pers.personaje.origin.name}
                        </li>
                        <li>
                            <strong>Location:</strong>
                            {pers.personaje.location.name}
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}