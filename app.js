//
// RPS(Rock, Paper, Scissors) by a.Cincarevic
//

let gameRounds = 3;
let game = { player : 0, computer : 0,  rounds : gameRounds, roundsPlayed : 0 };

function Play(val){
	
	game.roundsPlayed++;
	const options = ["Rock", "Paper", "Scissor"];
	const randomOption = options[Math.floor(Math.random()*options.length)];
	const round = { player : val, computer : randomOption };

	let result = checkRound(round);
	console.log({ result , game , round , val });

	
	document.querySelector('.info').removeAttribute('hidden');

	document.querySelector('.result').innerHTML = result;
	document.querySelector('.result-player').innerText =  game.player;
	document.querySelector('.result-computer').innerText =  game.computer;
	document.querySelector('.rounds').innerText =  game.rounds +"/" + gameRounds;

	if(game.rounds === 0){
		console.log('Last round, Play again ?!');
		$('#replay').toggle();
		//$( ".info" ).toggle('slow');
		//document.body.classList.add('gameDone');
		//resetGame();
		//enable('scissor');
	}
}


function checkRound(options){
	let stat;

	//console.log('Check Round : ' , options, game)
	
	if(options && options.player && options.computer){

		const { player , computer } = options;
		const selectedClass = `.${player.toLowerCase()}`;
		$(selectedClass).fadeOut().fadeIn();
		if(player === computer){
			stat = "TIE";
			$(selectedClass).removeAttr("disabled");
			document.querySelector(selectedClass).style.removeProperty('background-color');
		} 
		else{
			game.rounds--;
			
			// Show animation on what opponent selected
			$(`.${computer.toLowerCase()}`).fadeOut('slow').fadeIn();
			
			switch(player){
				case "Rock":

					if(computer == "Paper"){
						stat = "&#128533; You Lost (Paper)";
						game.computer++;
					}else if(computer == "Scissor"){
						stat = "&#128512; You WIN (Scissor)";
						game.player++;
					}
					break;

				case "Paper": 

					if(computer == "Scissor"){
						stat = "&#128533; You Lost (Scissor)";
						game.computer++;
					}else if(computer == "Rock"){
						stat = "&#128512; You WIN (Rock)";
						game.player++;
					}
					break;

				case "Scissor":

					if(computer == "Rock"){
						stat = "&#128533; You Lost (Rock)";
						game.computer++;
					}else if(computer == "Paper"){
						stat = "&#128512; You WIN (Paper)";
						game.player++;
					}
					break;
				
				default: break;
			}
		}
	}else{

	}
	
	return stat;
}


function resetGame(){
	
	["rock", "paper", "scissor"].map((i,k)=>{
		document.querySelector(`.${i}`).removeAttribute('disabled');
		document.querySelector(`.${i}`).style.removeProperty('background-color');
	});

	//document.querySelector('.info').setAttribute('hidden','');
	document.querySelector('.result-player').innerText =  '0';
	document.querySelector('.result-computer').innerText =  '0';
	document.querySelector('.rounds').innerText = "3/3";

	game = { player : 0, computer : 0,  rounds : gameRounds };

}


function enable(val){
	if(!val) return;
	document.querySelector(`.${val}`).removeAttribute('disabled');
	document.querySelector(`.${val}`).style.removeProperty('background-color');
}


resetBtn = (cls) =>{
    setInterval(()=>{
        enable(`${cls}`);
    },1000)
}