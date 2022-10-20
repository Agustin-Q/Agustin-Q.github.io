class Card{
  constructor(title, arg2, arg3){
    if(arguments.length == 3){
      this.title = title;
      this.description = arg2;
      this.href = arg3;
    } else if (arguments.length == 2 ){
      this.title = title;
      this.href = arg2;
    }
      this.elem = document.createElement("div");
      this.elem.classList.add("card-div");
      this.update();
      if(!this.description){
        this.elem.getElementsByClassName("card-hr")[0].classList.add("card-hidden");
        this.elem.getElementsByClassName("card-description")[0].classList.add("card-hidden");
      }
      let link = document.createElement("a");
      link.classList.add("card_link");
      link.classList.add("card-link");
      link.href = this.href;
      link.innerHTML = `<span class="link-span"></span>`;
      this.elem.appendChild(link);
  }

  update(){
    this.elem.innerHTML = `<p class='card-title'>${this.title}</p> <hr class='card-hr'> <p class='card-description'>${this.description}</p>`;
  }

  appendTo(parent) {
    parent.appendChild(this.elem);
  }
};