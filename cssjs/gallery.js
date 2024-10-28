// in gallery.md, img_names is the list of image names
function new_random_img(){
    return img_names[Math.floor(Math.random()*img_names.length)]
}

$(".hex").each(function(i,elt) {
    $(elt).attr("data-imgidx", i);
})

window.scrollTo({
    top: $('.hex-row')[1].getBoundingClientRect().top+window.innerHeight/2,
    left: 0,
    behavior: "smooth",
});

$('.control').on('mousedown', function(){ 
    $(".hex").addClass('in-flux');
})

function shift(n) {
    console.log("shift", n);
    $(".hex").each(function(i,elt) {
        prev_idx = parseInt($(elt).attr("data-imgidx"));
        $(elt).attr("data-imgidx", prev_idx+1);
        $(elt).find("img").attr("src", img_names[prev_idx+n])
    }) 
    setTimeout(function(){
        $(".hex").removeClass('in-flux');
    },200);
    // $(".hex").css('filter', "none");
}
  
/*$('.hex img').each(function(i,heximg){
    setInterval(function(){
        // console.log(heximg);
        // $(heximg).css('border', '1px solid red');
        // $(heximg).css('border', '1px solid red');
        $(heximg).attr('src', new_random_img());
    }, 1000+2000*Math.random());
});*/