<section class="latest">
    <div class="container"><h2>Latest post</h2></div>
    <?php $latest_query = new WP_Query(
        [
            'post_type' => 'post',
            'posts_per_page' => 1
        ]
        );

        if($latest_query->have_posts()){
            while($latest_query->have_posts()){
                $latest_query->the_post();

                get_template_part('template-parts/content', 'latest');
            }
        }

        ?>
</section>