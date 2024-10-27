document.cookie

access = {
    'carrot' : 1,
    'tofu' : 2,
    'guava' : 3
}

$("#passwd").on('keyup', function(event) {
    if(event.which == 13) // enter key
        unlock();
});


document.getElementById('passwd').focus();
unlock(getAccessCookie());

function unlock(level) {
    if(!level) {
        level = access[$('#passwd').val()];
    }
    if(level) {
        // $('.block[data-access-level='+level+']').show();
        blocks = $('.block');
        blocks.each(function(idx, elt){
            if( level >= elt.getAttribute('data-access-level') ) 
                $(elt).show();
        });
        if(level > 0)   {
            $('#unlock-controls').hide();
        }
    }
    else {
        level = -1;
    }

    if(document.getElementById('cookie-permit').checked) {
        setAccessCookie(level);
    }   
}

function setAccessCookie(level) {
    console.log("setting");
    let expires = "expires="+ new Date("19 January 2025").toUTCString();
    document.cookie = "access=" + level + ";" + expires + ";path=/;";
}
function getAccessCookie() {
    // let decodedCookie = document.cookie;
    // decodeURIComponent(document.cookie);
    let parts = `; ${document.cookie}`.split('; access=')
    if(parts.length == 2) 
        return parseInt(parts[1].split(';')[0]);
}