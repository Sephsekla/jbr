<article class="<?php post_class() ?>">
    <div class="container">
        <h1><?php the_title() ?></h1>
        <?php the_content(); ?>

        <footer class="article-footer">
            <?php echo get_the_category_list(); ?>
        </footer>
    </div>
</article>