<?php 

use function jbr\utilities\construct_linkbox;

?>
	<div class="col-12 col-md-6 col-lg-4">
	<article <?php post_class(); ?>>
		<?php construct_linkbox(get_the_permalink(),get_post_thumbnail_id(),get_post_thumbnail_id(),'','offset-left archive-links transparent') ?>
			<h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
			<p class="date"><?php echo get_the_date( 'jS F Y' ); ?></p>
			

		<footer class="article-footer">
			<?php echo get_the_category_list( ' | ' ); ?>
			<?php echo get_the_tag_list( '<p>Tagged in ', ' | ', '</p>' ); ?>
		</footer>
		</article>
	</div>

