<span class="screen-reader-text">404: Page not Found</span>
<div class="container">
<div class="wrapper-404" id="parallax">
    <?php
    
    for($i = 0; $i < 70; $i++ ){
        switch($i%5){
            case 0:
                echo '<span data-depth="-1"></span>';
            break;
            case 1:
                echo '<span data-depth="-2"></span>';
            break;
            case 2:
                echo '<span data-depth="1"></span>';
            break;
            case 3:
                echo '<span data-depth="2"></span>';
            break;
            default:
                echo '<span data-depth="3"></span>';
        }

    }
    
    
    ?>
   
</div>
</div>