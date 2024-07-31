const adjective= {
    "0":"Crazy",
    "1":"Amazing",
    "2":"Fire"
    };
    
    
    
    const shop = {
    "0":"Engine",
    "1":"Foods",
    "2":"Garments"
    };
    
    
    const another = {
    "0":"Bros",
    "1":"Limited",
    "2":"Hub"
    };

    let a = Math.round(Math.random()*2.5);
    let b = Math.round(Math.random()*2.5);
    let c = Math.round(Math.random()*2.5);


    console.log(`My Buisness name is ${adjective[a]} ${shop[b]} ${another[c]}`)
    

