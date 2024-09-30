export let name = 'Sayra';
console.log("🚀 ~ name:", name)
export const age = 30;
export const isValid : boolean=true;

name = 'Melissa';

export const templateString = `Esto es un string
multilinea
que puede tener 
"doble
' simple
inyectar valores
${name}
expresiones${1+1}
números :${age}


`

console.log(templateString);

