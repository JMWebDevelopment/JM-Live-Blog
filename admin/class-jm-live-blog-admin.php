<?php
/**
 * Holds all of the admin side functions.
 *
 * PHP version 7.3
 *
 * @link       https://jacobmartella.com
 * @since      2.0.0
 *
 * @package    JM_Live_Blog
 * @subpackage JM_Live_Blog/admin
 */

namespace JM_Live_Blog;

/**
 * Runs the admin side.
 *
 * This class defines all code necessary to run on the admin side of the plugin.
 *
 * @since      2.0.0
 * @package    JM_Live_Blog
 * @subpackage JM_Live_Blog/admin
 */
class JM_Live_Blog_Admin {

	/**
	 * Version of the plugin.
	 *
	 * @since 2.0.0
	 * @var string $version Description.
	 */
	private $version;


	/**
	 * Builds the JM_Live_Blog_Admin object.
	 *
	 * @since 2.0.0
	 *
	 * @param string $version Version of the plugin.
	 */
	public function __construct( $version ) {
		$this->version = $version;
	}

	/**
	 * Enqueues the styles for the admin side of the plugin.
	 *
	 * @since 2.0.0
	 */
	public function enqueue_styles() {
		global $pagenow;
		global $post;
		if ( ( 'post.php' === $pagenow || 'post-new.php' === $pagenow ) && ( 'post' === $post->post_type || 'page' === $post->post_type ) ) {
			wp_enqueue_style( 'wp-color-picker' );
			wp_enqueue_style( 'jm-live-blog-admin', plugin_dir_url( __FILE__ ) . 'css/admin-styles.min.css', [], $this->version, 'all' );
		}
	}

	/**
	 * Enqueues the scripts for the admin side of the plugin.
	 *
	 * @since 2.0.0
	 */
	public function enqueue_scripts() {
		global $pagenow;
		global $post;
		if ( ( 'post.php' === $pagenow || 'post-new.php' === $pagenow ) && ( 'post' === $post->post_type || 'page' === $post->post_type ) ) {
			wp_enqueue_script( 'wp-color-picker' );
			wp_enqueue_script( 'jm-live-blog-admin-script', plugin_dir_url( __FILE__ ) . 'js/jm-live-blog-admin.min.js', [ 'jquery' ], $this->version, 'all' );
		}
	}

	public function add_meta_boxes() {
		add_meta_box( 'live-blog-updates-meta', __( 'Live Blog Updates', 'jm-live-blog' ), [ $this, 'create_meta_box' ], array( 'post', 'page' ), 'normal', 'default' );
	}

