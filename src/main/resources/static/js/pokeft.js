function addItems(){
     for(var i = 3; i < 20; i++){
        var itemdata = gen8[i];
        var container = document.getElementById("cards");

        var card = document.createElement("div");
        var cardcontent = document.createElement("div");
        var cardimg = document.createElement("div");
        var cardinfo = document.createElement("div");
        card.classList.add("card");
        cardcontent.classList.add("card-content");
        cardimg.classList.add("card-image");
        cardinfo.classList.add("card-info-title");
        card.setAttribute("id", i);
        card.onclick = function() { showData(this.id) };
        card.appendChild(cardcontent);
        cardcontent.appendChild(cardimg);
        cardcontent.appendChild(cardinfo);

        var img = document.createElement("img");
        cardimg.appendChild(img);
        if(itemdata[5] == "FALSE"){
            img.src = "https://www.serebii.net/swordshield/pokemon/" + itemdata[0] + ".png";
        }else{
            img.src = "https://www.serebii.net/Shiny/SWSH/" + itemdata[0] + ".png";
        }

        var h3 = document.createElement("h3");
        cardinfo.appendChild(h3);
        const textNode = document.createTextNode(itemdata[3]);
        h3.appendChild(textNode);

        container.appendChild(card);
    }
}

function closePopup(){
    const element = document.getElementById("popup");
    if(element) { element.remove(); }
}

// When the user clicks on <div>, open the popup
function showData(val) {
    var itemdata = gen8[val];
    var ph = document.getElementById("placeholder");
    const element = document.getElementById("popup");
    if(element) { element.remove(); }

    var popup = document.createElement("div");
    popup.setAttribute("id", "popup");

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    div1.setAttribute("class", "div1");
    div2.setAttribute("class", "div2");
    popup.appendChild(div1);
    popup.appendChild(div2);

    //div1 Header
    var title = document.createElement("span");
    title.appendChild(document.createTextNode(itemdata[3]));
    var exit = document.createElement("img");
    exit.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/109/109602.png");
    exit.onclick = function() { closePopup() };
    div1.appendChild(title);
    div1.appendChild(exit);

    popup.classList.toggle("show");
    ph.appendChild(popup);
}

$( document ).ready(function() {
    addItems();
    document.getElementById("cards").onmousemove = e => {
      for(const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
              x = e.clientX - rect.left,
              y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      };
    }

});