
function bar_plot(temp)
{

// bar-plot data
var SUI = [
	   {group: "2004-2009", value: 16},
	   {group: "2010-2014", value: 31},
	];

var ESP = [
	   {group: "2004-2009", value: 12},
	   {group: "2010-2014", value: 27},
	];

var RUS = [
	   {group: "2004-2009", value: 10},
	   {group: "2010-2014", value: 11},
	];

var USA = [
	   {group: "2004-2009", value: 12},
	   {group: "2010-2014", value: 13},
	];

var SRB = [
	   {group: "2004-2009", value: 4},
	   {group: "2010-2014", value: 15},
	];

var FRA = [
	   {group: "2004-2009", value: 8},
	   {group: "2010-2014", value: 12},
	];

var CYP = [
	   {group: "2004-2009", value: 3},
	   {group: "2010-2014", value: 3},
	];
	
var AUS = [
	   {group: "2004-2009", value: 3},
	   {group: "2010-2014", value: 3},
	];

var GER = [
	   {group: "2004-2009", value: 4},
	   {group: "2010-2014", value: 4},
	];


var CHI = [
	   {group: "2004-2009", value: 3},
	   {group: "2010-2014", value: 3},
	];
	
var ARG = [
	   {group: "2004-2009", value: 5},
	   {group: "2010-2014", value: 6},
	];

var SVK = [
	   {group: "2004-2009", value: 1},
	   {group: "2010-2014", value: 1},
	];

var CRO = [
	   {group: "2004-2009", value: 1},
	   {group: "2010-2014", value: 3},
	];

var MAR = [
	   {group: "2004-2009", value: 1},
	   {group: "2010-2014", value: 1},
	];
	
var FIN = [
	   {group: "2004-2009", value: 1},
	   {group: "2010-2014", value: 1},
	];

var GBR = [
	   {group: "2004-2009", value: 0},
	   {group: "2010-2014", value: 12},
	];

var CZE = [
	   {group: "2004-2009", value: 0},
	   {group: "2010-2014", value: 5},
	];

var JPN = [
	   {group: "2004-2009", value: 0},
	   {group: "2010-2014", value: 1},
	];

var BUL = [
	   {group: "2004-2009", value: 0},
	   {group: "2010-2014", value: 1},
	];
	
var UKR = [
	   {group: "2004-2009", value: 0},
	   {group: "2010-2014", value: 1},
	];

	// set the dimensions and margins of the graph
	var margin = {top: 30, right: 30, bottom: 70, left: 60},
	    width = 360 ,
	    height = 300;// - margin.top - margin.bottom;

	// append the svg object to the body of the page
	var svg = d3.select("#my_bar")
	  .append("svg").attr("id","my_bar2")
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
	  .append("g")
	    .attr("transform",
	          "translate(" + margin.left + "," + margin.top + ")");




	// X axis
	var x = d3.scaleBand()
	  .range([ 0, width/2])
	  .domain(ESP.map(function(d) { return d.group; }))
	  .padding(0.2);
	svg.append("g")
	  .attr("transform", "translate(0," + height + ")")
	  .call(d3.axisBottom(x))
	  .append("text")
	  		 .attr("x",100)
	  		 .attr("y",25)
             .attr("text-anchor", "end")
             .attr("stroke", "black")
             .text("Years");

	// Add Y axis
	var y = d3.scaleLinear()
	  .domain([0, 30])
	  .range([ height, 0]);
	svg.append("g")
	  .attr("class", "myYaxis")
	  .call(d3.axisLeft(y))
	  .append("text")
	  		 .attr("y",-10)
             .attr("text-anchor", "end")
             .attr("stroke", "black")
             .text("Matches");




	// A function that create / update the plot for a given variable:
	function update(data) {
		svg.append("text")
           .attr("transform", "translate(100,0)")
           .attr("font-size", "16px")
           .text("Knock out Matches Played over the decade")

	  var u = svg.selectAll("rect")
	    .data(data)

	  u
	    .enter()
	    .append("rect")
	    .merge(u)
	    .transition()
	    .duration(1000)
	      .attr("x", function(d) { return x(d.group); })
	      .attr("y", function(d) { return y(d.value); })
	      .attr("width", x.bandwidth())
	      .attr("height", function(d) { return height - y(d.value); })
	      .attr("fill", "teal")


	 svg.append("g")
	 	.append("text")
	 	.attr("stroke","black")
	 	.attr("x",43)
	 	.attr("y",300-(data[0].value)*10)
	    .text(data[0].value);

   	svg.append("g")
	 	.append("text")
	 	.attr("stroke","black")
	 	.attr("x",125)
	 	.attr("y",300-(data[1].value)*10)
	    .text(data[1].value);

	}

	var country_object={"USA":USA,"ESP":ESP,"RUS":RUS,"SUI":SUI,"SRB":SRB,"FRA":FRA,"AUS":AUS,"FRA":FRA,"CYP":CYP,"GER":GER,"CHI":CHI,"ARG":ARG,"SVK":SVK,"CRO":CRO,"MAR":MAR,"FIN":FIN,"GBR":GBR,"JPN":JPN,"BUL":BUL,"CZE":CZE,"UKR":UKR};
	// Initialize the plot with the first dataset
	//console.log(country_object[temp]);
	update(country_object[temp]);
}