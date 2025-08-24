const smMenuBtn = document.querySelector('.main-header__sm-scr-nav-btn')
const smMenu = document.querySelector('.main-header__sm-menu')
const smMenuCloseBtn = document.querySelector('.main-header__sm-menu-close')

const smMenuLinks = document.querySelectorAll('.main-header__sm-menu-link')
const smMenuLink1 = document.querySelector('.main-header__sm-menu-link--1')
const smMenuLink2 = document.querySelector('.main-header__sm-menu-link--2')
const smMenuLink3 = document.querySelector('.main-header__sm-menu-link--3')
const smMenuLink4 = document.querySelector('.main-header__sm-menu-link--4')

smMenuBtn.addEventListener('click', () => {
  smMenu.style.transitionDelay = '0s'
  smMenu.classList.add('main-header__sm-menu--active')

  smMenuLink1.style.transitionDelay = '.5s'
  smMenuLink1.style.transform = 'translateY(0)'
  smMenuLink1.style.opacity = '1'

  smMenuLink2.style.transitionDelay = '.8s'
  smMenuLink2.style.transform = 'translateY(0)'
  smMenuLink2.style.opacity = '1'

  smMenuLink3.style.transitionDelay = '1.1s'
  smMenuLink3.style.transform = 'translateY(0)'
  smMenuLink3.style.opacity = '1'

  smMenuLink4.style.transitionDelay = '1.4s'
  smMenuLink4.style.transform = 'translateY(0)'
  smMenuLink4.style.opacity = '1'
})

smMenuLinks.forEach((ele) => {
  ele.addEventListener('click', () => {
    smMenuLink4.style.transitionDelay = '0s'
    smMenuLink4.style.transform = 'translateY(50px)'
    smMenuLink4.style.opacity = '0'

    smMenuLink3.style.transitionDelay = '.3s'
    smMenuLink3.style.transform = 'translateY(50px)'
    smMenuLink3.style.opacity = '0'

    smMenuLink2.style.transitionDelay = '.6s'
    smMenuLink2.style.transform = 'translateY(50px)'
    smMenuLink2.style.opacity = '0'

    smMenuLink1.style.transitionDelay = '.9s'
    smMenuLink1.style.transform = 'translateY(50px)'
    smMenuLink1.style.opacity = '0'

    smMenu.style.transitionDelay = '1.2s'
    smMenu.classList.remove('main-header__sm-menu--active')

    setTimeout(() => {
      document.getElementById(ele.name).scrollIntoView()
    }, 1300)
  })
})

smMenuCloseBtn.addEventListener('click', () => {
  smMenuLink4.style.transitionDelay = '0s'
  smMenuLink4.style.transform = 'translateY(50px)'
  smMenuLink4.style.opacity = '0'

  smMenuLink3.style.transitionDelay = '.3s'
  smMenuLink3.style.transform = 'translateY(50px)'
  smMenuLink3.style.opacity = '0'

  smMenuLink2.style.transitionDelay = '.6s'
  smMenuLink2.style.transform = 'translateY(50px)'
  smMenuLink2.style.opacity = '0'

  smMenuLink1.style.transitionDelay = '.9s'
  smMenuLink1.style.transform = 'translateY(50px)'
  smMenuLink1.style.opacity = '0'

  smMenu.style.transitionDelay = '1.2s'
  smMenu.classList.remove('main-header__sm-menu--active')
})





// ---
const themeColorSelector = document.querySelector('.themeClrSelector')
const themeColorSelectorInput = document.querySelector(
  '.themeClrSelector__input'
)
const root = document.documentElement;



const hexToRgb = (hex) => {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

const eventFire = (el, etype) => {
  if (el.fireEvent) {
    el.fireEvent('on' + etype)
  } else {
    let evObj = document.createEvent('Events')
    evObj.initEvent(etype, true, false)
    el.dispatchEvent(evObj)
  }
}

themeColorSelector.addEventListener('click', () => {
  eventFire(themeColorSelectorInput, 'input')
})

const setDynamicColor = (color) => {

  const { r, g, b } = hexToRgb(`${color}`)
  
  root.style.setProperty('--themeColor', `${r},${g},${b}`);
  //localStorage.setItem('color', color)
}

themeColorSelectorInput.addEventListener('input', (e) => {
  setDynamicColor(e.target.value)
})

// if (localStorage.getItem('color')) {
//   let userSelectedColor = localStorage.getItem('color')
//   themeColorSelectorInput.value = userSelectedColor
//   setDynamicColor(userSelectedColor)
// }

// ---
const headerLogoConatiner = document.querySelector('.main-header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})


// Certificate Modal Functionality
function openCertificateModal(imageSrc, title) {
  const modal = document.getElementById('certificateModal');
  const modalImage = document.getElementById('certificateModalImage');
  const modalTitle = document.getElementById('certificateModalTitle');
  
  modal.style.display = 'block';
  modalImage.src = imageSrc;
  modalTitle.textContent = title;
  
  // Prevent body scroll when modal is open
  document.body.style.overflow = 'hidden';
}

function closeCertificateModal() {
  const modal = document.getElementById('certificateModal');
  modal.style.display = 'none';
  
  // Re-enable body scroll
  document.body.style.overflow = 'auto';
}

// Event Listeners for Modal
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('certificateModal');
  const closeBtn = document.querySelector('.certificate-modal-close');
  
  // Close modal when clicking the X button
  if (closeBtn) {
    closeBtn.addEventListener('click', closeCertificateModal);
  }
  
  // Close modal when clicking outside the modal content
  if (modal) {
    modal.addEventListener('click', function(event) {
      if (event.target === modal) {
        closeCertificateModal();
      }
    });
  }
  
  // Close modal with Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal && modal.style.display === 'block') {
      closeCertificateModal();
    }
  });
});


function sendMail(event) {
  event.preventDefault();

  // Get form values
  const name = document.querySelector('.contact__form-field-input[placeholder="Enter Your Name"]').value;
  const email = document.querySelector('.contact__form-field-input[placeholder="Enter Your Email"]').value;
  const message = document.querySelector('textarea.contact__form-field-input').value;

  // Customize your receiving email address here
  const targetEmail = 'your.email@gmail.com';

  // Construct the mailto link
  const mailtoLink = `mailto:${targetEmail}?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`;

  // Open Gmail compose window (or default mail client)
  window.location.href = mailtoLink;

  // Optionally: return false to prevent real form submission
  return false;
}
