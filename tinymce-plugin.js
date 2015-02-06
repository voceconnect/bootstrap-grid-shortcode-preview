(function() {

	tinymce.PluginManager.add( 'bs_grid_shortcode_ui', function( editor, url ) {

		// replace shortcodes with markup for preview
		editor.on( 'BeforeSetContent', function( e ) {

			if ( e.content ) {

				e.content = replaceShortcodeWithHTML( e.content );

			}

		});

		// replace markup with shortcodes for saving
		editor.on( 'PostProcess', function( e ) {



		});

		/**
		 * Process shortcodes in a block of text
		 *
		 * @param String content containing shortcodes
		 * @returns String content with rendered markup
		 */
		function replaceShortcodeWithHTML( content ) {

			if ( content ) {

				content = wp.shortcode.replace( 'bs_row', content, gridShortcodeToPreview );

				content = wp.shortcode.replace( 'bs_col', content, gridShortcodeToPreview );

			}

			return content;

		}

		/**
		 * Convert [bs_col] and [bs_row] to preview divs
		 *
		 * @param wp.shortcode shortcode
		 * @returns String preview HTML
		 */
		function gridShortcodeToPreview( shortcode ) {

			var content = shortcode.content || "";

			return wp.html.string({
				"tag": "div",
				"attrs": {
					"class": shortcode.get("class"),
					"data-bs_grid_preview": 1
				},
				"content": replaceShortcodeWithHTML( content )
			});

		}

	} );

})();