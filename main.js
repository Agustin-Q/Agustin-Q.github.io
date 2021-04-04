console.log("hello")
fetch('https://api.github.com/users/Agustin-Q/repos')
  .then(response => response.json())
  .then((data) => {
    for (let repo of data){
      console.log(repo);
      let p = document.createElement("p");
      let elem = document.createElement("a");
      elem.innerText = `https://agustin-q.github.io/${repo.name}`;
      elem.href = `https://agustin-q.github.io/${repo.name}`;
      p.appendChild(elem);
      document.getElementById("links").appendChild(p);
    }
  });