
let url = "https://pokeapi.co/api/v2/"; 

fetch(url+ "pokemon/6/")
            .then(res =>{
                return res.json();
            })
            .then( res => {
                // console.log(res.pokemon[0].pokemon.name);
                // console.log(res.name);
                // console.log(res.weight);
                // // console.log(res.moves);
                // for (let i = 0; i < 5; i++){
                //     console.log(res.moves[i].move.name)
                // }
                let buttons = document.querySelectorAll(".button");
                let body = document.querySelector("body");
                for(let i = 0; i < buttons.length; i++){
                buttons[i].addEventListener("click", divAppear); 

                function divAppear(evt){
                    let buttonText = evt.target.innerText;
                    body.style.backgroundColor = "black"
                    body.style.opacity = 0.9;

                  if(buttonText === "Type"){
                     let  divType = document.getElementById("modal-type");
                     let divh1 = document.querySelector(".divh1");
                     divh1.innerText = `Charizard is both ${res.types[0].type.name} type and ${res.types[1].type.name} type! `
                    divType.classList.toggle("hidden");
                    
                  }
                }

            }









               
            })
            .catch(err =>{
                console.log("Something went wrong", err);
            })
