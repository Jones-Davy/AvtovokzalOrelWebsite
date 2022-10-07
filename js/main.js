

  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
   // reset: true,
  })
  sr.reveal(`.main__title`)
  sr.reveal(`.new-search-form`, {delay: 500})
  sr.reveal(`.popular__card`, {origin: 'bottom', delay: 300, interval: 100})
  sr.reveal(`.aside-block`, {origin: 'left', delay: 300, distance: '40px'})
  if (document.documentElement.clientWidth > 768) {
  sr.reveal( `.footer__data`, {delay: 300, origin: 'right'} )
  sr.reveal( `.footer__social`, {delay: 500, origin: 'bottom', interval: 100} )


  }
  

