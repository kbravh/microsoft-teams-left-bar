let leftRail, linkList, appListLink

window.addEventListener('load', () => {
  let interval = setInterval(() => {
    leftRail = document.querySelector(`.ts-left-rail-wrapper`)
    linkList = document.querySelector(`ul.app-bar-width`)
    if(leftRail && linkList){
      clearInterval(interval)
      addButton()
    }
  }, 250);
})

const addButton = () => {
  const toggleListItem = document.createElement('li')
  toggleListItem.classList.add(`left-rail-toggle`)
  const toggleButton = document.createElement('button')
  toggleButton.innerHTML = `<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M19.32 10.78l-1.98-.023v-9.22h2c.36 0 .66-.344.66-.757 0-.413-.3-.757-.66-.757L14 0h-.02a.637.637 0 00-.22.046c-.1.068-.16.115-.24.183L7.06 7.661H.66c-.36 0-.66.343-.66.756s.3.757.66.757h2v9.288h-2c-.36.001-.66.345-.66.782 0 .435.3.756.66.756h6.66c.18 0 .34-.092.48-.23l6.48-7.476h5.06c.36 0 .66-.367.66-.78 0-.413-.32-.757-.68-.734zm-5.34.046c-.18 0-.34.091-.46.229l-6.46 7.408H4V9.175h3.34c.18 0 .34-.092.48-.23l6.46-7.408H16v9.312z"/></svg>Toggle`
  toggleListItem.append(toggleButton)

  linkList.insertBefore(toggleListItem, linkList.children[5])

  toggleListItem.addEventListener('click', () => {
    leftRail.classList.toggle('hidden')
  })
}