let botaoAdicionar = document.getElementsByClassName('button-add');
console.log (botaoAdicionar);






function adicionarAmigo(){
    console.log('click')
}
botaoAdicionar.addEventListener("click",function (e) {
    console.log(this.className); // logs the className of my_element
    console.log(e.currentTarget === this); // logs true
  })