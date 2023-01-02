function addItems(element, sheet){
    console.log(sheet);
     for(var i = 3; i < sheet.length; i++){
        var itemdata = sheet[i];
        var container = document.getElementById(element);

        var card = document.createElement("div");
        var cardleft = document.createElement("div");
        var cardimg = document.createElement("div");
        var cardright = document.createElement("div");
        var cardheader = document.createElement("div");
        var cardbody = document.createElement("div");
        var cardinfo = document.createElement("div");

        card.classList.add("card");
        cardleft.classList.add("card-left");
        cardimg.classList.add("card-image");
        cardright.classList.add("card-right");
        cardheader.classList.add("card-header");
        cardbody.classList.add("card-body");
        cardinfo.classList.add("card-info");

        card.appendChild(cardleft);
        cardleft.appendChild(cardimg);

        var img = document.createElement("img");
        cardimg.appendChild(img);
        if(itemdata[5] == "FALSE"){
            img.src = "https://www.serebii.net/swordshield/pokemon/" + itemdata[0] + ".png";
        }else{
            img.src = "https://www.serebii.net/Shiny/SWSH/" + itemdata[0] + ".png";
        }

        card.appendChild(cardright);
        cardright.appendChild(cardheader);
        var h3 = document.createElement("h3");
        cardheader.appendChild(h3);
        const textNode = document.createTextNode(itemdata[3]);
        h3.appendChild(textNode);

        cardright.appendChild(cardbody);
        cardbody.appendChild(cardinfo);

        var cardinfovalue = document.createElement("div");
        cardinfovalue.classList.add("card-info-value");
        cardinfovalue.setAttribute('data-title', itemdata[2]);
        cardinfovalue.textContent = itemdata[2];
        cardinfo.appendChild(cardinfovalue);

        var cardinfovalue = document.createElement("div");
        cardinfovalue.classList.add("card-info-value");
        cardinfovalue.setAttribute('data-title', itemdata[13]);
        cardinfovalue.textContent = itemdata[13];
        cardinfo.appendChild(cardinfovalue);

        var cardinfovalue = document.createElement("div");
        cardinfovalue.classList.add("card-info-value");
        cardinfovalue.setAttribute('data-title', itemdata[15]);
        cardinfovalue.textContent = itemdata[15];
        cardinfo.appendChild(cardinfovalue);

        var cardinfovalue = document.createElement("div");
        cardinfovalue.classList.add("card-info-value");
        cardinfovalue.setAttribute('data-title', itemdata[16]);
        cardinfovalue.textContent = itemdata[16];
        cardinfo.appendChild(cardinfovalue);

        container.appendChild(card);
    }
}