<?php
/**
 * Get assets
 *
 * @package jbr
 * @since 0.0.4
 */

 namespace jbr\assets;

function get_asset_path( $asset ) {
	return trailingslashit( get_stylesheet_directory_uri() ) . 'dist/assets/' . $asset;
}
