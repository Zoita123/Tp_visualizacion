d3.dsv(",", "thisisfito.csv", d3.autoType).then((data) => {
  
    let chart = Plot.plot({
      marks: [
        Plot.dot(data, {
          x: "popularity",
          y: "tempo",
          stroke: "album",
          r: "energy",
          channels: { name: "song", album: "album" },
          tip: true,
        }),
        Plot.crosshair(data, {
          x: "popularity",
          y: "tempo",
          color: "album",
          opacity: 0.5,
        }),
      ],
      width: 800,
      height: 500,
      grid: true,
    });
  
    // Agregar el gráfico al div#chart de index.html
    d3.select("#chart").append(() => chart).style("background-color", "#080808");
  });