var width = $("#treemap").width(),
    height = 800,
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

d3.json("data/treemap.json", function (error, json) {
    if (error) throw error;


    console.log(json);

    var cell = svg.data([json]).selectAll("g")
        .data(treemap.nodes)
        .enter().append("g")
        .attr("transform", function (d) {
            return "translate(" + d.x + "," + d.y + ")";
        }).attr("data-class", function (d) {
            return d.children ? d.name : d.parent.name;
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
        });

    cell.append("text")
        .attr("x", function (d) {
            return 10;
        })
        .attr("y", function (d) {
            return 20;
        })
        .attr("dy", function (d) {
            return 0;
        })
        .text(function (d) {
            return d.name;
        }).attr("class", function (d) {
            return d.children ? "parent" : "children";
        }).call(wrap, 200);
});


function wrap(text, width) {

    $('#treemap svg > g').hover(function () {
        var classed = $(this).data('class');

        console.log(classed);

        $("[data-class='" + classed + "']").toggleClass('is-visible');

    }, function () {

        $('#treemap svg g').removeClass('is-visible');

    })


    text.each(function () {
        var text = d3.select(this),
            words = text.text().split(/\s+/).reverse(),
            word,
            line = [],
            lineNumber = 0,
            lineHeight = 1.3, // ems
            x = text.attr("x"),
            y = text.attr("y"),
            dy = text.attr("dy"),
            tspan = text.text(null).append("tspan").attr("x", x).attr("dy", 0 + "em");
        while (word = words.pop()) {
            line.push(word);
            tspan.text(line.join(" "));
            if (tspan.node().getComputedTextLength() > width) {
                line.pop();
                tspan.text(line.join(" "));
                line = [word];
                tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
            }
        }
    });
}
