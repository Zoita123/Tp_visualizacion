// const scroller = scrollama();

// setup the instance, pass callback functions
// scroller
//   .setup({
//     step: "#chart",
//   })
  // .onStepEnter((response) => {
  //   // { element, index, direction }
  //   console.log("ENTER");
  //   console.log(response);
  //   // Override the default scrolling behavior

  //   // Scroll into view
  //   response.element.scrollIntoView({ behavior: "smooth", block: "center" });
    
  //   //document.body.style.overflow = "hidden";

  //   document.querySelector("#chart").addEventListener("scroll", (event) => {
  //     event.preventDefault();
  //     event.stopPropagation();
  //     console.log("SCROLL");
  //     console.log(event);
  //   });
      
  // })
  // .onStepProgress((response) => {
  //   // { element, index, progress }
  //   console.log("PROGRESS");
  //   console.log(response);
  // })
  // .onStepExit((response) => {
  //   // { element, index, direction }
  //   console.log("EXIT");
  //   console.log(response);
  // });

// On document load
/*
document.addEventListener("DOMContentLoaded", () => {
  
  // Intersection Observer API

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("INTERSECTING");
        console.log(entry);
        // Override the default scrolling behavior
        entry.target.scrollIntoView({ behavior: "smooth", block: "center" });
        document.body.style.overflow = "hidden";
      }
    });

    document.querySelector("#chart").addEventListener("scroll", (event) => {
      event.preventDefault();
      event.stopPropagation();
      console.log("SCROLL");
      console.log(event);
    });
  };

  const observer = new IntersectionObserver(callback, options);

  const target = document.querySelector("#chart");

  observer.observe(target);
});
*/


d3.dsv(",", "thisisfito.csv", d3.autoType).then((data) => {
  
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
    });
  
    // Agregar el gráfico al div#chart de index.html
    d3.select("#chart3").append(() => chart).style("background-color", "#080808");
  });