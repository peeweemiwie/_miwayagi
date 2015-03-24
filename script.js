var resume = {
  "work": [
    {
      "title": "Design Technologist",
      "time": "April 2012 to present",
      "company": "New York Magazine",
      "skill": "HTML5, CSS3, javascript, jQuery, node.js, wordpress",
      "detail": [
        "Responsive Website, Mobile, Tablet, Ad Placement",
        "nymag, vulture, thecut, bedford+bowery, science of us",
        "Working closely with sr. developers, designers, product owners, ad sales to develop prototype from PSD."
      ]
    },
      {
      "title": "Freelance: HTML developer, UI Design, Web Master",
      "time": "September 2005 to April 2012",
      "company": "Clients: Standard & Poors, AKA NYC, Manhattan Marketing Ensemble, Tag Worldwide, Exposure New York, Mundocom, Vigil Security, Share cancer support - Japanese, Red Pearl, 2nd skin NYC, Polaris Hair Studio, Sushi Koo",
      "skill": "wordpress, E-commerce (Prestashop), UI Design, HTML, CSS",
      "detail": "HTML / CSS development, Flash ad banner, Business to Business Newsletter templates, Email campaign and landing pages"
    },
    {
      "title": "Web Content Administration",
      "time": "February 2009 to February 2011",
      "company": "Evolution Store",
      "skill": "HTML, CSS",
      "detail": "HTML web page development, Email campaign and landing page"
    }
  ]
}

// barchart
// var bardata = [7, 7, 7, 2, 2, 1, 2];
var skills = [
      {subject: 'HTML', years: 7},
      {subject: 'CSS', years: 7},
      {subject: 'Photoshop', years: 7},
      {subject: 'javascript', years: 2.5},
      {subject: 'wordpress', years: 2},
      {subject: 'd3.js', years: .5}]
var bardata = [];
var subject = [];

for(var i=0; i<skills.length; i++){
  subject.push(skills[i].subject);
  bardata.push(skills[i].years);
}

bardata.sort(function compareNumbers(a,b) {
    return b - a;
});

var margin = {top: 30, right: 30, bottom: 40, left: 100}

var height = 300 - margin.top - margin.bottom,
    width = 500 - margin.left - margin.right,
    barOffset = 5,
    barHeight = Math.floor(height / bardata.length) - barOffset;

var colors = d3.scale.linear()
      .domain([0, d3.max(bardata)])
      .range(['#9ecae1', '#3182bd'])

var xScale = d3.scale.linear()
      .domain([0, d3.max(bardata)])
      .range([0, width]);

var yScale = d3.scale.ordinal()
      .domain(d3.range(0, bardata.length))
      .rangeBands([0, height])

var tooltip = d3.select('body').append('div')
      .style('position', 'absolute')
      .style('padding', '10px')
      .style('background', '#FFF')
      .style('opacity', 0)

var myChart = d3.select('#chart-skills').append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ', ' + margin.right + ')')
    .selectAll('rect').data(bardata)
    .enter().append('rect')
      .style('fill', colors)
      .attr('width', 0)
      .attr('x', 0)
      .attr('height', barHeight)
      .attr('y', function(d, i) {
          return i * (barHeight + barOffset);
      })

    .on('mouseover', function(d){
      tooltip.transition()
        .style('opacity', .9)

      tooltip.html(d)
        .style('left', (d3.event.pageX + 30) + 'px')
        .style('top', (d3.event.pageY) + 'px')

      d3.select(this)
        .style('opacity', .5)
    })

    .on('mouseout', function(d){
      tooltip.transition()
        .style('opacity', 0)

      d3.select(this)
        .style('opacity', 1)
    })

myChart.transition()
    .attr('width', function(d) {
        return xScale(d);
    })
    .delay(function(d, i){
      return i * 100;
    })

// left side axis
var vGuideScale = d3.scale.linear()
    .domain([0, bardata.length])
    .range([0, height])

var vAxis = d3.svg.axis()
      .scale(yScale)
      .orient('left')
      .tickFormat(function(d){
        return subject[d];
      })

var vGuide = d3.select('svg').append('g')
    vAxis(vGuide)
    vGuide.attr('transform', 'translate(' + margin.left + ', ' +  margin.top + ')')
      .classed('v-guide', true)
      .selectAll('path')
      .style({ fill: 'none', stroke: "none"})
      .selectAll('line')
      .style({ stroke: "#000"})

// bottom axis
var hGuideScale = d3.scale.linear()
    .domain([0, d3.max(bardata)])
    .range([0, width])
var hAxisTickArray = [];
    for(var i = 0; i <= d3.max(bardata); i++){
      hAxisTickArray.push(i);
    }
var hAxis = d3.svg.axis()
    .scale(hGuideScale)
    .orient('bottom')
    .tickValues(hAxisTickArray)

var hGuide = d3.select('svg').append('g')
    hAxis(hGuide)
    hGuide.attr('transform', 'translate(' + margin.left + ', ' + (height + margin.top) + ')')
      .classed('h-guide', true)
      .selectAll('path')
      .style({ fill: 'none', stroke: "#000"})
      .selectAll('line')
      .style({ stroke: "#000"})
