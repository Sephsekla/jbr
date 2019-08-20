<?php

$portfolio_query = new WP_Query(
    [
        'post_type' => 'portfolio',
        'posts_per_page' => -1,
    ]
    );

    if ($portfolio_query->have_posts()) {
    $i = 0;
    while ($portfolio_query->have_posts()) {
        $portfolio_query->the_post();

        get_template_part('template-parts/portfolio/portfolio', $i%2);
       the_title();
        $i++;
    }
}
