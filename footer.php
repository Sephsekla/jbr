
</div> <!-- /content -->

<footer class="site-footer">
    <div class="container">
        <div class="row">
            <div class="col-6"><p>&copy; Joe Bailey-Roberts <?php echo date('Y') ?></p></div>
            <div class="col-6"> <?php
					wp_nav_menu(
						array(
							'theme_location' => 'footer',
							'menu_id'        => 'footer-menu',
						)
					);
					?></div>
        </div>
        

       
    </div>
</footer>


</div> <!-- /page -->
<div class="loader"></div>
<div class="loader-2 active"></div>
<?php do_action('wp_footer') ?>
</body>
</html>