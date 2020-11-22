class Player{

    constructor(){
       
    }
    getCount(){
    var playerCountRef = database.ref("playerCount")
        playerCountRef.on("value",function(data){
        playerCount = data.val();
    })
    }
    update(count){
          database.ref("/").update({
              playerCount :  count
          })
    
    }
    update(name){
        var playerIndex = "p"+playerCount
        database.ref(playerIndex).set({
            name : name
        })
    }
    }