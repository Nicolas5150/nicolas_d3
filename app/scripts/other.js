// http://codepen.io/frankieali4/pen/GIhtd
var chartData = {
    'barCircleMobile':[
        {'index':1.3, 'value':6, 'fill':'#44eeee', 'label':'Mac OSX Support'},
        {'index':1.1, 'value':5, 'fill':'#56efef', 'label':'Time Managment'},
        {'index':0.9, 'value':4, 'fill':'#69f1f1', 'label':'Account Security'},
        {'index':0.7, 'value':3,  'fill':'#7cf3f3', 'label':'iTunes Support'},
        {'index':0.5, 'value':2,  'fill':'#8ef4f4', 'label':'iOS Training'},
        {'index':0.3, 'value':1,  'fill':'#a1f6f6', 'label':'Technical Support'}
    ],

    'barCircleWeb':[
      {'index':1.3, 'value':6, 'fill':'#44eeee', 'label':'Illustrator'},
      {'index':1.1, 'value':5, 'fill':'#56efef', 'label':'Style Guides'},
      {'index':0.9, 'value':4, 'fill':'#69f1f1', 'label':'Mood Boards'},
      {'index':0.7, 'value':3,  'fill':'#7cf3f3', 'label':'Photoshop'},
      {'index':0.5, 'value':2,  'fill':'#8ef4f4', 'label':'Research'},
      {'index':0.3, 'value':1,  'fill':'#a1f6f6', 'label':'Digital Designing'}
    ]
};

// flags for job picked, only do animation on first click.
var appleFlag = false;

function drawBarCircleChart(data,target,values,labels){
    var w = 362,
        h = 362,
        size = data[0].value * 1.15,
        radius = 200,
        sectorWidth = .1,
        radScale = 25,
        sectorScale = 1.45,
        target = d3.select(target),
        valueText = d3.select(values),
        labelText = d3.select(labels);


    var arc = d3.svg.arc()
        .innerRadius(function(d,i){return (d.index/sectorScale) * radius + radScale; })
        .outerRadius(function(d,i){return ((d.index/sectorScale) + (sectorWidth/sectorScale)) * radius + radScale; })
        .startAngle(Math.PI)
        .endAngle(function(d) { return Math.PI + (d.value / size) * 2 * Math.PI; });

    var path = target.selectAll('path')
        .data(data);

    //TODO: seperate color and index from data object, make it a pain to update object order
    path.enter().append('svg:path')
        .attr('fill',function(d,i){return d.fill})
        .attr('stroke','#D1D3D4')
        .transition()
        .ease('elastic')
        .duration(1000)
        .delay(function(d,i){return i*100})
        .attrTween('d', arcTween);

    valueText.selectAll('tspan').data(data).enter()
        .append('tspan')
        .attr({
            x:40,
            y:function(d,i){return i*28},
            'text-anchor':'end'
        })
        .text(function(d,i){return data[i].value});

    labelText.selectAll('tspan').data(data).enter()
        .append('tspan')
        .attr({
            x:0,
            y:function(d,i){return i*28}
        })
        .text(function(d,i){return data[i].label});

    function arcTween(b) {
        var i = d3.interpolate({value: 0}, b);
        return function(t) {
            return arc(i(t));
        };
    }
}

// Animation Queue
drawBarCircleChart(chartData.barCircleWeb,'#circleBar-web-chart','#circleBar-web-values','#circleBar-web-labels');

function apple() {
  if (!appleFlag) {
    drawBarCircleChart(chartData.barCircleMobile,'#circleBar-mobile-chart','#circleBar-mobile-values','#circleBar-mobile-labels');
    appleFlag = true;
  }
}
d3.select('#circleBar-web-icon')
    .transition()
    .delay(500)
    .duration(500)
    .attr('opacity','1');
d3.select('#circleBar-web-text')
    .transition()
    .delay(750)
    .duration(500)
    .attr('opacity','1');

d3.select('#circleBar-web-clipLabels')
    .transition()
    .delay(600)
    .duration(1250)
    .attr('height','150');

d3.select('#circleBar-mobile-icon')
    .transition()
    .delay(800)
    .duration(500)
    .attr('opacity','1');
d3.select('#circleBar-mobile-text')
    .transition()
    .delay(1050)
    .duration(500)
    .attr('opacity','1');
d3.select('#circleBar-mobile-clipLabels')
    .transition()
    .delay(900)
    .duration(1250)
    .attr('height','150');
