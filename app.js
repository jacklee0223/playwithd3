d3.select('#circle').style("background-color", function() {
	return "hsl(" + Math.random() * 360 + ",100%,50%";
})

d3.select("body").transition()
    .style("background-color", "black");

console.log(d3.sum([1,3]))