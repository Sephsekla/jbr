<?php
/**
 * Utilty functions
 *
 * @package jbr
 * @since 0.0.3
 */

 namespace jbr\utilities;

function picture( $id, $size = 'thumbnail' ) {
	$url = wp_get_attachment_image_url( $id, $size );
	?>
	<picture>
	<source srcset="<?php echo $url; ?>.webp" type="image/webp">
	<source srcset="<?php echo $url; ?>" type="<?php echo get_post_mime_type( $id ); ?>">
	<?php echo wp_get_attachment_image( $id, $size ); ?>
	</picture>
	<?php
}

 require_once 'filters.php';

 require_once 'assets.php';

function get_years() {
	return date( 'Y' ) - 2015;
}

 add_shortcode( 'get_years', __NAMESPACE__ . '\\get_years' );
