const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

const swiper = new Swiper(
  '.swiper',
  {
    speed: 500,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  }
)

// Swiper-slide
const scrollReveal = ScrollReveal({
  origin: 'right',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #service header, #service .card,
  #social-work .image, #social-work .text,
  #tech-solution .image, #tech-solution .text,
  #contact .text, #contact input,
  #contact textarea,
  footer .brand, footer .social,
  footer .links
  `,
  { interval: 100 }
)

const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
});

const paragraph = `
  <p>
    <p>Todos os direitos reservados TaBarato ${new Date().getFullYear()}</p>
  <p>
`;

document.getElementById('copyright').innerHTML = paragraph

const sendWpp = () => {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  let urlSend = "https://wa.me/5591984268089?text="
        + "*Formulário de Contato*" + "%0a" 
        + "%0a" 
        + "*Nome*: " + name + "%0a" 
        + "*E-mail*: " + email + "%0a"
        + "*Mensagem*: " + message;
  window.open(urlSend, '_blank').focus()
}