let openButtons = document.querySelectorAll('[data-modal-target]')
let closeButtons = document.querySelectorAll('[data-close-button]')
let overlay = document.getElementById('overlay')




openButtons.forEach(button => {
  button.addEventListener('click', () => {
    let modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

//-----------------------------1 box -0 ----------------------------------------------------------------------------/

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      let modal = button.closest('#mainbox')
      closeModal(modal)
    })
  })

  //-----------------------------1 box -1 ----------------------------------------------------------------------------/
  
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      let modal = button.closest('#mainbox1')
      closeModal(modal)
    })
  })
//-----------------------------1 box -2 ----------------------------------------------------------------------------/
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      let modal = button.closest('#mainbox2')
      closeModal(modal)
    })
  })

//-----------------------------1 box -3 ----------------------------------------------------------------------------/
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      let modal = button.closest('#mainbox3')
      closeModal(modal)
    })
  })

//-----------------------------1 box -4 ----------------------------------------------------------------------------/
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      let modal = button.closest('#mainbox4')
      closeModal(modal)
    })
  })
//-----------------------------1 box -5 ----------------------------------------------------------------------------/
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      let modal = button.closest('#mainbox5')
      closeModal(modal)
    })
  })

  //-----------------------------1 box -6 ----------------------------------------------------------------------------/
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      let modal = button.closest('#mainbox6')
      closeModal(modal)
    })
  })

    //-----------------------------1 box -7 ----------------------------------------------------------------------------/
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      let modal = button.closest('#mainbox7')
      closeModal(modal)
    })
  })

  //-----------------------------1 box -8 ----------------------------------------------------------------------------/
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      let modal = button.closest('#mainbox8')
      closeModal(modal)
    })
  })

  //-----------------------------1 box -9 ----------------------------------------------------------------------------/
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      let modal = button.closest('#mainbox9')
      closeModal(modal)
    })
  })

  //-----------------------------1 box -10 ----------------------------------------------------------------------------/
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      let modal = button.closest('#mainbox10')
      closeModal(modal)
    })
  })

//-----------------------------1 box -11 ----------------------------------------------------------------------------/
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      let modal = button.closest('#mainbox11')
      closeModal(modal)
    })
  })

//-----------------------------1 box -12 ----------------------------------------------------------------------------/
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      let modal = button.closest('#mainbox12')
      closeModal(modal)
    })
  })

//-----------------------------1 box -13 ----------------------------------------------------------------------------/
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      let modal = button.closest('#mainbox13')
      closeModal(modal)
    })
  })

//-----------------------------1 box -14 ----------------------------------------------------------------------------/
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      let modal = button.closest('#mainbox14')
      closeModal(modal)
    })
  })

//-----------------------------1 box -15 ----------------------------------------------------------------------------/
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      let modal = button.closest('#mainbox15')
      closeModal(modal)
    })
  })

//-----------------------------1 box -16 ----------------------------------------------------------------------------/
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      let modal = button.closest('#mainbox16')
      closeModal(modal)
    })
  })

  //-----------------------------1 box -17 ----------------------------------------------------------------------------/
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      let modal = button.closest('#mainbox17')
      closeModal(modal)
    })
  })

//-----------------------------1 box -18 ----------------------------------------------------------------------------/
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      let modal = button.closest('#mainbox18')
      closeModal(modal)
    })
  })

  //-----------------------------1 box -19 ----------------------------------------------------------------------------/
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      let modal = button.closest('#mainbox19')
      closeModal(modal)
    })
  })

//-----------------------------1 box -20 ----------------------------------------------------------------------------/
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      let modal = button.closest('#mainbox20')
      closeModal(modal)
    })
  })

 //-----------------------------1 box -21 ----------------------------------------------------------------------------/
 closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      let modal = button.closest('#mainbox21')
      closeModal(modal)
    })
  })

 //-----------------------------1 box -22 ----------------------------------------------------------------------------/
 closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      let modal = button.closest('#mainbox22')
      closeModal(modal)
    })
  })

 //-----------------------------1 box -23 ----------------------------------------------------------------------------/
 closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      let modal = button.closest('#mainbox23')
      closeModal(modal)
    })
  })

  
 //-----------------------------1 box -24 ----------------------------------------------------------------------------/
 closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    let modal = button.closest('#mainbox24')
    closeModal(modal)
  })
})


 //-----------------------------1 box -25 ----------------------------------------------------------------------------/
 closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    let modal = button.closest('#mainbox25')
    closeModal(modal)
  })
})


 //-----------------------------1 box -26 ----------------------------------------------------------------------------/
 closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    let modal = button.closest('#mainbox26')
    closeModal(modal)
  })
})

 //-----------------------------1 box -27 ----------------------------------------------------------------------------/
 closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    let modal = button.closest('#mainbox27')
    closeModal(modal)
  })
})
function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
  }

//---------------------------------------------------------------------------------------------------------/
  