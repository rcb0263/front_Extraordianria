import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import List from "../components/List.tsx";
import { Personaje, señal } from "../types.ts";
import axios from "axios"

export const handler:Handlers = {
  GET: async (_req: Request, ctx: FreshContext) =>{
    const url = 'https://rickandmortyapi.com/api/character'
    const results = await axios.get(url)
    const personajes:Personaje[] = results.data.results
    if(señal.value.length>0){
      const newpersonajes = personajes.filter(r=> r.name.includes(señal.value) )
      return ctx.render(newpersonajes);
    }
    return ctx.render(personajes);
  }
};

const Page = (props:PageProps<Personaje[]>)=>{
  return (
    <div>
      <div>
          <form class="search-from" action="/">
              <input class="search-input" name="nombre" value={señal} placeholder="Nombre del personaje"></input>
              <button type="submit" class="button">Buscar</button>
          </form>
      </div>
      <List personajes={props.data}/>
    </div>
  );
}
export default Page;