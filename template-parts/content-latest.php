<?php
use function jbr\utilities\construct_linkbox;
?>
<article <?php post_class(); ?>>
    <div class="container">
        <div class="row align-items-center">
            <div class="col-12 col-md-6 col-lg-4">

                <?php construct_linkbox(get_the_permalink(), get_post_thumbnail_id(), get_post_thumbnail_id(), '', 'offset-left archive-links transparent margin-b') ?>

            </div>
            <div class="col-12 col-md-6 col-lg-8">

                <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                <p class="date"><?php echo get_the_date('jS F Y'); ?></p>
                <?php
                the_excerpt();

                ?>
                <p><a href="<?php the_permalink(); ?>" class="more-link">
                        <span class="left"></span>
                        <span class="inner">Read More</span>
                    </a></p>

                <footer class="article-footer">
                    <?php echo get_the_category_list(' | '); ?>
                    <?php echo get_the_tag_list('<p>Tagged in ', ' | ', '</p>'); ?>
                </footer>
            </div>
        </div>
    </div>
</article>