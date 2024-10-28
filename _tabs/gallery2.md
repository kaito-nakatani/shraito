---
title_short: G2
title: Gallery Version 2
layout: tab
custom_js:
    - gallery
custom_css:
    - imghex
---


<!--     gridnums="4,5,4,5,4,5" -->

{% include hexphotos.html 
    gridnums="3,4,3,4,3,4,3,4"
    save_image_names_js="img_names" 
%}

<div class="control control-left">
<button class="navchev" onclick="shift(-1);"> « </button>
</div>
<div class="control control-right">
<button class="navchev" onclick="shift(1);"> » </button>
</div>