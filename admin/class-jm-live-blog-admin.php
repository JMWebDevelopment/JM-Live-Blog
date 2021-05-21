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
	public function enqueue_styles() { }

	/**
	 * Enqueues the scripts for the admin side of the plugin.
	 *
	 * @since 2.0.0
	 */
	public function enqueue_scripts() { }

}
