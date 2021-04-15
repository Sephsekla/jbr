<?php

use function jbr\utilities\construct_linkbox;

?>

<section class="expertise-section">
    <div class="container">
        <div class="expertise row">
            <?php 

            $i = 0;
        
            if(have_rows('expertise')) {
                while(have_rows('expertise')){
                    the_row();
               

                    $image = get_sub_field('image');
                    $image_h = get_sub_field('image_hover');
                    ?>
            <div class="col-12 col-md-6 col-lg-3">
            <div class="item">

          

                    <?php construct_linkbox(false,$image,$image_h,'<h3>'.get_sub_field('title').'</h3>'); ?>

                <span class="arrow"></span>

                <div class="slideout container" id="expertise-<?php echo $i++ ?>">
                    <?php echo get_sub_field("content") ?>
                </div>

            </div>
                </div>

                    <?php
                }
            }
            ?>
        </div>
        <div class="expansion-wrapper"><div class="expertise-expansion"><span id="expand"></span></div></div>
    </div>
</section>