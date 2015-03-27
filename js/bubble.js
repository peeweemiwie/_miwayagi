(function(){
var diameter = 400,
    height = 400,
    width = 740,
    format = d3.format(",d"),
    color = d3.scale.category20();

var bubble = d3.layout.pack()
    .sort(null)
    .size([diameter, diameter])
    .padding(1.5);

// var tooltip = d3.select('body').append('div')
//       .attr('class', 'bubble-tooltip')
//       .style('opacity', 0)

var svg = d3.select("#chart-buzzwords").append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("class", "bubble")

    // .on('mouseover', function(d){
    //   tooltip.transition()
    //     .style('opacity', .9)
    //   tooltip.html(d, name)
    //     .style('left', (d3.event.pageX) + 'px')
    //     .style('top', (d3.event.pageY) + 'px')
    // })
    //
    // .on('mouseout', function(d){
    //   tooltip.transition()
    //     .style('opacity', 0)
    // })


d3.json("js/buzzwords.json", function(error, root) {
  var node = svg.selectAll(".node")
      .data(bubble.nodes(classes(root))
      .filter(function(d) { return !d.children; }))
    .enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

  node.append("title")
      .text(function(d) { return d.className });

  node.append("circle")
      .attr("r", function(d) { return d.r; })
      .style("fill", function(d) { return color(d.packageName); });

  node.append("text")
      .attr("dy", ".3em")
      .style("text-anchor", "middle")
      .text(function(d) { return d.className.substring(0, d.r / 3); });
});

// Returns a flattened hierarchy containing all leaf nodes under the root.
function classes(root) {
  var classes = [];

  function recurse(name, node) {
    if (node.children) node.children.forEach(function(child) { recurse(node.name, child); });
    else classes.push({packageName: name, className: node.name, value: node.size});
  }

  recurse(null, root);
  return {children: classes};
}

d3.select(self.frameElement).style("height", diameter + "px");
})();
