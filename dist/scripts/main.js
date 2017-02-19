'use strict';

$(function () {
  $('.target').pushpin({
    top: 0,
    bottom: 1000,
    offset: 0
  });

  $('.pushpin-demo-nav').each(function () {
    var $this = $(this);
    var $target = $('#' + $(this).attr('data-target'));
    $this.pushpin({
      top: $target.offset().top,
      bottom: $target.offset().top + $target.outerHeight() - $this.height()
    });
  });
});
//# sourceMappingURL=pushpin.js.map

'use strict';

// Global color vars
var colors = {
    'pink': '#ee4488',
    'yarn': '#552244',
    'purple': '#443366',
    'blue': '#44eeee',
    'yellow': '#ffffde',
    'pastele': '#ffccdd'
};

// flags for colorPicked, only do animation on first click.
var frameworksFlag = false;
var engineeringFlag = false;
var softwareFlag = false;

// Starting arc code comes from - https://codepen.io/rogerxu/pen/rLqvd
// Call each arc that needs to be created
createArc('html', 'HTML', 1, colors.blue);
createArc('css', 'CSS', .85, colors.blue);
createArc('javascript', 'JavaScript', .90, colors.blue);
createArc('php', 'PHP', .90, colors.blue);

// Do onclick events for other tabs.
function frameworks() {
    if (!frameworksFlag) {
        createArc('materialize', 'Materialize', .90, colors.blue);
        createArc('google_maps', 'Google API', .80, colors.blue);
        frameworksFlag = true;
    }
}

function engineering() {
    if (!engineeringFlag) {
        createArc('c', 'C', .95, colors.blue);
        createArc('java', 'Java', .80, colors.blue);
        engineeringFlag = true;
    }
}

function software() {
    if (!softwareFlag) {
        createArc('photoshop', 'Photoshop', 1, colors.blue);
        createArc('adobe_xd', 'Adobe XD', .80, colors.blue);
        createArc('premier_pro', 'Premier Pro', .80, colors.blue);
        createArc('sketch', 'Sketch', .85, colors.blue);
        createArc('maya', 'Maya', .70, colors.blue);
        softwareFlag = true;
    }
}

function createArc(spanName, arcName, arcVal, colorPicked) {
    var color = colorPicked;

    // Grab the span tag's id to eventually append to.
    var span = 'span#' + spanName;

    var radius = 100;
    var border = 5;
    var padding = 15;
    var startPercent = 0;
    var endPercent = arcVal;

    var twoPi = Math.PI * 2;
    var boxSize = (radius + padding) * 2;

    var count = Math.abs((endPercent - startPercent) / 0.01);
    var step = endPercent < startPercent ? -0.01 : 0.01;

    var arc = d3.svg.arc().startAngle(0).innerRadius(radius).outerRadius(radius - border);

    var parent = d3.select(span);

    var svg = parent.append('svg').attr('width', boxSize).attr('height', boxSize);

    var defs = svg.append('defs');

    var filter = defs.append('filter').attr('id', 'blur');

    filter.append('feGaussianBlur').attr('in', 'SourceGraphic').attr('stdDeviation', '7');

    var g = svg.append('g').attr('transform', 'translate(' + boxSize / 2 + ',' + boxSize / 2 + ')');

    var meter = g.append('g').attr('class', 'progress-meter');

    meter.append('path').attr('class', 'background').attr('fill', '#ccc').attr('fill-opacity', 0.5).attr('d', arc.endAngle(twoPi));

    var foreground = meter.append('path').attr('class', 'foreground').attr('fill', color).attr('fill-opacity', 1).attr('stroke', color).attr('stroke-width', 5).attr('stroke-opacity', 1).attr('filter', 'url(#blur)');

    var front = meter.append('path').attr('class', 'foreground').attr('fill', color).attr('fill-opacity', 1);

    var numberText = meter.append('text').attr('fill', '#fff').attr('text-anchor', 'middle').attr('dy', '.35em');

    function updateProgress(progress) {
        foreground.attr('d', arc.endAngle(twoPi * progress));
        front.attr('d', arc.endAngle(twoPi * progress));
        numberText.text(arcName);
    }

    var progress = startPercent;

    (function loops() {
        updateProgress(progress);

        if (count > 0) {
            count--;
            progress += step;
            setTimeout(loops, 10);
        }
    })();
}
//# sourceMappingURL=d3Arcs.js.map

'use strict';

