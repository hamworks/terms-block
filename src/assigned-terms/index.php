<?php
use HAMWORKS\WP\Dynamic_Block\Dynamic_Block;

add_action(
	'init',
	function () {
		new Dynamic_Block( __DIR__ . '/../../build/assigned-terms' );
	}
);


add_filter(
	'hw_dynamic_block_fallback_template_path_to_terms-block/assigned-terms',
	function () {
		return __DIR__ . '/../../src/terms-block/template.php';
	}
);

add_filter(
	'hw_dynamic_block_template_arguments_to_terms-block/assigned-terms',
	function ( $arguments, $attributes ) {
		$taxonomy = $attributes['taxonomy'];
		$terms    = get_the_terms( get_post(), $taxonomy );

		$arguments['taxonomy'] = $attributes['taxonomy'];
		$arguments['terms']    = $terms;

		return $arguments;
	},
	10,
	2
);
