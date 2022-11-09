function addItems(element, sheet){
     for(var i = 3; i < sheet.length; i++){
        var itemdata = sheet[i];
        var container = document.getElementById(element).getElementsByTagName("div");

        var card = document.createElement("div");
        var cardcontent = document.createElement("div");
        var cardimg = document.createElement("div");
        var cardinfo = document.createElement("div");
        card.classList.add("card");
        cardcontent.classList.add("card-content");
        cardimg.classList.add("card-image");
        cardinfo.classList.add("card-info-title");
        card.setAttribute("id", i);
        card.onclick = function() { createPopup(this.id) };
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

function createPopup(val){
    var itemdata = gen8[val];
    var ph = document.getElementById("placeholder");

    var element = document.getElementById("popup");
    if(element) { element.remove(); }

    var popup = document.createElement("div");
    popup.setAttribute("id", "popup");
    ph.appendChild(popup);

    var div1 = document.createElement("div");
    var marking = document.createElement("h4");
    marking.innerHTML = itemdata[1];
    var event = document.createElement("h4");
    event.innerHTML = itemdata[3];
    var xicon = document.createElement("img");
    xicon.setAttribute("id", "rpopup");
    xicon.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/109/109602.png");
    div1.appendChild(marking);
    div1.appendChild(event);
    div1.appendChild(xicon);

    var div2 = document.createElement("div");
    var nr = document.createElement("h4");
    nr.innerHTML = "#<br><br>" + itemdata[0];
    var ball = document.createElement("img");
    ball.setAttribute("src", "https://www.serebii.net/itemdex/sprites/pgl/" + itemdata[6].toLowerCase() +  "ball.png");
    var lvl = document.createElement("h4");
    lvl.innerHTML = "Level<br><br>" + itemdata[10];
    var nature = document.createElement("h4");
    nature.innerHTML = "Nature<br><br>" + itemdata[9];
    var ivs = document.createElement("h4");
    ivs.innerHTML = "IVs<br><br>" + itemdata[12];
    div2.appendChild(nr);
    div2.appendChild(ball);
    div2.appendChild(lvl);
    div2.appendChild(nature);
    div2.appendChild(ivs);

    var div3 = document.createElement("div");
    var otid = document.createElement("h4");
    otid.innerHTML = "OT / ID<br><br>" + itemdata[13];
    var date = document.createElement("h4");
    date.innerHTML = "Date<br><br>" + itemdata[14];
    var proof = document.createElement("h4");
    proof.innerHTML = "Proof<br><br>" + itemdata[15];
    div3.appendChild(otid);
    div3.appendChild(date);
    div3.appendChild(proof);

    var div4 = document.createElement("div");
    var th = document.createElement("h4");
    th.innerHTML = "Trade History<br><br>" + itemdata[16];
    var d = document.createElement("h4");
    d.innerHTML = "Disclosure<br><br>" + itemdata[17];
    div4.appendChild(th);
    div4.appendChild(d);

    var div5 = document.createElement("div");
    var r3 = document.createElement("h4");
    r3.innerHTML = "R3 copy pasta<br><br>" + itemdata[19];
    div5.appendChild(r3);

    popup.appendChild(div1);
    popup.appendChild(div2);
    popup.appendChild(div3);
    popup.appendChild(div4);
    popup.appendChild(div5);

    xicon.addEventListener("click", () => {
        $("#popup").fadeOut(500, function() { $("#popup").remove()} );
    });
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
    addItems("gen8", gen8);
    addItems("gen7", gen7);
    addItems("shiny-eggs", shinyeggs);
    addItems("shiny-myths", shinymyths);
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