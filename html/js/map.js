// 创建画布
var width = $('.map-container').width();
var height = $('.map-container').height();
var svg = d3.select(".map-container")
	.append("svg")
	.attr("preserveAspectRatio", "xMidYMid meet")
	.attr("viewBox", "0 0 " + width + " " + height)
	.attr("id", "map");
var svgMap = svg
	.append("g");

// 投影
var drillProjection = d3.geoEquirectangular(); 
// var drillProjection = d3.geoMercator(); 
var duration = 1000;

// 地图path生成器
var pathGene = d3.geoPath().projection(drillProjection);

d3.json('./js/china.json', function(json) {
	if(!json)
		return;
	drillProjection.fitExtent([
	    [20, 20],
	    [width, height]
	], json);

	let paths = svgMap.selectAll("path")
	    .data(json.features)
	    .enter()
	    .append("path")
	    .attr("d", pathGene)
	    .attr('stroke', '#81eaf0')
        .attr('stroke-width', 0.5)
        .attr('fill', '#58714e')
        .on('click', function(d) {
        	console.log(d.properties.ADM1, 'dddd')

        })
        .on("mouseover", function(d) {
            d3.select(this).style("fill", '#21454A');
         })
        .on("mouseout", function(d) {
            d3.select(this).style("fill", '#58714e');
         });
    let beijing = [116.46,39.92],
    	shanghai = [121.48,31.22],
    	chengdu = [104.06, 30.67],
    	hefei = [117.27, 31.86],
    	wulumuqi = [87.68, 43.77];


    generatePath(beijing, shanghai);
    generatePath(beijing, chengdu);
    generatePath(hefei, wulumuqi);
});

function generatePath(srcLanlon, destLanlon) {
	let srcPoint = getPosition(srcLanlon),
		descPoint = getPosition(destLanlon);
	let d = 50;
	let x1 = srcPoint[0],
		y1 = srcPoint[1],
		x2 = descPoint[0],
		y2 = descPoint[1];
	let pathStr = '';
	if(x1 < x2 && y1 < y2) {
		pathStr = 'M' + x1.toString() + ' ' + y1.toString() + ' Q ' + ((x1+x2)/2 + 100).toString() + ' ' + ((y1+y2)/2 - 100).toString() + ' ' + x2.toString() + ' ' + y2.toString();
	}
	if(x1 < x2 && y1 > y2) {
		pathStr = 'M' + x1.toString() + ' ' + y1.toString() + ' Q ' + ((x1+x2)/2 - 100).toString() + ' ' + ((y1+y2)/2 - 100).toString() + ' ' + x2.toString() + ' ' + y2.toString();
	}
	if(x1 > x2 && y1 < y2) {
		pathStr = 'M' + x1.toString() + ' ' + y1.toString() + ' Q ' + ((x1+x2)/2 - 100).toString() + ' ' + ((y1+y2)/2 - 100).toString() + ' ' + x2.toString() + ' ' + y2.toString();
	}
	if(x1 > x2 && y1 > y2) {
		pathStr = 'M' + x1.toString() + ' ' + y1.toString() + ' Q ' + ((x1+x2)/2 + 100).toString() + ' ' + ((y1+y2)/2 - 100).toString() + ' ' + x2.toString() + ' ' + y2.toString();
	}
	// 直线
	let path = svg.append('path')
		.attr('d', pathStr)
		.attr("stroke", "red")
      	.attr("stroke-width", "2")
      	.attr("fill", "none");
    repeat_path();
    function repeat_path() {
    	let totalLength = path.node().getTotalLength();
    	console.log(totalLength);
    	path.attr("stroke-dasharray", totalLength/2 + "," + totalLength/2)
     		.attr("stroke-dashoffset", totalLength)
     		.transition()
       			.duration(duration)
       			.ease(d3.easeLinear)
       			.attr("stroke-dashoffset", 0)
       			.on("end", repeat_path);
    }
    // 源打点
    let srcPointCircle_1 = create_circle(0, 'red', x1, y1);
    let srcPointCircle_2 = create_circle(0, 'blue', x1, y1);
    let srcPointCircle_3 = create_circle(0, 'yellow', x1, y1);
    repeat_circle_1(srcPointCircle_1, 10);
    repeat_circle_1(srcPointCircle_2, 7);
    repeat_circle_1(srcPointCircle_3, 4);
    // 目的打点
    let destPointCircle_1 = create_circle(0, 'red', x2, y2);
    let destPointCircle_2 = create_circle(0, 'blue', x2, y2);
    let destPointCircle_3 = create_circle(0, 'yellow', x2, y2);
    repeat_circle_1(destPointCircle_1, 10, duration);
    repeat_circle_1(destPointCircle_2, 7, duration);
    repeat_circle_1(destPointCircle_3, 4, duration);
    function repeat_circle_1(srcPointCircle, raduis, delay = 0) {
    	srcPointCircle
    		.attr('r', 0)
    		.attr('opacity', 1)
    		.transition()
       			.duration(duration)
       			.delay(delay)
       			.ease(d3.easeLinear)
       			.attr('r', raduis)
       			.attr('opacity', 0)
       			.on("end", function() {
       				repeat_circle_1(srcPointCircle, raduis, delay)
       			});
    }

    function create_circle(radius, color, x, y) {
    	return svg.append('circle')
    				.attr('cx', x)
    				.attr('cy', y)
    				.attr('r', radius)
    				.attr("stroke", color)
      				.attr("stroke-width", "1")
      				.attr("fill", "none");
    }
}

function getPosition(lanlon) {
	return drillProjection(lanlon);
}
