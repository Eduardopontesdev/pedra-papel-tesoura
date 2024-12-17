//mapeamento das tags html para manipulação
const optionImages = document.querySelectorAll(".option-image");
const container = document.querySelector(".container");
const resultado = document.querySelector(".result-text");
const userResult = document.querySelector(".user-result img");
const computerResult = document.querySelector(".computer-result img");
const pontosUser = document.querySelector(".pontos-user");
const pontosComputador = document.querySelector(".pontos-computer");

let contaPontosComputador = 0;
let contaPontosUser = 0;



//array com os itens para escolha do computador
const computerImages = [
  "./img/pedra.png",
  "./img/papel.png",
  "./img/tesoura.png",
];

const vencendor = {
  RR: "empate",
  RS: "Você",
  RP: "computador",
  SS: "empate",
  SP: "Você",
  SR: "computador",
  PP: "empate",
  PS: "Você",
  PR: "computador",
};

//funcao principal
function fazTeuNome(chupa) {
  const imagemEscolhida = chupa.currentTarget;
  userResult.src = computerResult.src = "./img/pedra.png";

  container.classList.add("start");
  resultado.innerHTML = "...";

  setTimeout(() => {
    const indexClicado = Array.from(optionImages).indexOf(imagemEscolhida);
    userResult.src = computerImages[indexClicado];

    const escolhaAleatoria = Math.floor(Math.random() * computerImages.length);
    computerResult.src = computerImages[escolhaAleatoria];

    container.classList.remove("start");

    const userValue = ["R", "P", "S"][indexClicado];
    const computerValue = ["R", "P", "S"][escolhaAleatoria];
    const userComputResult = userValue + computerValue;
    const finalResult = vencendor[userComputResult];
    resultado.innerHTML =
      userValue === computerValue ? "Empate" : finalResult + " Ganhou!";

    if (finalResult != "empate") {
      finalResult === "Você" ? contaPontosUser++ : contaPontosComputador++;
    }

    pontosUser.textContent = contaPontosUser;
    pontosComputador.textContent = contaPontosComputador;

    console.log("computador: " + pontosComputador);
console.log("Você: " + pontosUser);

  }, 2000);
}

optionImages.forEach((img) => {
  img.addEventListener("click", fazTeuNome);
});
