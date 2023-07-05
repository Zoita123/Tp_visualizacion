d3.dsv(",", "data/thisisfito.csv", d3.autoType).then((data) => {
  let xDomain = d3.extent(data, d => d.popularity);
  let yDomain = d3.extent(data, d => d.tempo);
    let chart = Plot.plot({
      marks: [
        Plot.dot(data, {
          x: "popularity",
          y: "tempo",
          stroke: d => d.estado == "feliz" ? "#FFE842" : d.estado == "enojo" ? "#ff6316" : d.estado == "fiesta" ? "#8f00ff" : d.estado == "roto" ? "#FF0000" : d.estado == "llorar" ? "#4FAADE" : d.estado == "enamorado" ? "#f887c7" : "#adadad",
          r: 10,
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
      x: { domain: xDomain, nice: true },
      y: { domain: yDomain, nice: true },
    });
  
    // Agregar el gráfico al div#chart de index.html
    d3.select("#chart_13").append(() => chart).style("background-color", "#080808");
  });


  
  