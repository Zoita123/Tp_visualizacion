d3.dsv(",", "data/thisisfito.csv", d3.autoType).then((data) => {
  let filteredData = data.filter(d => d.estado === "roto");

  let xDomain = d3.extent(data, d => d.popularity);
  let yDomain = d3.extent(data, d => d.tempo);

  // Generar la visualización del gráfico
  let chart = Plot.plot({
    marks: [
      Plot.dot(filteredData, {
        x: "popularity",
        y: "tempo",
        stroke: "#FF0000",
        r: 10,
        channels: { name: "song", album: "album" },
        tip: true,
      }),
      Plot.crosshair(filteredData, {
        x: "popularity",
        y: "tempo",
        color: "album",
        opacity: 0.5,
      }),
    ],
    width: 800,
    height: 500,
    grid: true,
    x: { domain: xDomain, nice: true },
    y: { domain: yDomain, nice: true },
  });

  // Agregar el gráfico al div#chart de index.html
  d3.select("#chart_24").append(() => chart).style("background-color", "#080808");
});
