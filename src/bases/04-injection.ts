import axios from 'axios';
import { Move, PokenAPIResponse } from '../interfaces/pokeapi-response.interfaces';
import { HttAdapter, PokeApiAdapter, PokeApiFectchAdaprter } from '../api/pokeApi.adapter';

export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }
  
    constructor(
        public readonly id: number, 
        public name: string,
        // Todo: inyectar dependencias
        private readonly http: HttAdapter,



    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

    async getMoves(): Promise<Move[]> {
        // console.log( data    .moves );
        const data = await this.http.get<PokenAPIResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log("🚀 ~ Pokemon ~ getMoves ~ data:", data)
        
        return data.moves;
    }

}

const pokeApi = new PokeApiAdapter();
const pokeApiFetch = new PokeApiFectchAdaprter();   


export const charmander = new Pokemon( 4, 'Charmander', pokeApiFetch );

charmander.getMoves();