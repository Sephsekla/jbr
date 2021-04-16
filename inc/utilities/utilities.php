<?php
/**
 * Utilty functions
 *
 * @package jbr
 * @since   0.0.3
 */

 namespace jbr\utilities;

function picture( $id, $size = 'thumbnail' ) {
	$url        = wp_get_attachment_image_url( $id, $size );
	$srcset     = wp_get_attachment_image_srcset( $id, $size );
	$filetype   = wp_check_filetype( $url );
	$srcsetwebp = str_replace( $filetype['ext'], $filetype['ext'] . '.webp', $srcset );
	?>
<picture>
	<source srcset="<?php echo $srcsetwebp; ?>" type="image/webp">
	<source srcset="<?php echo $srcset; ?>" type="<?php echo get_post_mime_type( $id ); ?>">
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

function construct_linkbox( $url, $img_1, $img_2, $text, $classes = '' ) {

	?>

<a <?php echo $url ? 'href="' . $url . '"' : ''; ?> class="linkbox <?php echo $classes; ?>">
	<div class="image" style="background-image: url(<?php echo wp_get_attachment_image_url( $img_1, 'linkbox' ); ?>)">

	<?php picture( $img_1, 'linkbox' ); ?>
	</div>

	<div class="image alt" style="background-image: url(<?php echo wp_get_attachment_image_url( $img_2, 'linkbox' ); ?>)">

	<?php picture( $img_2, 'linkbox' ); ?>
	</div>

	<div class="overlay">
	<?php echo $text; ?>
	</div>

</a>

	<?php

}
