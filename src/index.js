/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import edit from './edit';

import metadata from '../block.json';

const { name, icon } = metadata;

export { metadata, name };

export const settings = {
	title: __( 'Terms', 'terms-block' ),
	icon,
	edit,
	save: () => null,
};
