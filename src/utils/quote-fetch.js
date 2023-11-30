export async function getRandomQuote() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    if (!response.ok) {
      throw new Error("La solicitud no fue exitosa");
    }
    const data = await response.json();

    const capitales = data.map((pais) => {
      if (pais?.capital) return pais?.capital[0];
    });

    console.log("Hola", capitales);

    let opciones = [
      capitales[Math.floor(Math.random() * capitales.length)],
      capitales[Math.floor(Math.random() * capitales.length)],
      capitales[Math.floor(Math.random() * capitales.length)],
    ];

    console.log(opciones);

    let pais = data[Math.floor(Math.random() * data.length)];

    console.log("paies34", pais);

    opciones.push(pais.capital[0]);

    console.log("opciones53", opciones);

    // let opsi = _.shuffle(opciones);

    // console.log("opciones12345", opsi);

    return data.data[0];
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function getAuthor(author) {
  try {
    const response = await fetch(
      `https://quote-garden.onrender.com/api/v3/quotes?author=${author}`
    );
    if (!response.ok) {
      throw new Error("La solicitud no fue exitosa");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error", error);
  }
}