	public function create_meta_box() {
		global $post;
		global $current_screen;

		$color_array['light'] = 'Light';
		$color_array['dark']  = 'Dark';
		$current_screen       = get_current_screen();

		$updates            = get_post_meta( $post->ID, 'live_blog_updates', true );
		$color_scheme       = get_post_meta( $post->ID, 'live_blog_color_scheme', true );
		$alert_color        = get_post_meta( $post->ID, 'live_blog_alert_color', true );
		$show_widget        = get_post_meta( $post->ID, 'live_blog_show_widget', true );
		$widget_title       = get_post_meta( $post->ID, 'live_blog_widget_title', true );
		$widget_description = get_post_meta( $post->ID, 'live_blog_widget_description', true );
		wp_nonce_field( 'live_blog_updates_meta_box_nonce', 'live_blog_updates_meta_box_nonce' );
		if ( '' === $show_widget || null === $show_widget ) {
			$show_widget = 0;
		}

		echo '<div id="jm-live-blog-repeatable-fieldset-one" width="100%">';

		if ( ( ! method_exists( $current_screen, 'is_block_editor' ) && ! $current_screen->is_block_editor() ) || ( function_exists( 'is_gutenberg_page' )) && ! is_gutenberg_page() ) {
			echo '<table class="jm-live-blog-field">';
			echo '<tr>';
			echo '<td><label for="live_blog_color_scheme">' . __( 'Color Scheme', 'jm-live-blog' ) . '</label></td>';
			echo '<td colspan="2"><select class="live_blog_color_scheme" name="live_blog_color_scheme">';
			foreach ( $color_array as $key => $name ) {
				if ( $key === $color_scheme ) {
					$selected = 'selected="selected"';
				} else {
					$selected = '';
				}
				echo '<option value="' . esc_attr( $key ) . '" ' . esc_html( $selected ) . '>' . esc_html( $name ) . '</option>';
			}
			echo '</select></td>';
			echo '</tr>';
			echo '<tr>';
			echo '<td><label for="live_blog_alert_color">' . esc_html__( 'New Update Alert Color', 'jm-live-blog' ) . '</label></td>';
			echo '<td colspan="2"><input type="text" name="live_blog_alert_color" id="live_blog_alert_color" value="' . esc_attr( $alert_color ) . '" class="cpa-color-picker" ></td>';
			echo '</tr>';
			echo '<tr>';
			echo '<td><label for="live_blog_show_widget">' . esc_html__( 'Use Live Blog Widget', 'jm-live-blog' ) . '</label></td>';
			echo '<td><input type="radio" name="live_blog_show_widget" id="live_blog_hide_widget" value="no" ' . checked( $show_widget, 0, false ) . ' /> ' . __( 'No', 'jm-live-blog' ) . '</td>';
			echo '<td><input type="radio" name="live_blog_show_widget" id="live_blog_show_widget" value="yes" ' . checked( $show_widget, 1, false ) . ' /> ' . __( 'Yes', 'jm-live-blog' ) . '</td>';
			echo '</tr>';
			echo '<tr id="jm-live-blog-widget-title-row">';
			echo '<td><label for="live_blog_widget_title">' . esc_html__( 'Live Blog Widget Title', 'jm-live-blog' ) . '</label></td>';
			echo '<td colspan="2"><input type="text" name="live_blog_widget_title" id="live_blog_widget_title" value="' . esc_attr( $widget_title ) . '" /></td>';
			echo '</tr>';
			echo '<tr id="jm-live-blog-widget-description-row">';
			echo '<td><label for="live_blog_widget_description">' . esc_html__( 'Live Blog Widget Description', 'jm-live-blog' ) . '</label></td>';
			echo '<td colspan="2"><input type="text" name="live_blog_widget_description" id="live_blog_widget_description" value="' . esc_attr( $widget_description ) . '" /></td>';
			echo '</tr>';
			echo '</table>';

		}

		echo '<p><a id="live-blog-add-row" class="button" href="#">' . esc_html__( 'Add Update', 'jm-live-blog' ) . '</a></p>';

		echo '<table class="live-blog-empty-row screen-reader-text">';
		echo '<tr>';
		echo '<td><label for="live_blog_updates_title">' . esc_html__( 'Update Title', 'jm-live-blog' ) . '</label></td>';
		echo '<td><input class="new-field jm_live_blog_input" disabled="disabled" type="text" name="live_blog_updates_title[]" id="live_blog_updates_title" value="" /></td>';
		echo '</tr>';

		echo '<tr>';
		echo '<td><label for="live_blog_updates_time">' . esc_html__( 'Update Time', 'jm-live-blog' ) . '</label></td>';
		echo '<td><input class="new-field jm_live_blog_input" disabled="disabled" type="text" name="live_blog_updates_time[]" id="live_blog_updates_time" value="" /></td>';
		echo '</tr>';

		echo '<tr>';
		echo '<td><label for="live_blog_updates_content">' . esc_html__( 'Update Content', 'jm-live-blog' ) . '</label></td>';
		echo '<td>';
		wp_editor( '', 'live_blog_updates_content_hidden', $settings = array( 'textarea_name' => 'live_blog_updates_content[]' ) );
		echo '</td>';
		echo '</tr>';

		echo '<tr><td><a class="button live-blog-remove-row" href="#">' . esc_html__( 'Remove Update', 'jm-live-blog' ) . '</a></td></tr>';
		echo '</table>';

		if ( $updates ) {

			$i = 1;

			foreach ( $updates as $update ) {
				$num = convert_number_to_words( $i );
				$num = preg_replace( "/[\s_]/", "_", $num );
				$i++;
				echo '<table class="jm-live-blog-fields">';
				echo '<tr>';
				echo '<td><label for="live_blog_updates_title">' . esc_html__( 'Update Title', 'jm-live-blog' ) . '</label></td>';
				echo '<td><input type="text" name="live_blog_updates_title[]" id="live_blog_updates_title" class="jm_live_blog_input" value="' . esc_attr( htmlentities( $update['live_blog_updates_title'] ) ) . '" /></td>';
				echo '</tr>';

				echo '<tr>';
				echo '<td><label for="live_blog_updates_time">' . esc_html__( 'Update Time', 'jm-live-blog' ) . '</label></td>';
				echo '<td><input type="text" name="live_blog_updates_time[]" id="live_blog_updates_time" class="jm_live_blog_input" value="' . esc_attr( $update['live_blog_updates_time'] ) . '" /></td>';
				echo '</tr>';

				echo '<tr>';
				echo '<td><label for="live_blog_updates_content">' . esc_html__( 'Update Content', 'jm-live-blog' ) . '</label></td>';
				$update_content = $update['live_blog_updates_content'];
				echo '<td>';
				wp_editor( htmlspecialchars_decode( $update_content ), 'live_blog_updates_content_' . $num, $settings = array( 'textarea_name'=>'live_blog_updates_content[]' ) );
				echo '</td>';
				echo '</p>';

				echo '<tr><td><a class="button live-blog-remove-row" href="#">' . esc_html__( 'Remove Update', 'jm-live-blog' ) . '</a></td></tr>';
				echo '</table>';
			}

		} else {
			echo '<table class="jm-live-blog-fields">';
			echo '<tr>';
			echo '<td><label for="live_blog_updates_title">' . esc_html__( 'Update Title', 'jm-live-blog' ) . '</label></td>';
			echo '<td><input type="text" name="live_blog_updates_title[]" id="live_blog_updates_title" class="jm_live_blog_input" value="" /></td>';
			echo '</tr>';

			echo '<tr>';
			echo '<td><label for="live_blog_updates_time">' . esc_html__( 'Update Time', 'jm-live-blog' ) . '</label></td>';
			echo '<td><input type="text" name="live_blog_updates_time[]" id="live_blog_updates_time" class="jm_live_blog_input" value="" /></td>';
			echo '</tr>';

			echo '<tr>';
			echo '<td><label for="live_blog_updates_content">' . esc_html__( 'Update Content', 'jm-live-blog' ) . '</label></td>';
			echo '<td>';
			wp_editor( '', 'live_blog_updates_content', $settings = array( 'textarea_name'=>'live_blog_updates_content[]' ) );
			echo '</td>';
			echo '</tr>';

			echo '<tr><td><a class="button live-blog-remove-row" href="#">' . esc_html__( 'Remove Update', 'jm-live-blog' ) . '</a></td></tr>';
			echo '</table>';
		}

		echo '</div>';
	}

