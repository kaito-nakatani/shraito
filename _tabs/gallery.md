---
title_short: Gallery
title: Gallery
layout: tab
custom_js:
    - gallery
custom_css:
    - gallery
    - imghex
---

{% include hexphotos.html 
    gridnums="4,5,4" 
    save_image_names_js="img_names" 
%}

<div class="control control-left">
<button class="navchev" onclick="shift(-1);"> « </button>
</div>
<div class="control control-right">
<button class="navchev" onclick="shift(1);"> » </button>
</div>