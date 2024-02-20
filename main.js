// Supports weights 100-900

import '@fontsource-variable/outfit';
import "./modernreset.css"
import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'


// Dark mode toggle 

const body = document.getElementById("body-el");
const main = document.querySelector(".main-content")
const h2s = document.querySelectorAll("h2")
const prep = document.querySelector(".main_recipe--prep")
const h1 = document.querySelector('.recipe__title')
const ol = document.querySelectorAll('ol > li')
const prepTitle = document.querySelector('.recipe-prep__title')

const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", toggleColor);

const darkBg =  "dark-bg"
const darkCard = "dark-card"
const darkTitles = "dark-titles"
const darkPrep = "dark-prep"
const darkRecipleTitle = "dark-recipe-title"
const darkLiMarker = 'dark-li-marker'
const darkPrepTitle = "dark-prep-title"

function toggleColor() {
h1.classList.toggle(darkRecipleTitle)
prep.classList.toggle(darkPrep)
body.classList.toggle(darkBg)
main.classList.toggle(darkCard)
h2s.forEach((titles) => {
  titles.classList.toggle(darkTitles)
})
ol.forEach((lis) => {
  lis.classList.toggle(darkLiMarker)
})
prepTitle.classList.toggle(darkPrepTitle)
}