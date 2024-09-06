<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ffxiv_web' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'PQ_0tsP@>=(^!WR3r~R*+`S|0[Ub`p+ygA(U`C(B:7A?/znU@HXt##Wihc#fKukJ' );
define( 'SECURE_AUTH_KEY',  'ySWBUzV}]ca_@-)G772qr~r.gc6hmzK1RkFo%THe]U,j^7rsb&n+l>cXr5ADqO{)' );
define( 'LOGGED_IN_KEY',    'AKVVl>mWzD3pYO b,In `0n.1QDboV17,@odfLP}sNQ}j[T+} D7Yo/sDBz~,YfI' );
define( 'NONCE_KEY',        ':4V-p$+~6f%uR#/?^oB*U{Y*0T(p+6B63;)TPm@WffF:J@xeP,mK2pN,TTe]PpHi' );
define( 'AUTH_SALT',        'Fvryxf471qO+XYQI%[!1]=_<@,~|}c: L<?MRGd)>l6n#qYB2)SR6|(-e8{##OM1' );
define( 'SECURE_AUTH_SALT', 'ZBg[N*:@S>&f?-VerV!sY}Y]!5`()oh8AZe*UDomQ D:hr*lOGaa}yh(e?Y7B#)t' );
define( 'LOGGED_IN_SALT',   '40;6CQKGIfP/>N[nnj9A(u38c{qK{$&-*+^ #ML1l=Omq@X]1^3*2>b(+K;2bYfi' );
define( 'NONCE_SALT',       '<ThknWtOj]*%wfx$UsvB,v?Uj<oMaMk0m:s(-?7<G6loP?X+[}{cF,{=e7W##8$d' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
