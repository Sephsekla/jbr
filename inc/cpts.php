<?php
/**
 * Custom Posts
 *
 * @package jbr
 * @since 0.0.5
 */

 namespace jbr\cpts;

function register() {

	$args = [
		'public'      => true,
		'has_archive' => false,
	];

	register_post_type( 'porfolio', $args );
}

 add_action( 'after_setup_theme', __NAMESPACE__ . '\\register' );
