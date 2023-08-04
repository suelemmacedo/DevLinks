function toggleMode() {
  const html = document.documentElement //document.documentElement é uma propriedade que representa o elemento HTML raiz (root) do documento. Em outras palavras, é o elemento principal da página, que envolve todo o conteúdo HTML presente no documento.

  html.classList.toggle("light") //forma mais fácil.

  /*   Outra forma de fazer: */
  /* if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  } */
}
