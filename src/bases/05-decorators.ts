class NewPokemon{
    constructor(
        public readonly id:number,
        public name:string,
    )
    {    }

    scream(){
        console.log(`No quiero `);
        
    }

    speak(){
        console.log(`No quiero hablar`);
        
    }
}


const MyDecorator= () =>{
    return( target: Function)=>{
        // console.log(target);
        return NewPokemon; 
    }
}


@MyDecorator()
export class Pokemon{


    constructor(
        public readonly id:number,
        public name:string,
    )
    {    }

    scream(){
        console.log(`${this.name.toUpperCase()}!!!`);
        
    }

    speak(){
        console.log(`${this.name}, ${this.name}`);
        
    }
}


export const charmander = new Pokemon(4, 'Chenerman');

charmander.speak();
charmander.scream();
// console.log(charmander.imageUrl)