

Plot.plot({
    marks: [
      Plot.dot(penguins, Plot.pointer({x: "culmen_length_mm", y: "culmen_depth_mm", fill: "red", r: 8})),
      Plot.dot(penguins, {x: "culmen_length_mm", y: "culmen_depth_mm"})
    ]
  })