	public function save_meta_box() {
		$color_array['light'] = 'Light';
		$color_array['dark']  = 'Dark';
		if ( ! isset( $_POST['live_blog_updates_meta_box_nonce'] ) || ! wp_verify_nonce( $_POST['live_blog_updates_meta_box_nonce'], 'live_blog_updates_meta_box_nonce' ) ) {
			return;
		}

		if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
			return;
		}

		if ( ! current_user_can( 'edit_post', $post_id ) ) {
			return;
		}

		$old = get_post_meta( $post_id, 'live_blog_updates', true );
		$new = array();

		if ( isset( $_POST['live_blog_updates_title'] ) ) {
			$title = $_POST['live_blog_updates_title'];
		} else {
			$title = [];
		}
		if ( isset( $_POST['live_blog_updates_time'] ) ) {
			$time = $_POST['live_blog_updates_time'];
		} else {
			$time = [];
		}
		$content            = $_POST['live_blog_updates_content'];
		$color              = $_POST['live_blog_color_scheme'];
		$alert_color        = $_POST['live_blog_alert_color'];
		$widget_title       = $_POST['live_blog_widget_title'];
		$widget_description = $_POST['live_blog_widget_description'];

		$num = count( $title );

		if ( $color && array_key_exists( $color, $color_array ) ) {
			update_post_meta( $post_id, 'live_blog_color_scheme', wp_filter_nohtml_kses( $_POST['live_blog_color_scheme'] ) );
		}

