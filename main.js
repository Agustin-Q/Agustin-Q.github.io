console.log("hello")
fetch('https://api.github.com/users/Agustin-Q/repos')
  .then(response => response.json())
  .then((data) => {
    for (let repo of data){
      console.log(repo.name);
      if(repo.homepage){
        let card = new Card(repo.name, repo.description, repo.homepage);
        card.appendTo(document.getElementById("cards"));
      }
    }
  });
