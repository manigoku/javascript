function rolldice(){

    const mytext = document.getElementById("mytext").value;
    const diceresult = document.getElementById("diceresult");
    const diceimages = document.getElementById("diceimages");
    const values = [];
    const imgs = [];
    
    for(let i=0;i<mytext;i++){
        const value = Math.floor(Math.random()*6)+1;
        values.push(value);
        imgs.push(`<img  src = 1.jpg >`);
    }
    diceresult.textContent = `dice: ${values.join(`, `)}`;
    diceimages.innerHTML = imgs.join('');
    
    }