		if ( 'yes' === $_POST['live_blog_show_widget'] ) {
			$widget = 1;
		} else {
			$widget = 0;
		}

		update_post_meta( $post_id, 'live_blog_show_widget', intval( $widget ) );
		update_post_meta( $post_id, 'live_blog_widget_title', wp_filter_nohtml_kses( $widget_title ) );
		update_post_meta( $post_id, 'live_blog_widget_description', wp_filter_nohtml_kses( $widget_description ) );

		$alert_color = trim( $alert_color );
		$alert_color = wp_strip_all_tags( stripslashes( $alert_color ) );

		if ( true === $this->check_color( $alert_color ) ) {
			update_post_meta( $post_id, 'live_blog_alert_color', $alert_color );
		}

		for ( $i = 0; $i < $num; $i++ ) {
			if ( '' === $content[ $i ] || null === $content[ $i ] ) {
				unset( $content[ $i ] );
				$content = array_values( $content );
			}
		}

		for ( $i = 0; $i < $num; $i++ ) {

			if ( ( isset( $title[ $i ] ) && '' !== $title[ $i ] ) ) {

				if ( isset( $title[ $i ] ) ) {
					$new[ $i ]['live_blog_updates_title'] = wp_filter_nohtml_kses( $title[ $i ] );
				}

				if ( isset( $time[ $i ] ) ) {
					$new[ $i ]['live_blog_updates_time'] = wp_filter_nohtml_kses( $time[ $i ] );
				}

				$new[ $i ]['live_blog_updates_content'] = $content[ $i ];

			}
		}
		if ( ! empty( $new ) && $old !== $new ) {
			update_post_meta( $post_id, 'live_blog_updates', $new );
		} elseif ( empty( $new ) && $old ) {
			delete_post_meta( $post_id, 'live_blog_updates', $old );
		}
	}

	/**
	 * Adds in the TinyMCE Editor buttons.
	 *
	 * @since 2.0.0
	 */
	public function story_lines_buttons() {
		add_filter( 'mce_external_plugins', [ $this, 'add_buttons' ] );
		add_filter( 'mce_buttons', [ $this, 'register_buttons' ] );
	}

	/**
	 * Adds in the JavaScript for the button.
	 *
	 * @since 2.0.0
	 *
	 * @param array $plugin_array      The incoming array of plugins.
	 */
	public function add_buttons( $plugin_array ) {
		$plugin_array['jm_live_blog'] = plugin_dir_url( __FILE__ ) . 'js/jm-breaking-news-admin-button.min.js';
		return $plugin_array;
	}

	/**
	 * Adds in the button for the TinyMCY editor.
	 *
	 * @since 2.0.0
	 *
	 * @param array $buttons      The incoming array of buttons.
	 */
	public function register_buttons( $buttons ) {
		array_push( $buttons, 'jm_live_blog' );
		return $buttons;
	}

	/**
	 * Checks to make sure the value is a color in hexidecimal format.
	 *
	 * @since 2.0.0
	 *
	 * @param string $value      The color value given.
	 * @return bool              Whether or not the value is a color code in hexidecimal format.
	 */
	public function check_color( $value ) {
		if ( preg_match( '/^#[a-f0-9]{6}$/i', $value ) ) {
			return true;
		}

		return false;
	}

}
