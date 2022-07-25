document.getElementById('button').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "none";
});

let nome=document.getElementById('name').value ;   

function MostraNome(){
    document.getElementById('titolo').innerHTML=nome;

}

MostraNome();