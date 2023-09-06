<?php
/**
 * Plugin Name:     Terms Block
 * Plugin URI:      https://github.com/team-hamworks/terms-block
 * Description:     Term list block. Displays a list of all terms in the selected taxonomy.
 * Author:          HAMWORKS
 * Author URI:      https://ham.works
 * License:         GPLv2 or later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     terms-block
 * Domain Path:     /languages
 * Version: 2.1.0
 */

use HAMWORKS\WP\Dynamic_Block\Dynamic_Block;

require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/src/terms/index.php';
require_once __DIR__ . '/src/assigned-terms/index.php';
require_once __DIR__ . '/src/terms-block/index.php';
