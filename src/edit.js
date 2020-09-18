/**
 * WordPress dependencies
 */

import { ServerSideRender } from '@wordpress/editor';
import {
	__experimentalBlock as Block,
	InspectorControls,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { PanelBody, SelectControl, Disabled } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { name } from '../block.json';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @param {Object} [props]                  Properties passed from the editor.
 * @param {Object} [props.attributes]       Attributes.
 * @param {Function} [props.setAttributes]  Attribute setter.
 * @param {string} [props.className]        Class name generated for the block.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { className, attributes, setAttributes } ) {
	const { taxonomy } = attributes;
	const taxonomies = useSelect(
		( select ) => select( 'core' ).getTaxonomies() || [],
		[]
	);
	return (
		<>
			<InspectorControls>
				<PanelBody title={ 'Settings' }>
					<SelectControl
						label={ 'Taxonomy' }
						onChange={ ( newTaxonomy ) => {
							setAttributes( { taxonomy: newTaxonomy } );
						} }
						value={ taxonomy }
						options={ [
							...taxonomies.map(
								( { name: label, slug: value } ) => ( {
									value,
									label,
								} )
							),
						] }
					/>
				</PanelBody>
			</InspectorControls>
			<Block.div>
				<Disabled>
					<ServerSideRender
						className={ className }
						block={ name }
						attributes={ attributes }
					/>
				</Disabled>
			</Block.div>
		</>
	);
}
