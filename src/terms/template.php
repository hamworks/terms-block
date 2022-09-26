<?php
/**
 * View template.
 *
 * @var array $args {
 *      @type WP_Term[] $terms
 * }
 */
?>
<ul>
	<?php foreach ( $args['terms'] as $term ) : //phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited ?>
		<?php /** @var WP_Term $term */ ?>
		<li><a href="<?php echo esc_js( get_term_link( $term ) ); ?>"><?php echo esc_html( $term->name ); ?></a></li>
	<?php endforeach; ?>
</ul>
