<section>
    <div class="container">
        <div class="expertise">
            <?php 
        
            if(have_rows('expertise')) {
                while(have_rows('expertise')){
                    the_row();
               

                    $image = get_sub_field('image');
                    ?>

            <div class="item">

                <div class="linkbox">
                    <div class="image"
                        style="background-image: url(<?php echo wp_get_attachment_image_url($image, 'full') ?>)">

                        <?php jbr\utilities\picture($image, 'full') ?>
                    </div>


                    <div class="overlay">
                        <h3><?php echo get_sub_field('title') ?></h3>
                    </div>

                </div>

                <div class="slideout">
                    <?php echo get_sub_field("content") ?>
                </div>

            </div>

                    <?php
                }
            }
            ?>
        </div>
    </div>
</section>