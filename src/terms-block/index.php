<?php
use HAMWORKS\WP\Dynamic_Block\Dynamic_Block;

add_action(
	'init',
	function () {
		new Dynamic_Block( __DIR__ . '/../../build/terms-block' );
	}
);


add_filter(
	'hw_dynamic_block_fallback_template_path_to_terms-block/terms-block',
	function () {
		return __DIR__ . '/../../src/terms-block/template.php';
	}
);

add_filter(
	'hw_dynamic_block_template_arguments_to_terms-block/terms-block',
	function ( $arguments, $attributes ) {
		$taxonomy = $attributes['taxonomy'];

		/**
		 * Filters get_terms arguments.
		 *
		 * @param array $args Second arguments for get_terms.
		 * @param string $taxonomy Taxonomy name.
		 * @param array $attributes Block attributes.
		 */
		$args  = apply_filters( 'terms_block_get_terms_arguments', array( 'taxonomy' => $taxonomy ), $taxonomy, $attributes );
		$terms = get_terms( $args );

		$arguments['taxonomy'] = $attributes['taxonomy'];
		$arguments['terms']    = $terms;

		return $arguments;
	},
	10,
	2
);
