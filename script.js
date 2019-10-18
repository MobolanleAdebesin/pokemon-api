
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
                for(let i = 0; i < buttons.length; i++){
                buttons[i].addEventListener("click", divAppear); 

                function divAppear(evt){
                    let buttonText = evt.target.innerText;
                  if(buttonText === "Type"){
                     let  divType = document.getElementById("modal-type");
                     divType.innerText = `Charizard is both ${res.types[0].type.name} type and ${res.types[1].type.name} type! `
                    divType.classList.toggle("hidden");
                     //   console.log(`Charizard is both ${res.types[0].type.name} type and ${res.types[1].type.name} type! `);
                  }
                }

            }









               
            })
            .catch(err =>{
                console.log("Something went wrong", err);
            })
