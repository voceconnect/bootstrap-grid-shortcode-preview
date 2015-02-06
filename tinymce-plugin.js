(function() {

	tinymce.PluginManager.add( 'bs_grid_shortcode_ui', function( editor, url ) {

		// replace shortcodes with markup for preview
		editor.on( 'BeforeSetContent', function( e ) {

			if ( e.content ) {

				e.content = wp.shortcode.replace( 'bs_col', e.content, gridShortcodeToPreview );

				e.content = wp.shortcode.replace( 'bs_row', e.content, gridShortcodeToPreview );

			}

		});

		// replace markup with shortcodes for saving
		editor.on( 'PostProcess', function( e ) {



		});

		/**
		 * Convert [bs_col] and [bs_row] to preview divs
		 *
		 * @param wp.shortcode shortcode
		 * @returns string preview HTML
		 */
		function gridShortcodeToPreview( shortcode ) {

			return wp.html.string({
				"tag": "div",
				"attrs": {
					"class": shortcode.get("class"),
					"data-bs_grid_preview": 1
				},
				"content": shortcode.content.trim()
			});

		}

	} );

})();