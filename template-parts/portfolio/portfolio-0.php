<?php 

use function jbr\assets\get_asset_path;
use function jbr\utilities\picture as get_picture;

$images = get_field('images');
?>

<section class="portfolio-item">
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-6 col-lg-6">
                <div class="mockups">
                    <div class="mockup imac">
                        <img src="<?php echo get_asset_path('mockups/iMac.svg') ?>"/>
                        <div class="screen">
                        <?php get_picture($images['imac'],'full') ?>
                        </div>
                    </div>
                    <div class="mockup macbook">
                        <img src="<?php echo get_asset_path('mockups/Macbook.png') ?>"/>
                        <div class="screen">
                        <?php get_picture($images['laptop'],'full') ?>
                        </div>
                    </div>
                    <div class="mockup s9">
                        <img src="<?php echo get_asset_path('mockups/S9.png') ?>"/>
                        <div class="screen">
                        <?php get_picture($images['mobile'],'full') ?>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <h2><?php the_title() ?></h2>
                <?php the_content() ?>
            </div>
        </div>
    </div>
</section>