<?php $links = [];

$links[] = get_field('link_1');
$links[] = get_field('link_2');
$links[] = get_field('link_3');


?>
<section class="link-boxes" id="links">
    <div class="container">
        <div class="row">
            <?php foreach($links as $link){ ?>

            <div class="col-12 col-lg-4 link-wrapper">
                <?php jbr\utilities\construct_linkbox($link['link']['url'],$link['image'],$link['image_hover'],$link['link']['title']) ?>
            </div>
           
            <?php 

            }

            ?>
        </div>
    </div>
</section>