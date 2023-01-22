/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	PanelColor,
    InspectorControls
} from '@wordpress/block-editor';

import {
	ColorPalette,
    PanelBody,
    TextControl,
    SelectControl,
} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( props ) {
	const {
		attributes,
	} = props;

	const { jm_live_blog_color_scheme, jm_live_blog_update_color, jm_live_blog_title, jm_live_blog_description } = attributes;

	const divStyle = {
		backgroundColor: jm_live_blog_update_color
	};

	return [
		<InspectorControls>
			<PanelBody>
				<TextControl
					label={ __( 'Live Blog Title', 'jm-live-blog' ) }
					value={ jm_live_blog_title }
					onChange={ ( value ) => props.setAttributes( { jm_live_blog_title: value } ) }
				/>
			</PanelBody>
			<PanelBody>
				<TextControl
					label={ __( 'Live Blog Description', 'jm-live-blog' ) }
					value={ jm_live_blog_description }
					onChange={ ( value ) => props.setAttributes( { jm_live_blog_description: value } ) }
				/>
			</PanelBody>
			<PanelBody>
				<SelectControl
					label={ __( 'Color Scheme', 'jm-live-blog' ) }
					value={ jm_live_blog_color_scheme }
					options={ [
						{ value: 'light', label: __( 'Light', 'jm-live-blog' ) },
						{ value: 'dark', label: __( 'Dark', 'jm-live-blog' ) }
					] }
					onChange={  ( value ) => props.setAttributes( { jm_live_blog_color_scheme: value } ) }
				/>
			</PanelBody>

		</InspectorControls>,
		<div { ...useBlockProps() }>
			<div id="jm-live-blog" className={ [ jm_live_blog_color_scheme, ' jm-live-blog-outer' ] }>
				<div className="jm-live-blog-inner">
					<h3 className="jm-live-blog-title">{ jm_live_blog_title }</h3>
					<p className="jm-live-blog-description">{ jm_live_blog_description }</p>
					<div className="jm-live-blog-section-outer">
						<span id="jm-live-blog-new-updates" style={divStyle}>{ __( 'New Updates', 'jm-live-blog' ) }</span>
						<section className="jm-live-blog-section">
							<p>{ __( 'You can add live updates using the custom fields below.', 'jm-live-blog' ) }</p>
						</section>
					</div>
				</div>
			</div>
		</div>
	];
}
