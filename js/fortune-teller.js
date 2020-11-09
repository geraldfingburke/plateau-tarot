
function HideSingleCardReading(){
  var x = document.getElementById("single-card-reading");
  x.style.display="none";
}

function HideThreeCardReading(){
  var x = document.getElementById("3-card-reading");
  x.style.display="none";
}

function HideFiveCardReading(){
  var x =  document.getElementById("5-card-reading");
  x.style.display="none";
}

function HideIntro(){
  var x = document.getElementById("intro");
  x.style.display = "none";
}

function ClickBeginner(){
  HideIntro();
  x = document.getElementById("single-card-reading");
  x.style.display ="block";
  var btn = document.getElementById("card1-btn");
  btn.style.display="block";
  document.getElementById("single-card-reading").scrollIntoView();
}

function GoBack(){
  var x = document.getElementById("intro");
  x.style.display = "block";
  HideSingleCardReading();
  HideThreeCardReading();
  HideFiveCardReading();

  HideCards();
  scroll(0,0);
}

function HideCards(){
  ResetCard("card1");
  ResetCard("3card1");
  ResetCard("3card2");
  ResetCard("3card3");
  ResetCard("5card1");
  ResetCard("5card2");
  ResetCard("5card3");
  ResetCard("5card4");
  ResetCard("5card5");
}

function ClickIntermediate(){
  HideIntro();
  x = document.getElementById("3-card-reading");
  x.style.display ="block";
  var btn = document.getElementById("3card-btn");
  btn.style.display="block";
    document.getElementById("3-card-reading").scrollIntoView();
}

function ClickExpert(){
  HideIntro();
  x = document.getElementById("5-card-reading");
  x.style.display ="block";
  var btn = document.getElementById("5card-btn");
  btn.style.display="block";
    document.getElementById("5-card-reading").scrollIntoView();
}

function ResetCard(card_id){

  var title = document.getElementById(card_id+"-title");
  title.innerHTML = "";

  var cardimg = document.getElementById(card_id+"-img");
  cardimg.src="img/cards/CardBacks.jpg";

  var text = document.getElementById(card_id+"-text");
  text.innerHTML="";

  var symbols = document.getElementById(card_id+"-symbols");
  symbols.innerHTML="";
}

function DrawSingleCard(){
  var btn = document.getElementById("card1-btn");
  btn.style.display="none";
  card = cards[Math.floor(Math.random()*cards.length)]

  PopulateCardInfo("card1",card);
}

function PopulateCardInfo(card_id, card){
  var title = document.getElementById(card_id+"-title");
  title.innerHTML = card.name;

  var cardimg = document.getElementById(card_id+"-img");
  cardimg.src="img/cards/"+card.url+".jpg";

  var text = document.getElementById(card_id+"-text");
  text.innerHTML=card.description;

  var symbols = document.getElementById(card_id+"-symbols");
  symbols.innerHTML=card.symbols;
}

function DrawThreeCards(){

  var btn = document.getElementById("3card-btn");
  btn.style.display="none";

  card = cards.pop()
  PopulateCardInfo("3card1",card);
  card = cards.pop()
  PopulateCardInfo("3card2",card);
  card = cards.pop()
  PopulateCardInfo("3card3",card);
}

function DrawFiveCards(){
  var btn = document.getElementById("5card-btn");
  btn.style.display="none";

  card = cards.pop()
  PopulateCardInfo("5card1",card);
  card = cards.pop()
  PopulateCardInfo("5card2",card);
  card = cards.pop()
  PopulateCardInfo("5card3",card);
  card = cards.pop()
  PopulateCardInfo("5card4",card);
  card = cards.pop()
  PopulateCardInfo("5card5",card);
}

HideSingleCardReading();
HideThreeCardReading();
HideFiveCardReading();
