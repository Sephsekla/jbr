<?php

/**
 * Enqueue scripts and styles
 *
 * @package jbr
 *
 * @since 0.0.3
 */

 namespace jbr\scripts;

function init() {
	wp_register_style( 'jbr-styles', get_template_directory_uri() . '/dist/main.min.css', array(), filemtime( get_template_directory() . '/dist/main.min.css' ), 'all' );
}

 add_action('wp_enqueue_scripts', __NAMESPACE__ . '\\init');


