/**
 * WordPress dependencies
 */

import ServerSideRender from '@wordpress/server-side-render';
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import {
	PanelBody,
	SelectControl,
	Disabled,
	Placeholder,
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import { name, icon } from '../block.json';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @param {Object}   [props]               Properties passed from the editor.
 * @param {Object}   [props.attributes]    Attributes.
 * @param {Function} [props.setAttributes] Attribute setter.
 * @param {string}   [props.className]     Class name generated for the block.
 * @return {WPElement} Element to render.
 */
export default function Edit( { className, attributes, setAttributes } ) {
	const blockProps = useBlockProps();
	const { taxonomy } = attributes;
	const taxonomies = useSelect(
		( select ) => select( 'core' ).getTaxonomies( { per_page: -1 } ) || [],
		[]
	);

	const terms = useSelect(
		( select ) =>
			select( 'core' ).getEntityRecords( 'taxonomy', taxonomy, {} ) || [],
		[ taxonomy ]
	);

	const inspectorControls = (
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
	);
	const hasTerms = Array.isArray( terms ) && terms.length;
	if ( ! hasTerms ) {
		return (
			<>
				{ inspectorControls }
				<Placeholder icon={ icon } label={ __( 'Terms' ) }>
					{ __( 'No terms found.' ) }
				</Placeholder>
			</>
		);
	}

	return (
		<>
			{ inspectorControls }
			<div { ...blockProps }>
				<Disabled>
					<ServerSideRender
						className={ className }
						block={ name }
						attributes={ attributes }
					/>
				</Disabled>
			</div>
		</>
	);
}
