const elementStars = document.querySelectorAll('.tours__features-description--stars');

elementStars.forEach((element) => {
  const starsSvg = element.querySelectorAll('.tours__star');
  const indexForFill = Number(element.querySelector('span').textContent.charAt(0));

  for (let i = 0; i < indexForFill; i++) {
    starsSvg[i].style.fill = '#ffffff';
  }
});
