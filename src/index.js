/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import edit from './edit';
import metadata from '../block.json';

const { name } = metadata;

registerBlockType( name, {
	...metadata,
	title: __( 'Terms', 'terms-block' ),
	edit,
	save: () => null,
} );
