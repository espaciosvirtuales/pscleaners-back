<?php

define('WP_HOME','http://comercializadorajm.com');
define('WP_SITEURL','http://comercializadorajm.com');
/** 
 * Configuración básica de WordPress.
 *
 * Este archivo contiene las siguientes configuraciones: ajustes de MySQL, prefijo de tablas,
 * claves secretas, idioma de WordPress y ABSPATH. Para obtener más información,
 * visita la página del Codex{@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} . Los ajustes de MySQL te los proporcionará tu proveedor de alojamiento web.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */
// ** Ajustes de MySQL. Solicita estos datos a tu proveedor de alojamiento web. ** //
/** El nombre de tu base de datos de WordPress */
define('DB_NAME', 'db70815_lasilla');
/** Tu nombre de usuario de MySQL */
define('DB_USER', 'db70815_silla');
/** Tu contraseña de MySQL */
define('DB_PASSWORD', 'Uh92*^u@lKj');
/** Host de MySQL (es muy probable que no necesites cambiarlo) */
define('DB_HOST', 'internal-db.s70815.gridserver.com');
/** Codificación de caracteres para la base de datos. */
define('DB_CHARSET', 'utf8');
/** Cotejamiento de la base de datos. No lo modifiques si tienes dudas. */
define('DB_COLLATE', '');
/**#@+
 * Claves únicas de autentificación.
 *
 * Define cada clave secreta con una frase aleatoria distinta.
 * Puedes generarlas usando el {@link https://api.wordpress.org/secret-key/1.1/salt/ servicio de claves secretas de WordPress}
 *
 * @since 2.6.0
 */
define('AUTH_KEY', 'pr1:zrD?}yI;szE=`WXgOKPk]7T(D[Va002:FVNPUa4BKHJ|h-1hA`;t#AOrLr<9'); // Cambia esto por tu frase aleatoria.
define('SECURE_AUTH_KEY', '3w/a|5?{xQ&(Iv>@`n$7|  )/KI&[ESzek4|O0OI)[X]w#]!oI]ey{wrDg HG<O0'); // Cambia esto por tu frase aleatoria.
define('LOGGED_IN_KEY', ']7Kp>des`%*:)C$k3P5|J+wg,H7Uv|I3Q1^8@y~N3d_pLpxaPOz-j;R&tnc0E^KH'); // Cambia esto por tu frase aleatoria.
define('NONCE_KEY', '-4|UY-X`lle1d(E3!S#Skcq7?[C2;~Pnztzb3xSTZE}@iaZFAuCtR=;teneqn&8I'); // Cambia esto por tu frase aleatoria.
define('AUTH_SALT', 'PT_]5e$-h4 ry-WJ$-+-{Fm1v7PuJ8:-6hmX#iT.M6UK]a=xSPVdf;)Sw(6^+`2H'); // Cambia esto por tu frase aleatoria.
define('SECURE_AUTH_SALT', '~6b=JrGJ!VH[[4oF8Rj-,Fv]<JAHM|vuV,pJ`WGp+:NNv]`Fve)XAZPX/x:8{FH]'); // Cambia esto por tu frase aleatoria.
define('LOGGED_IN_SALT', './yxOMpyuk8Ic0*e -@;aiu]swQb;Wpi}tn+FnM<QA)=-IRa06EN=8&# i@pqJ5Y'); // Cambia esto por tu frase aleatoria.
define('NONCE_SALT', '}G:+h3^oww;3@i6|xM^+wIM#COd[T:B:dl{my[`l K}DL|V?&rmWhvKNKY]Elu|w'); // Cambia esto por tu frase aleatoria.
/**#@-*/
/**
 * Prefijo de la base de datos de WordPress.
 *
 * Cambia el prefijo si deseas instalar multiples blogs en una sola base de datos.
 * Emplea solo números, letras y guión bajo.
 */
$table_prefix  = 'comJMnuevo_';
/**
 * Idioma de WordPress.
 *
 * Cambia lo siguiente para tener WordPress en tu idioma. El correspondiente archivo MO
 * del lenguaje elegido debe encontrarse en wp-content/languages.
 * Por ejemplo, instala ca_ES.mo copiándolo a wp-content/languages y define WPLANG como 'ca_ES'
 * para traducir WordPress al catalán.
 */
define ('WPLANG', 'es_ES');
/**
 * Para desarrolladores: modo debug de WordPress.
 *
 * Cambia esto a true para activar la muestra de avisos durante el desarrollo.
 * Se recomienda encarecidamente a los desarrolladores de temas y plugins que usen WP_DEBUG
 * en sus entornos de desarrollo.
 */
define('WP_DEBUG', false);
/* ¡Eso es todo, deja de editar! Feliz blogging */
/** WordPress absolute path to the Wordpress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');
/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
?>
