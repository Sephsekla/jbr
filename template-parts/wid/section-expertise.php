<section class="expertise-section">
    <div class="container">
        <div class="expertise">
            <?php 

            $i = 0;
        
            if(have_rows('expertise')) {
                while(have_rows('expertise')){
                    the_row();
               

                    $image = get_sub_field('image');
                    $image_h = get_sub_field('image_hover');
                    ?>

            <div class="item">

                <div class="linkbox">
                    <div class="image"
                        style="background-image: url(<?php echo wp_get_attachment_image_url($image, 'full') ?>)">

                        <?php jbr\utilities\picture($image, 'full') ?>
                    </div>

                    <div class="image alt" style="background-image: url(<?php echo wp_get_attachment_image_url($image_h,'full') ?>)">

                    <?php jbr\utilities\picture($image_h,'full') ?>
                    </div>


                    <div class="overlay">
                        <h3><?php echo get_sub_field('title') ?></h3>
                    </div>

                </div>
                <span class="arrow"></span>

                <div class="slideout" id="expertise-<?php echo $i++ ?>">
                    <?php echo get_sub_field("content") ?>
                </div>

            </div>

                    <?php
                }
            }
            ?>
        </div>
        <div class="expertise-expansion"><span id="expand"></span></div>
    </div>
</section>