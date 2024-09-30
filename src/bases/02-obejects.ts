export const pokemonIds =[1,2,3,4,5,5,6,677];

export interface Pokemon{
    id      :number;
    name    :string;   
    age?    :number;
}

export const bulbasaur:Pokemon ={
    id      :1,
    name    : 'bulbasaur'
}


export const pokemons :Pokemon[]=[]

pokemons.push(bulbasaur);

console.log(pokemons)
