const listCat = [new Categoria("Papagaio"), new Categoria("Papainoel")];

const listP = [
  new Piada(
    "Aprendi que o homem tem quatro idades",
    "Aprendi que o homem tem quatro idades: 1 quando acredita em Papai Noel, 2 quando não acredita em Papai Noel, 3 quando é o Papai Noel e 4 quando se parece com Papai Noel.",
    "img/papainoel4idade.jpg",
    listCat[1].Nome
  ),

  new Piada(
    "O Papagaio e o Anel Perdido",
    "Na fazenda, a menininha estava no quintal dando milho para as galinhas e quando entrou em casa percebeu que tinha perdido o anel. Abriu o maior berreiro e logo o pai foi acudir:    - Não se preocupe, querida!    Arrastou-a para o quintal e foi pegando as galinhas e metendo o dedo no rabo de cada uma delas em busca da jóia. Uma a uma todas as galinhas foram violentadas sem nenhum resultado. Desconsolado, quando resolveu bater em retirada, avistou o papagaio em cima do puleiro.    - Vem cá, papagaio! - gritou, erguendo o dedo acinzentado.\n" +
      "- Pera lá! - resmungou a ave. - Comigo é no Raio X!",
    "img/papagaio.png",
    listCat[0].Nome
  ),

  new Piada(
    "Papagaio pregado na ponte",
    "Tinha papagaio pregado na ponte,de repente passou um homem e o papagaio muito esperto disse:-Ole,ole,olá Sílvio Santos vem ai.E o homem disse:-Da proxíma vez que você disser isso vou te jogar dentro do lago O papagaio disse: -Ole,ole.olá Sílvio Santos vem ai.O homem pegou o papagaio e jogou dentro do lago. O papagaio disse: -Ole,ole,olá ainda bem que eu sei nadar!!",
    "img/papagaio.png",
    listCat[0].Nome
  ),

  new Piada(
    "O menino pergunta para Papai Noel",
    "O menino pergunta para Papai Noel:- “Papai Noel, você rói unha?”E Papai Noel responde:- “Rou, rou, rou…",
    "img/papainoelunha.jpg",
    listCat[1].Nome
  ),
];

function Piad(cat, id, local, imag) {
  const vet = new Array();
  var ende, piad;
  if (cat != " ") {
    listP.forEach((pia) => {
      if (pia.Cat === cat) {
        vet.push(pia);
      }
    });
    ende = Math.floor(Math.random() * vet.length);
    piad = vet[ende];
  } else {
    ende = Math.floor(Math.random() * listP.length);
    piad = listP[ende];
  }

  const tl = document.querySelector("#" + id);
  const titul = document.createTextNode(piad.Titulo);
  tl.appendChild(titul);

  const text = document.querySelector("#" + local);
  const txt = document.createTextNode(piad.Texto);
  text.appendChild(txt);

  const ima = (document.getElementById(imag).src = piad.Image);
}

function Clr(id, local) {
  const tit = document.querySelector("#" + id);
  const pia = document.querySelector("#" + local);
  console.log(tit.innerHTML);
  console.log(pia.innerHTML);
  tit.innerHTML = "";
  pia.innerHTML = "";
}
