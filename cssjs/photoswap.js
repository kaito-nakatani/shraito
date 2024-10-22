function new_random_img(){
    return img_names[Math.floor(Math.random()*img_names.length)]
}

console.log("PHOTOSWAP RUNNING");

$('.hex img').each(function(i,heximg){
    setInterval(function(){
        // console.log(heximg);
        // $(heximg).css('border', '1px solid red');
        // $(heximg).css('border', '1px solid red');
        $(heximg).attr('src', new_random_img());
    }, 1000+2000*Math.random());
});