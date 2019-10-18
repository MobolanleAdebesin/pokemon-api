
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
                     let divTypeh1 = document.querySelector(".divTypeh1");
                     divTypeh1.innerText = `Charizard is both ${res.types[0].type.name} type and ${res.types[1].type.name} type! `
                    divType.classList.toggle("hidden");
                    
                  }
                  else if(buttonText === "Moves"){
                      let moves = [];
                    for (let i = 0; i < 5; i++){
                         moves.push(res.moves[i].move.name);
                        }
                      let divMoves = document.getElementById("modal-moves");
                      let divMovesh1 = document.querySelector(".divMovesh1");
                    //   divMovesh1.innerText = 
                    let charizardMoves = "Charizards moves are: \n"
                    for( let j = 0; j < moves.length; j++){
                        charizardMoves = charizardMoves + "\n" + moves[j];
                    }
                    divMovesh1.innerText = charizardMoves;
                    divMoves.classList.toggle("hidden");
                      
                  }
                  else if(buttonText === "Weight"){
                      let divWeight = document.getElementById("modal-weight");
                      let divWeighth1 = document.querySelector(".divWeighth1");
                      divWeighth1.innerText = `Charizard's weight is ${res.weight}`;
                      divWeight.classList.toggle("hidden");
                  }
                  else if(buttonText === "Abilities"){
                      let divAbilities = document.getElementById("modal-abilities");
                      let divAbilitiesh1 = document.querySelector(".divAbilitiesh1");
                     
                      divAbilitiesh1.innerText = `Charizard's abilities are ${res.abilities[0].ability.name} and ${res.abilities[1].ability.name}!`;
                      divAbilities.classList.toggle("hidden");
                  }
                }

            }









               
            })
            .catch(err =>{
                console.log("Something went wrong", err);
            })
