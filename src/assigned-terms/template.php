<?php
/**
 * View template.
 *
 * @var array $args {
 *      @type WP_Term[] $terms
 * }
 */
?>
<div <?php echo get_block_wrapper_attributes(); // phpcs:ignore ?>>
	<ul>
		<?php foreach ( $args['terms'] as $wp_term ) : ?>
			<?php /** @var WP_Term $wp_term WP_Term object. */ ?>
			<li><a href="<?php echo esc_js( get_term_link( $wp_term ) ); ?>"><?php echo esc_html( $wp_term->name ); ?></a></li>
		<?php endforeach; ?>
	</ul>
</div>
