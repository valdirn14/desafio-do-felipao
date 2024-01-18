let XP= 1000
let NivelDoHeroi;

if (XP===1000) {
    NivelDoHeroi= "Ferro"
}

else if (XP>=1001 && XP<=2000) {
    NivelDoHeroi= "Bronze"
}

else if (XP>=2001 && XP<=5000) {
    NivelDoHeroi= "Prata"
}

else if(XP>=5001 && XP<=7000) {
    NivelDoHeroi= "Ouro"
}

else if(XP>=7001 && XP<=8000) {
    NivelDoHeroi= "Platina"
}

else if(XP>=8001 && XP<=9000) {
    NivelDoHeroi= "Ascedente"
}

else if(XP>=9001 && XP<=10000) {
    NivelDoHeroi = "Imortal"
}

else if(XP>=1001) {
    NivelDoHeroi= "Radiante"
}

console.log("O nivel do heroi será: " + NivelDoHeroi)