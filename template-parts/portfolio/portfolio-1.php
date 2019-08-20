<?php 

use function jbr\assets\get_asset_path;

?>

<section>
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-6 col-lg-6">
                <div class="mockups">
                    <div class="mockup imac">
                        <img src="<?php echo get_asset_path('mockups/iMac.png') ?>"/>
                        <div></div>
                    </div>
                    <div class="mockup macbook">
                        <img src="<?php echo get_asset_path('mockups/Macbook.svg') ?>"/>
                        <div></div>
                    </div>
                    <div class="mockup s9">
                        <img src="<?php echo get_asset_path('mockups/S9.svg') ?>"/>
                        <div></div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <h2><?php the_title() ?></h2>
            </div>
        </div>
    </div>
</section>