<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'comerdb' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'r-L))8x{}B0d7fg(v$ZU7%vbB7w|F-|2xfJZ)CKr<l-EPR|vc<,H5/VQkO 0uTK@' );
define( 'SECURE_AUTH_KEY',  'N(EkSH[PM$<amOI)9EAKVDJ,Gjs,mIy~C-+Fcp7:k&L@Bo0]`qx<-1@|K_AR42WQ' );
define( 'LOGGED_IN_KEY',    '|K;Yt7q!n{b1<*9UQ]6=dSXb`1?;,F*u2i[dt;3*)wo]o}K/fLS:4{w&|+)O>:j ' );
define( 'NONCE_KEY',        ']YracSH30{~$Drtt4s)+A!)]~hLD7CBe7;IqQ|g8,r7#l0x:%Bm=7 sT5R}JywWy' );
define( 'AUTH_SALT',        ')y%nEH?t5(=~n4}7@?[1=+%/d=PC1TDcAl7L%f|*=ZnafGL[Pb!=`Sbf1xB<L23@' );
define( 'SECURE_AUTH_SALT', '`{Wqfgbfq],bh.}fa9qv>wX< `<WwWcG7dQ=V3|L@LY%B>|_/foY}}|Fb;51x#_7' );
define( 'LOGGED_IN_SALT',   '}7)[ixR5MSVD7)-_CJ/n#+-!|UE]jX|E)ZLNv-(n04;V`Vc1fgJ5wk6lQ1 WG@n-' );
define( 'NONCE_SALT',       '$7Y/vhQU9( Wv:ft{a5ve{$o)l9>p`G0r~1c!2mK&dmdk 2n.LKyH6HauI65^r56' );

/**#@-*/

/**
 * WordPress Database Table prefix.
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
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
