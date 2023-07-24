// condicionales.ts
function zodiac(day: number, month: number): string {
    const zodiacSigns = [
        "Capricornio", "Acuario", "Piscis", "Aries", "Tauro", "Géminis",
        "Cáncer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario"
    ];

    const dates = [20, 19, 21, 20, 21, 21, 23, 23, 23, 23, 22, 22];
    const index = (day < dates[month - 1]) ? month - 1 : month;
    return zodiacSigns[index];
}
