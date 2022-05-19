<?php
/**
 * Plugin Name:     Rating Block
 * Description:     Renders star rating in gutenberg editor block
 * Version:         1.0.1
 * @package         simple-block
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @refer https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function simple_block_rating_block_init() {
	$dir = dirname(__FILE__);

	$script_asset_path = "$dir/build/index.asset.php";
	if (! file_exists($script_asset_path)) {
		throw new Error(
			'Please run `npm start` or `npm run build` for the "simple-block/rating" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require($script_asset_path);
	wp_register_script(
		'rating-block-editor',
		plugins_url($index_js, __FILE__),
		$script_asset['dependencies'],
		$script_asset['version']
	);

	$editor_css = 'build/index.css';
	wp_register_style(
		'rating-block-editor',
		plugins_url($editor_css, __FILE__),
		array(),
		filemtime("$dir/$editor_css")
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'rating-block',
		plugins_url($style_css, __FILE__),
		array(),
		filemtime("$dir/$style_css")
	);

	register_block_type('simple-block/rating', array(
		'editor_script' => 'rating-block-editor',
		'editor_style'  => 'rating-block-editor',
		'style'         => 'rating-block',
	));
}
add_action('init', 'simple_block_rating_block_init');
