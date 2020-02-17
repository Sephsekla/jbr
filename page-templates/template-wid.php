<?php
/**
 * Template Name: What I do
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package jbe
 */

get_header();
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">



		<?php

		get_template_part( 'template-parts/shared/banner' );

			/* Start the Loop */
		while ( have_posts() ) {
			the_post();
			
			get_template_part( 'template-parts/wid/section', 'expertise' );

			get_template_part( 'template-parts/wid/section', 'tech' );


			/*
			 * Include the Post-Type-specific template for the content.
			 * If you want to override this in a child theme, then include a file
			 * called content-___.php (where ___ is the Post Type name) and that will be used instead.
			 */
            get_template_part( 'template-parts/content', get_post_type() );
            


		}

			the_posts_navigation();

		?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
