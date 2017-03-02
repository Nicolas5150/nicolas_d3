$(function(){
    // https://github.com/mattboldt/typed.js/blob/master/README.md
    // http://jeffweisbein.com - insperation but used code above.
    $('#element').typed({
      strings: ['Nicolas-Resume:~ nicolas$ ^100 cat about.txt ^100 <br>' +
      'A University of Central Florida student obtaining a Bachelors Degree in Digital Media - focus in Web Design - with a minor in Computer Science. <br>'+
      ' My passion lies between the intersection of technology and art. <br>' +
      'Nicolas-Resume:~ nicolas$ ^1000 ./resume.exe ^100 <br>' +
      'Loading resume'],
      typeSpeed: -2,
      cursorChar: '█',
      callback: function() {loadingBar();}
    });

    // Call once the first section is finished.
    function loadingBar() {
      $('#element2').typed({
        strings: ['10%','20%','30%','50%','80%','100%'],
        typeSpeed: 0,
        showCursor: false,
      });
    }
});
