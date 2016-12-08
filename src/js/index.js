
require('../../src/css/style.scss')

;(()=>{
  "use strict"

  document.addEventListener("DOMContentLoaded", function(e) {
          // Declare your variables
          const body = document.getElementsByTagName('body')[0]
          const navToggle = document.getElementById('primary-nav-toggle')
          const nav = document.getElementById('primary-nav')
          const masthead = document.getElementById('masthead')
          let mastheadHeight = document.getElementById('masthead').clientHeight
          const html = document.getElementsByTagName('html')[0]

          // Set padding bassed on height of the masthead
          html.style.paddingTop = ~~(mastheadHeight)
          nav.style.paddingTop = ~~(mastheadHeight)

          let ToggleNav = () => {
              (navToggle.innerText == 'menu') ? navToggle.innerText = 'close': navToggle.innerText = 'menu'
              nav.classList.toggle('is-active')
              navToggle.classList.toggle('is-active')
              body.classList.toggle('is-active')
          }

          // Toggle side nav on select of toggle button
          navToggle.addEventListener("click", () => {;
              ToggleNav()
          })

          // Touch/swipe event to close navigation
          let startX, newX
          let WhichSwipe = (newX, startX) => {
              if (newX > (startX + 100)) {;
                  (body.classList.contains('is-active')) ? ToggleNav(): null
              } else {
                  return false
              }
          }
          let handleTouchStart = (e) => {
              startX = e.changedTouches[0].clientX
          }

          let handleTouchMove = (e) => {
              newX = e.changedTouches[0].clientX
          }

          let handleTouchEnd = (e) => {
              WhichSwipe(newX, startX)
          }

          document.addEventListener('touchstart', handleTouchStart, false)
          document.addEventListener('touchmove', handleTouchMove, false)
          document.addEventListener('touchend', handleTouchEnd, false)
              // END onload
      })

})() // END IIFE
