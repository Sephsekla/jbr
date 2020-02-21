<?php
/**
 * The main template file
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package jbe
 */

get_header();

global $wp_query; 
$found_posts = $wp_query->found_posts;
?>

	<div id="primary" class="content-area 404">
		<main id="main" class="site-main">

		<?php

		get_template_part( 'template-parts/404' );


		?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
