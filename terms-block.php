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
 * Version: 0.0.1
 */

use HAMWORKS\WP\Dynamic_Block\Dynamic_Block;

require_once __DIR__ . '/vendor/autoload.php';

add_action(
	'init',
	function() {
		new Dynamic_Block( __DIR__ );
	}
);
