var width = $("#treemap").width(),
    height = 500,
    color = d3.scale.category10();

var treemap = d3.layout.treemap()
    .padding(4)
    .size([width, height])
    .value(function (d) {
        return d.size;
    });

var svg = d3.select("#treemap").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(-.5,-.5)");

d3.json("data/treemap.json", function (error, json) {
    if (error) throw error;

    console.log(json);


    var cell = svg.data([json]).selectAll("g")
        .data(treemap.nodes)
        .enter().append("g")
        .attr("transform", function (d) {
            return "translate(" + d.x + "," + d.y + ")";
        });

    cell.append("rect")
        .attr("width", function (d) {
            return d.dx;
        })
        .attr("height", function (d) {
            return d.dy;
        })
        .style("fill", function (d) {
            return d.color;
        })
        .attr("class", function (d) {
            return d.children ? "parent" : "children";
        })

    cell.append("text")
        .attr("x", function (d) {
            return d.dx / 2;
        })
        .attr("y", function (d) {
            return d.dy / 2;
        })
        .attr("text-anchor", "middle")
        .text(function (d) {
            return d.name;
        }).attr("class", function (d) {
            return d.children ? "parent" : "children";
        });
});
