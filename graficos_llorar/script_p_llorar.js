d3.dsv(",", "data/thisisfito.csv", d3.autoType).then((data) => {
  let filteredData = data.filter(d => d.estado === "llorar");

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
        fill:"#4FAADE",
        sort: {x: "y", reverse: true}})
        
      ]
    })
  
    // Agregar el gráfico al div#chart de index.html
    d3.select("#chart_33").append(() => chart).style("background-color", "#080808");
  });


  

  