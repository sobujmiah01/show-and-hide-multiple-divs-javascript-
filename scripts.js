jQuery(function() {
    jQuery(".allbutton").click(function(){
        jQuery(".single").show();
    });
    jQuery(".button").click(function(){
        jQuery(".single").hide();
        jQuery(".div"+ $(this).attr('target')).show();
    });
});