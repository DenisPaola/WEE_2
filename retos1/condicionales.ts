//Acuario: del 20 de enero al 18 de febrero.
//Piscis: del 19 de febrero al 20 de marzo
//Aries: del 21 de marzo al 19 de abril.
//Tauro: del 20 de abril al 20 de mayo.
//Géminis: del 21 de mayo al 20 de junio.
//Cáncer: del 21 de junio al 22 de julio.
//Leo: del 23 de julio al 22 de agosto.
//Virgo: del 23 de agosto al 22 de septiembre.
//Libra: del 23 de septiembre al 22 de octubre.
//Escorpio: del 23 de octubre al 21 de noviembre.
//Sagitario: del 22 de noviembre al 21 de diciembre.
//Capricornio: del 22 de diciembre al 19 de enero//


function zodiac(day:number, month:number): string{
    if((day>=20 && month=== 1) ||  (day >= 18 && month===2)){
        return "Acuario" 
    }  

    if((day>=19 && month===2) || (day <= 20) && (month===3)){
        return "Piscis"
    } 

    if((day>=21 && month===3) || (day <= 19) && (month===4)){
        return "Aries"
    }

    if((day>=20 && month===4) || (day <= 20) && (month===5)){
        return "Tauro"
    }

    if((day>=20 && month===5) || (day <= 20) && (month===6)){
        return "Geminis"
    }
    
    if((day>=21 && month===6) || (day <= 22) && (month===7)){
        return "Cancer"
    }

    if((day>=23 && month===7) || (day <= 22) && (month===8)){
        return "Leo"
    }

    if((day>=23 && month===8) || (day <= 22) && (month===9)){
        return "Virgo"
    }
   
    if((day>=23 && month===9) || (day <= 22) && (month===10)){
        return "Libra"
    }

    if((day>=23 && month===10) || (day <= 21) && (month===11)){
        return "Escorpio"
    }

    if((day>=22 && month===11) || (day <= 21) && (month===12)){
        return "Sagitario"
    }

    return "Capricornio"
}

console.log(zodiac(21,12))