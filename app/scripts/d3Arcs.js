// Starting arc code comes from - https://codepen.io/rogerxu/pen/rLqvd
// Global color vars
var colors = {
    'pink': '#ee4488',
    'yarn': '#552244',
    'purple': '#443366',
    'blue' : '#44eeee',
    'yellow': '#ffffde',
    'pastele': '#ffccdd'
};

// flags for colorPicked, only do animation on first click.
var webFlag = false;
var frameworksFlag = false;
var engineeringFlag = false;
var softwareFlag = false;

// Call each arc that needs to be created, first is called when in view, rest by click.
// Also including listner for the d3Spiral.js (for work - at Universal).
//http://materializecss.com/scrollfire.html
var options = [
      {selector: '#two', offset: 700, callback: function(el) {
        web();
      } },
      {selector: '#three', offset: 700, callback: function(el) {
        universal();
      } }
    ];
 Materialize.scrollFire(options);

function web() {
  if (!webFlag) {
    createArc('html', 'HTML', .90, colors.blue);
    createArc('css', 'CSS', .85, colors.blue);
    createArc('javascript', 'JavaScript', .90, colors.blue);
    createArc('php', 'PHP', .90, colors.blue);
    webFlag = true;
    }
}

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
    createArc('c', 'C', .90, colors.blue);
    createArc('java', 'Java', .80, colors.blue);
    engineeringFlag = true;
  }
}

function software() {
  if (!softwareFlag) {
    createArc('photoshop', 'Photoshop', .90, colors.blue);
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

  var arc = d3.svg.arc()
      .startAngle(0)
      .innerRadius(radius)
      .outerRadius(radius - border);

  var parent = d3.select(span);

  var svg = parent.append('svg')
      .attr('width', boxSize)
      .attr('height', boxSize);

  var defs = svg.append('defs');

  var filter = defs.append('filter')
      .attr('id', 'blur');

  filter.append('feGaussianBlur')
      .attr('in', 'SourceGraphic')
      .attr('stdDeviation', '7');

  var g = svg.append('g')
      .attr('transform', 'translate(' + boxSize / 2 + ',' + boxSize / 2 + ')');

  var meter = g.append('g')
      .attr('class', 'progress-meter');

  meter.append('path')
      .attr('class', 'background')
      .attr('fill', '#ccc')
      .attr('fill-opacity', 0.5)
      .attr('d', arc.endAngle(twoPi));

  var foreground = meter.append('path')
      .attr('class', 'foreground')
      .attr('fill', color)
      .attr('fill-opacity', 1)
      .attr('stroke', color)
      .attr('stroke-width', 5)
      .attr('stroke-opacity', 1)
      .attr('filter', 'url(#blur)');

  var front = meter.append('path')
      .attr('class', 'foreground')
      .attr('fill', color)
      .attr('fill-opacity', 1);

  var numberText = meter.append('text')
      .attr('fill', '#fff')
      .attr('text-anchor', 'middle')
      .attr('dy', '.35em');

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
