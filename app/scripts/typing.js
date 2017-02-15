$(function(){
    // https://github.com/mattboldt/typed.js/blob/master/README.md
    // http://jeffweisbein.com - insperation but used code above.
    $('#element').typed({
      strings: ['Nicolas-Resume:~ nicolas$ ^1000 cat intro.txt ^1000 <br>' +
      'Current student at the University of Central Florida obtaining a Bachelor Degree in Web Design - with a minor in Computer Science. <br>'
      +' My passion lies between the intersection of technology and art. <br>' +
      'Nicolas-Resume:~ nicolas$ ^1000 ./resume.exe ^1000 <br>' +
      'Loading resume'],
      typeSpeed: 0,
      cursorChar: '█',
      callback: function() {loadingBar();}
    });

    // Call once the first section is finished.
    function loadingBar() {
      $('#element2').typed({
        strings: ['10%','20%','30%','50%','80%','100%'],
        typeSpeed: 0,
        showCursor: false,
        callback: function() {removeTerminal();}
      });
    }

    // Page redirect to the resume page
    function removeTerminal() {
      window.location.href = '../html/resume.html';
    }
});
