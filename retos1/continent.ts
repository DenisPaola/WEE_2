// continent.ts
function continent(country: string): void {
    const continents = {
        Europa: ["España", "Francia", "Alemania", "Italia", "Reino Unido"],
        América: ["Estados Unidos", "Canadá", "Brasil", "Argentina", "México"],
        Asia: ["China", "India", "Japón", "Corea del Sur", "Rusia"],
        África: ["Nigeria", "Egipto", "Sudáfrica", "Kenia", "Marruecos"],
        Oceanía: ["Australia", "Nueva Zelanda", "Fiyi", "Papúa Nueva Guinea", "Samoa"]
    };

    for (const continentName in continents) {
        if (continents[continentName].includes(country)) {
            console.log(`${country} está en ${continentName}`);
            return;
        }
    }

    console.log(`No se encontró información sobre ${country} en qué continente está.`);
}
