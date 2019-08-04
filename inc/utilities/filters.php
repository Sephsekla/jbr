<?php
/**
 * Filter functions for hooks
 *
 * @package jbr
 * @since 0.0.4
 */

 namespace jbr\filters;

use jbr\assets as assets;


function custom_logo() {
	$html = sprintf(
		'<a href="%1$s" class="custom-logo-link" rel="home" itemprop="url">%2$s</a>',
		esc_url( home_url( '/' ) ),
		'<img src="' . assets\get_asset_path( 'logo.svg' ) . '" class="custom-logo"width="133" height="75">'
	);
	return $html;
}


add_filter( 'get_custom_logo', __NAMESPACE__ . '\\custom_logo' );



function body( $classes ) {
    return array_merge( $classes, array( 'line-numbers' ) );
};


add_filter('body_class', __NAMESPACE__.'\\body');