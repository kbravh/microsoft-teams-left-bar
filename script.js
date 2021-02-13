let leftRail, linkList

// wait for the DOM to load
window.addEventListener('load', () => {
  // set up a small interval to keep checking for the angular elements
  let interval = setInterval(() => {
    leftRail = document.querySelector(`.ts-left-rail-wrapper`)
    linkList = document.querySelector(`ul.app-bar-width`)
    // once the elements are defined, clear the timer and add the toggle button
    if(leftRail && linkList){
      clearInterval(interval)
      addButton()
    }
  }, 250);
})

// add toggle button and set up click listener
const addButton = () => {
  // create a new li list item for the sidebar
  const toggleListItem = document.createElement('li')
  // give the list item a class for styling
  toggleListItem.classList.add(`left-rail-toggle`)
  // creat a button inside the li
  const toggleButton = document.createElement('button')
  // embed the svg and "Toggle" into the button
  toggleButton.innerHTML = `<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M19.32 10.78l-1.98-.023v-9.22h2c.36 0 .66-.344.66-.757 0-.413-.3-.757-.66-.757L14 0h-.02a.637.637 0 00-.22.046c-.1.068-.16.115-.24.183L7.06 7.661H.66c-.36 0-.66.343-.66.756s.3.757.66.757h2v9.288h-2c-.36.001-.66.345-.66.782 0 .435.3.756.66.756h6.66c.18 0 .34-.092.48-.23l6.48-7.476h5.06c.36 0 .66-.367.66-.78 0-.413-.32-.757-.68-.734zm-5.34.046c-.18 0-.34.091-.46.229l-6.46 7.408H4V9.175h3.34c.18 0 .34-.092.48-.23l6.46-7.408H16v9.312z"/></svg>Toggle`
  // insert the button into the li
  toggleListItem.append(toggleButton)

  // insert our new list item before the 6th existing item
  linkList.insertBefore(toggleListItem, linkList.children[5])

  // add an event listener to the new button
  toggleListItem.addEventListener('click', () => {
    //toggle the class "hidden" each time the button is clicked
    leftRail.classList.toggle('hidden')
  })
}
