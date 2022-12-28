function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a imagem
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "foto de Juliana Portela usando óculos, sorrindo e de camisa colorida")
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "foto de Juliana Portela usando óculos de sol, sorrindo e de camisa na cor vinho")
  }

  //(comentar várias linhas = ctrl ;)
  //o que a função .toggle() faz:

  // if(html.classList.contains('light')){
  //   html.classList.remove('light)
  // } else{
  //   html.classList.add('light')
  // }
}
