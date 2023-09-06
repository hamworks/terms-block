# Terms Block
Contributors:      Toro_Unit,hamworks,mel_cha  
Donate link:       https://www.paypal.me/torounit  
Tags:              Gutenberg, term, block  
Requires at least: 6.0  
Tested up to:      6.3 
Requires PHP:      7.4  
Stable tag:        2.1.0
License:           GPLv2 or later  
License URI:       https://www.gnu.org/licenses/gpl-2.0.html  

Term list block. Displays a list of all terms in the selected taxonomy.

## Description

Term list block. Displays a list of all terms in the selected taxonomy.

You can change the display by placing a template file in your theme.

1. template-parts/blocks/terms-block/`block-name`-`block-style`.php
1. template-parts/blocks/terms-block/`block-name`.php

Filter for `get_terms`.

```php
add_filter( 'terms_block_get_terms_arguments', 'my_filter', 10, 3 );
function my_filter( $args, $taxonomy, $attributes ) {
	$args = array_merge( $args, array( 'orderby' => 'order' ) );

	return $args;
}
```

## Changelog

### 2.1.0
* support WordPress 6.3.
* fix for deprecated parameters in get_terms.

### 2.0.3
* use get_block_wrapper_attributes

### 2.0.2
* use @wordpress/server-side-render

### 2.0.0
* add assigned terms block
* rename terms-block to terms

### 1.0.0
* Tested on WordPress 5.8.

### 0.2.0
* Add `terms_block_get_terms_arguments` filter.
* Tested on WordPress 5.6.

### 0.0.5
* First release.

### 0.0.1
* Internal release.

