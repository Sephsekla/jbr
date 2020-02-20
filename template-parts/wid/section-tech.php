<?php use function jbr\assets\get_asset_path as get_path;

?>


<section class="technologies">
    <div class="container">
        <h2>Technology</h2>
        <?php if(have_rows('technologies')){
            ?> <div class="row justify-content-around"> <?php
            while(have_rows('technologies')){ // Loop through technologies
                the_row();

                ?> <div class="col-6 col-sm-6 col-lg-4 col-xl-3"> 
                    <div class="tech-icon">
                    
                        <img src="<?php echo get_path('logos/'.get_sub_field("svg").'.svg') ?>"/>

                    </div>
                    
                    <?php

                echo '<h3>'.get_sub_field("title").'</h3>';

                ?> </div> <?php
            
            }
            ?> </div> <?php

        } ?>
    </div>
</section>