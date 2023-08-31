window.addEventListener('scroll', function() {
    var whiteLogo = document.querySelector('.white-logo');
    var blackLogo = document.querySelector('.black-logo');
    
    if (window.scrollY > 0) {
      whiteLogo.style.display = 'none';
      blackLogo.style.display = 'block';
    } else {
      whiteLogo.style.display = 'block';
      blackLogo.style.display = 'none';
    }
  });
  