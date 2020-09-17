<?php
/**
 * Plugin Name:     Terms Block
 * Plugin URI:      https://github.com/team-hamworks/terms-block
 * Description:     Term list block.
 * Author:          HAMWORKS
 * Author URI:      https://ham.works
 * License:         GPLv2 or later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     terms-block
 * Domain Path:     /languages
 * Version: nigltly
 */

require_once __DIR__ . '/vendor/autoload.php';

add_action(
	'init',
	function() {
		new HAMWORKS\WP\Dynamic_Block\Dynamic_Block_Factory( __DIR__ );
	}
);
