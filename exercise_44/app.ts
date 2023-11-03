

let item:string[]=["kabab","tomato","cheese"];

//1 way
function getSummary(...item:string[]){
   console.log("Sandwich: " + item.join(","));

}

getSummary(...item,"sauce");
getSummary(...item,"sauce","chilli");
getSummary(...item,"sauce","lettuse");


//2nd Way
function makeSandwich(...items:string[]){
    if(items.length === 0){
        console.log("You order an empty sandwich. Please add some items for sanswich")

    }else{
        items.forEach((item,i)=>[
             console.log(`${i + 1}. ${item}`)
        ])
    }

}
makeSandwich();
makeSandwich("chilli","sauce","cheese","kabab");
makeSandwich("Tomato","lettuse","kabab");
makeSandwich("butter","jelly","cheese");

