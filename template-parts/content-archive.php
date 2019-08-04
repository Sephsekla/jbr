<article class="<?php post_class(); ?>">
	<div class="container">
		
			<h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
			<p class="date"><?php echo get_the_date( 'jS F Y') ?></p>
			<?php
			  the_excerpt();

			?>
			<p><a href="<?php the_permalink(); ?>" class="more-link">
			<span class="left"></span>
			<span class="inner">Read More</span>
		</a></p>

		<footer class="article-footer">
			<?php echo get_the_category_list( ' | ' ); ?>
			<?php echo get_the_tag_list( '<p>Tagged in ', ' | ', '</p>' ); ?>
		</footer>
	</div>
</article>