$(function () {
  // https://github.com/mattboldt/typed.js/blob/master/README.md
  // http://jeffweisbein.com - insperation but used code above.
  $('#element').typed({
    strings: ['Nicolas-Resume:~ nicolas$ ^1000 cat about.txt ^1000 <br>' + 'A University of Central Florida student obtaining a Bachelors Degree in Digital Media - focus in Web Design - with a minor in Computer Science. <br>' + ' My passion lies between the intersection of technology and art. <br> I enjoy both programming for web and software engineering. <br>' + ' At the same time, I also love to design what the layout or interaction for the software will ultimately be like. <br> ' + ' I continue to learn out of the classroom about both fields to refine my skills. <br>' + 'Nicolas-Resume:~ nicolas$ ^1000 ./resume.exe ^1000 <br>' + 'Loading resume'],
    typeSpeed: 0,
    cursorChar: '█',
    callback: function callback() {
      loadingBar();
    }
  });

  // Call once the first section is finished.
  function loadingBar() {
    $('#element2').typed({
      strings: ['10%', '20%', '30%', '50%', '80%', '100%'],
      typeSpeed: 0,
      showCursor: false
    });
  }
});
//# sourceMappingURL=typing.js.map

'use strict';

// http://codepen.io/frankieali4/pen/GIhtd
var chartData = {
    'barCircleMobile': [{ 'index': 1.3, 'value': 6, 'fill': '#44eeee', 'label': 'Mac OSX Support' }, { 'index': 1.1, 'value': 5, 'fill': '#56efef', 'label': 'Time Managment' }, { 'index': 0.9, 'value': 4, 'fill': '#69f1f1', 'label': 'Account Security' }, { 'index': 0.7, 'value': 3, 'fill': '#7cf3f3', 'label': 'iTunes Support' }, { 'index': 0.5, 'value': 2, 'fill': '#8ef4f4', 'label': 'iOS Training' }, { 'index': 0.3, 'value': 1, 'fill': '#a1f6f6', 'label': 'Technical Support' }],

    'barCircleWeb': [{ 'index': 1.3, 'value': 6, 'fill': '#44eeee', 'label': 'Illustrator' }, { 'index': 1.1, 'value': 5, 'fill': '#56efef', 'label': 'Style Guides' }, { 'index': 0.9, 'value': 4, 'fill': '#69f1f1', 'label': 'Mood Boards' }, { 'index': 0.7, 'value': 3, 'fill': '#7cf3f3', 'label': 'Photoshop' }, { 'index': 0.5, 'value': 2, 'fill': '#8ef4f4', 'label': 'Research' }, { 'index': 0.3, 'value': 1, 'fill': '#a1f6f6', 'label': 'Digital Designing' }]
};

// flags for job picked, only do animation on first click.
var appleFlag = false;

function drawBarCircleChart(data, target, values, labels) {
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

    var arc = d3.svg.arc().innerRadius(function (d, i) {
        return d.index / sectorScale * radius + radScale;
    }).outerRadius(function (d, i) {
        return (d.index / sectorScale + sectorWidth / sectorScale) * radius + radScale;
    }).startAngle(Math.PI).endAngle(function (d) {
        return Math.PI + d.value / size * 2 * Math.PI;
    });

    var path = target.selectAll('path').data(data);

    //TODO: seperate color and index from data object, make it a pain to update object order
    path.enter().append('svg:path').attr('fill', function (d, i) {
        return d.fill;
    }).attr('stroke', '#D1D3D4').transition().ease('elastic').duration(1000).delay(function (d, i) {
        return i * 100;
    }).attrTween('d', arcTween);

    valueText.selectAll('tspan').data(data).enter().append('tspan').attr({
        x: 40,
        y: function y(d, i) {
            return i * 28;
        },
        'text-anchor': 'end'
    }).text(function (d, i) {
        return data[i].value;
    });

    labelText.selectAll('tspan').data(data).enter().append('tspan').attr({
        x: 0,
        y: function y(d, i) {
            return i * 28;
        }
    }).text(function (d, i) {
        return data[i].label;
    });

    function arcTween(b) {
        var i = d3.interpolate({ value: 0 }, b);
        return function (t) {
            return arc(i(t));
        };
    }
}

// Animation Queue
drawBarCircleChart(chartData.barCircleWeb, '#circleBar-web-chart', '#circleBar-web-values', '#circleBar-web-labels');

function apple() {
    if (!appleFlag) {
        drawBarCircleChart(chartData.barCircleMobile, '#circleBar-mobile-chart', '#circleBar-mobile-values', '#circleBar-mobile-labels');
        appleFlag = true;
    }
}
d3.select('#circleBar-web-icon').transition().delay(500).duration(500).attr('opacity', '1');
d3.select('#circleBar-web-text').transition().delay(750).duration(500).attr('opacity', '1');

d3.select('#circleBar-web-clipLabels').transition().delay(600).duration(1250).attr('height', '150');

d3.select('#circleBar-mobile-icon').transition().delay(800).duration(500).attr('opacity', '1');
d3.select('#circleBar-mobile-text').transition().delay(1050).duration(500).attr('opacity', '1');
d3.select('#circleBar-mobile-clipLabels').transition().delay(900).duration(1250).attr('height', '150');
//# sourceMappingURL=other.js.map