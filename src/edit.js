/**
 * WordPress dependencies
 */

import { ServerSideRender } from '@wordpress/editor';
import {
	__experimentalBlock as Block,
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */

import { name } from '../block.json';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @param {Object} [props]           Properties passed from the editor.
 * @param props.attributes
 * @param {string} [props.className] Class name generated for the block.
 * @return {WPElement} Element to render.
 */
export default function Edit( { className, attributes } ) {
	return (
		<Block.div>
			<ServerSideRender
				className={ className }
				block={ name }
				attributes={ attributes }
			/>
		</Block.div>
	);
}
