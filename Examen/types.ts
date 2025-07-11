import {Signal} from "@preact/signals"

export type Personaje ={
    id: number,
    name: string,
    status: string,
    gender: string,
    origin: {name: string},
    location: {name: string},
    image: string,
    species: string
}
export const señal = new Signal<string>("")