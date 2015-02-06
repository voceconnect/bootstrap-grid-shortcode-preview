<?php
/*
  Plugin Name: Bootstrap Grid Shortcode Preview
  Version: 0.1
  Plugin URI: http://voceconnect.com/
  Description: Renders the Bootstrap Grid shortcode in TinyMCE
  Author: Voce Platforms, Jeff Stieler
  Author URI: http://voceconnect.com/
 */

class Bootstrap_Grid_Shortcode_Preview_Plugin {

	const PLUGIN_SLUG = 'bs_grid_shortcode_ui';

	function add_tinymce_plugin( $mce_external_plugins ) {

		$mce_external_plugins[self::PLUGIN_SLUG] = plugins_url( 'tinymce-plugin.js', __FILE__ );

		return $mce_external_plugins;

	}

	function attach_hooks() {

		// TODO: only add the plugin if the Bootstrap Grid is enabled
		add_filter( 'mce_external_plugins', array( $this, 'add_tinymce_plugin' ) );

	}

	function init() {

		$this->attach_hooks();

	}

}

add_action( 'init', array( new Bootstrap_Grid_Shortcode_Preview_Plugin(), 'init' ) );