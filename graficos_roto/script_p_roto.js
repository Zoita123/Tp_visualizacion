d3.dsv(",", "data/thisisfito.csv", d3.autoType).then((data) => {
  let filteredData = data.filter(d => d.estado === "roto");

    let chart = Plot.plot({
      marginBottom: 80,
      x:{
        tickRotate: -15,
      },
      
      y: {
        grid: true,
      },
      marks: [
        Plot.ruleY([0]),
        Plot.barY(filteredData, {x: "song", y: "popularity", 
        fill:"#FF0000",
        sort: {x: "y", reverse: true}})
        
      ]
    })
  
    // Agregar el gráfico al div#chart de index.html
    d3.select("#chart_34").append(() => chart).style("background-color", "#080808");
  });


  

  