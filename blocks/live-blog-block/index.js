/**
 * BLOCK: reference-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */
import icon from './icon';

const { __ } = wp.i18n;
const {
    Editable,
    MediaUpload,
    InspectorControls,
    blockEditRender,
    Spinner,
    ColorPalette
} = wp.editor; // Import registerBlockType() from wp.blocks
const { registerBlockType } = wp.blocks;
const {
    PanelColor,
    PanelBody,
    TextControl,
    Button,
    SelectControl,
} = wp.components;

//this is where block control componants go! a-ha!
const { ToggleControl } = InspectorControls;

//this is where block control componants go! a-ha!
//const { ToggleControl, SelectControl } = InspectorControls;
/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'jm-live-blog/jm-live-blog-block', {
    // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
    title: __('JM Live Blog', 'jm-live-blog' ),
    icon: icon, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
    category: 'widgets', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
    keywords: [
        __( 'JM Live Blog', 'jm-live-blog' ),
        __( 'live blog', 'jm-live-blog' ),
        __( 'updates', 'jm-live-blog' ),
    ],
    attributes: {
        jm_live_blog_color_scheme: {
            type: 'string',
        },
        jm_live_blog_update_color: {
            type: 'string',
            default: '#93060A'
        },
        jm_live_blog_title: {
            type: 'string',
            default: ''
        },
        jm_live_blog_description: {
            type: 'string',
            default: ''
        }
    },

    // The "edit" property must be a valid function.
    edit: props => {

        const { attributes: { jm_live_blog_color_scheme, jm_live_blog_update_color, jm_live_blog_title, jm_live_blog_description },
            className, setAttributes, isSelected } = props;
        return [
            <InspectorControls key="inspector">
                <PanelBody>
                    <TextControl
                        label={ __( 'Live Blog Title', 'jm-live-blog' ) }
                        value={ jm_live_blog_title }
                        onChange={ jm_live_blog_title => setAttributes( { jm_live_blog_title } ) }
                    />
                </PanelBody>
                <PanelBody>
                    <TextControl
                        label={ __( 'Live Blog Description', 'jm-live-blog' ) }
                        value={ jm_live_blog_description }
                        onChange={ jm_live_blog_description => setAttributes( { jm_live_blog_description } ) }
                    />
                </PanelBody>
                <PanelBody>
                    <SelectControl
                        label={ __( 'Color Scheme', 'jm-live-blog' ) }
                        value={ jm_live_blog_color_scheme }
                        options={ [
                            { value: 'lignt', label: __( 'Light', 'jm-live-blog' ) },
                            { value: 'dark', label: __( 'Dark', 'jm-live-blog' ) }
                        ] }
                        onChange={ jm_live_blog_color_scheme => setAttributes( { jm_live_blog_color_scheme } ) }
                    />
                </PanelBody>

                <PanelColor
                    title={ __( 'New Update Alert Color', 'jm-live-blog' ) }
                    colorValue={ jm_live_blog_update_color }
                >
                    <ColorPalette
                        value={ jm_live_blog_update_color }
                        onChange={ jm_live_blog_update_color => setAttributes( { jm_live_blog_update_color } ) }
                    />
                </PanelColor>
            </InspectorControls>,
            <div className={className}>
                <h2>{__('JM Live Blog', 'jm-live-blog')}</h2>
                <p>{__('The JM Live Blog block isn\'t directly editable. You can make changes to the color of the plugin by changing the attributes in the right-hand column. You can updates through the meta fields at the bottom of the editor.', 'jm-live-blog')}</p>
            </div>
        ];
    },

    // The "save" property must be specified and must be a valid function.
    //this is what puts the html in the "edit as html" box
    save() {
        return null;
    },
});