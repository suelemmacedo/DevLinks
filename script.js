function toggleMode() {
  const html = document.documentElement //document.documentElement é uma propriedade que representa o elemento HTML raiz (root) do documento. Em outras palavras, é o elemento principal da página, que envolve todo o conteúdo HTML presente no documento.

  html.classList.toggle("light") //forma mais fácil.

  /*   Outra forma de fazer: */
  /* if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  } */

  /*   Troca de Imagem */
  // Pegar a tag img
  const img = document.querySelector("#profile img")

  // Substituir a imagem
  if (html.classList.contains("light")) {
    // Se tiver light mode, adicionar a img light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // Se tiver sem light mode, manter a img normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
