<article class="<?php post_class(); ?>">
	<div class="container">
		<?php
		if ( is_singular() ) {
			?>
			  <h1><?php the_title(); ?></h1>
			  <?php
				the_content();
        }
        else{
            ?>
            <h2><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h2>
            <?php
              the_excerpt();
        }

		?>
	  

		<footer class="article-footer">
            <?php echo get_the_category_list(' | '); ?>
            <?php echo get_the_tag_list('<p>Tagged in ', ' | ', '</p>'); ?>
		</footer>
	</div>
</article>
