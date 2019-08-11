<?php


$id = get_queried_object_id();

if ( get_post_type( $id ) === 'post' ) {
	$id = get_option( 'page_for_posts' );
} elseif ( is_archive() ) {
	$id = get_option( 'page_for_posts' );
}


$image_id = get_post_thumbnail_id( $id );

$title = get_the_title( $id );

?>


<section class="banner" style="background-image: url(<?php echo wp_get_attachment_image_url( $image_id, 'banner' ); ?>)">
<?php jbr\utilities\picture( $image_id, 'banner' ); ?>
<div class="inner">
<div class="container-fluid">
<h1 style="background-image: url(<?php echo wp_get_attachment_image_url( $image_id, 'banner' ); ?>)" data-title="<?php echo $title; ?>"><?php echo $title; ?></h1>
</div>
</div>
</section> 
