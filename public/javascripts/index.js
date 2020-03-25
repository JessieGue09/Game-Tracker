function deleteGame(id){
    //HTTP request using JQuery
    $.post('/games/delete/' + id, function(err) {
         //callback
        // if (err) {
        //     //Oh no! an error ocurred!
        // } else {
        //     //All good
        // }


        //Reload page after deletion
        window.location.reload();
    })
}