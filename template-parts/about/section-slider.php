
   <?php 
   
   use function jbr\utilities\picture;
   
   if(have_rows('slider')){
       ?> <div class="slider"><?php
       while(have_rows('slider')){
           the_row();
            ?> <div class="slide"> <?php
           picture(get_sub_field('image'),'slider');
           ?> </div> <?php
       }
       ?> </div> <?php
   }
