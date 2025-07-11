import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "axios"
import { Personaje } from "../../types.ts";
import Character from "../../components/Character.tsx";
import Lista from "../../components/List.tsx";

export const handler:Handlers = {
  GET: async (req: Request, ctx: FreshContext) =>{
    const url = `https://rickandmortyapi.com/api/character/1`
    const results = await axios.get(url)
    const personaje = results.data
    return ctx.render(personaje);
  }
};

const Page = (props:PageProps<Personaje>)=>{
  return (
    <div>
          <Character personaje={props.data}/>
    </div>
  );
}
export default Page;