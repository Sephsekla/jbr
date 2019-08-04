<?php $id = get_queried_object_id();


$image_id = get_post_thumbnail_id( $id );

$title = get_the_title( $id );

?>


<section class="banner" style="background-image: url(<?php echo wp_get_attachment_image_url( $image_id, 'banner' ); ?>)">
<div class="container-fluid">
<h1><?php echo $title; ?></h1>
</div>
</section> 
