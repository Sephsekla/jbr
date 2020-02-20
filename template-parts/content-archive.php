
	<div class="col-12 col-md-6 col-lg-4">
	<article <?php post_class(); ?>>
		<?php the_post_thumbnail() ?>
			<h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
			<p class="date"><?php echo get_the_date( 'jS F Y' ); ?></p>
			

		<footer class="article-footer">
			<?php echo get_the_category_list( ' | ' ); ?>
			<?php echo get_the_tag_list( '<p>Tagged in ', ' | ', '</p>' ); ?>
		</footer>
		</article>
	</div>

