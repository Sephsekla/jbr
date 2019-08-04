<?php

/**
 * Custom nav menu
 *
 * @package jbr
 *
 * @since 0.0.4
 *
 * Many thanks to I Benic https://www.ibenic.com/how-to-create-wordpress-custom-menu-walker-nav-menu-class/
 */

 namespace jbr\nav;

class jbr_Nav_Menu extends \Walker_Nav_Menu {
	function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
		

		ob_start();

		echo '<a href="' . $item->url . '">';

		\jbr\utilities\picture( get_post_thumbnail_id( $item->object_id ) );

		echo '<span>' . $item->title . '</span>';

		echo '</a>';

		$output .= ob_get_clean();

	}
}
