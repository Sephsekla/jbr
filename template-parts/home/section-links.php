<?php $links = [];

$links[] = get_field('link_1');
$links[] = get_field('link_2');
$links[] = get_field('link_3');


?>
<section class="link-boxes">
    <div class="container">
        <div class="row">
            <?php foreach($links as $link){ ?>

            <div class="col-12 col-lg-4">
                <a href="<?php echo $link['link']['url'] ?>" class="linkbox" style="background-image: url(<?php echo wp_get_attachment_image_url($link['image'],'full') ?>)">
                <?php jbr\utilities\picture($link['image'],'full') ?>
                    <?php echo $link['link']['title'] ?>
                </a>
            </div>
           
            <?php 

            }

            ?>
        </div>
    </div>
</section>