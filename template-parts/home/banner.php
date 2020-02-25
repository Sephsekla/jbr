<?php


$page_id = get_queried_object_id();

	$id = $page_id;



$image_id =  get_post_thumbnail_id( has_post_thumbnail($page_id) ? $page_id : $id );

get_post_thumbnail_id( $id );

$title = get_the_title( $id );

?>


<section class="banner banner-home" style="background-image: url(<?php echo wp_get_attachment_image_url( $image_id, 'banner' ); ?>)">
<?php jbr\utilities\picture( $image_id, 'banner' ); ?>
<div class="screen" aria-hidden="true">
	<pre id="home-screen"> </pre>
</div>
<div class="inner">
<div class="container-fluid">
<h1 style="background-image: url(<?php echo wp_get_attachment_image_url( $image_id, 'banner' ); ?>)" data-title="<?php echo $title; ?>"><span><?php echo $title; ?></span></h1>
</div>
<div class="banner-content container">
<?php the_content() ?>
</div>

</div>
</section> 
