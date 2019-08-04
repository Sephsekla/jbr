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

	wp_register_style( 'google-fonts', 'https://fonts.googleapis.com/css?family=PT+Serif:400,400i,700|Roboto:400,700&display=swap', array(), date( 'M' ), 'all' );

	wp_register_style( 'jbr-styles', get_template_directory_uri() . '/dist/main.min.css', array( 'google-fonts' ), filemtime( get_template_directory() . '/dist/main.min.css' ), 'all' );

	wp_enqueue_style( 'jbr-styles' );

	wp_register_script( 'jbr-scripts', get_template_directory_uri() . '/dist/main.js', array( 'jquery' ), filemtime( get_template_directory() . '/dist/main.js' ), true );

	wp_enqueue_script( 'jbr-scripts' );

}

 add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\\init' );


