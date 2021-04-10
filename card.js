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
      this.elem.addEventListener("click", this.onClick.bind(this));
      this.event = new Event("click")
      if(!this.description){
        this.elem.getElementsByClassName("card-hr")[0].classList.add("card-hidden");
        this.elem.getElementsByClassName("card-description")[0].classList.add("card-hidden");
      }
  }

  onClick(e){
    if(this.href){
      window.location.href = this.href;
    }
  }

  update(){
    this.elem.innerHTML = `<p class='card-title'>${this.title}</p> <hr class='card-hr'> <p class='card-description'>${this.description}</p>`;
  }

  appendTo(parent) {
    parent.appendChild(this.elem);
  }
};