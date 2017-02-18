$(function(){
    // https://github.com/mattboldt/typed.js/blob/master/README.md
    // http://jeffweisbein.com - insperation but used code above.
    $('#element').typed({
      strings: ['Nicolas-Resume:~ nicolas$ ^1000 cat about.txt ^1000 <br>' +
      'I am a current student at the University of Central Florida obtaining a Bachelor Degree in Digital Media - focus in Web Design - with a minor in Computer Science. <br>'+
      ' My passion lies between the intersection of technology and art. <br> I enjoy both programming for web and software engineering. <br>' +
      ' At the same time, I also love to design what the layout or interaction for the software will be like. <br> ' +
      ' In school, thus far, I have been educated in both an engineering and an artistic environment. <br> ' +
      ' I continue to learn out of the classroom about both fields to refine my skills. <br>' +
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
      });
    }
});
