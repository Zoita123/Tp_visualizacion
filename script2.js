d3.dsv(";", "fitofiltradoenojo.csv", d3.autoType).then((data) => {
  // Multiplicar los valores de "energy" por 5

  // Generar la visualización del gráfico
  let chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: "popularity",
        y: "energy",
        stroke: "album",
        r: "tempo",
        channels: { name: "song", album: "album" },
        tip: true,
      }),
      Plot.crosshair(data, {
        x: "popularity",
        y: "energy",
        color: "album",
        opacity: 0.5,
      }),
    ],
    width: 800,
    height: 500,
    grid: true,
  });

  // Agregar el gráfico al div#chart de index.html
  d3.select("#chart2").append(() => chart).style("background-color", "#080808");
});
