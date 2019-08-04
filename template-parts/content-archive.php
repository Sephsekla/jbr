<article class="<?php post_class(); ?>">
	<div class="container">
		
			<h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
			<?php
			  the_excerpt();

			?>

		<footer class="article-footer">
			<?php echo get_the_category_list( ' | ' ); ?>
			<?php echo get_the_tag_list( '<p>Tagged in ', ' | ', '</p>' ); ?>
		</footer>
	</div>
</article>
