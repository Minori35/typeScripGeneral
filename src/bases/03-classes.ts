import axios from "axios";
import { Move, PokenAPIResponse } from "../interfaces/pokeapi-response.interfaces";

export class Pokemon{

    get imageUrl():string{
        return `https://pokeapi.co/api/v2/pokemon/${this.id}`
    }

    constructor(
        public readonly id      : number,
        public readonly name    :string,

    ){}

    scream(){
        console.log(`${this.name.toUpperCase()}!!!`)
    }

    speak(){
        console.log(`${this.name}, ${this.name}`);
    }

    async getMoves() : Promise<Move[]>{
        
        // const moves = 10;
        const {data} = await axios.get<PokenAPIResponse>('https://pokeapi.co/api/v2/pokemon/4')

        // return resp;
        console.log(data.moves);
        return data.moves;
        
        
    }
}

export const charmander = new Pokemon(4, 'Chenerman');

charmander.speak();
charmander.scream();
charmander.getMoves();