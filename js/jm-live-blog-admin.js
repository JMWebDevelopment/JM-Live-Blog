jQuery( document ).ready( function() {
    jQuery( '#live-blog-add-row' ).on('click', function() {
        var row = jQuery( '.live-blog-empty-row.screen-reader-text' );
        row.addClass( 'new-row jm-live-blog-fields' );
        row.removeClass( 'live-blog-empty-row screen-reader-text' );
        row.insertBefore( '.jm-live-blog-fields:first' );
        jQuery( '.new-row .new-field' ).attr( "disabled",false );
        return false;
    } );

    jQuery( '.live-blog-remove-row' ).on( 'click', function() {
        jQuery( this ).parents( 'table' ).remove();
        return false;
    } );
    jQuery( '#live_blog_alert_color' ).wpColorPicker();
    if ( jQuery( '#live_blog_show_widget').prop( 'checked' ) === true ) {
        jQuery( '#jm-live-blog-widget-title-row' ).show();
        jQuery( '#jm-live-blog-widget-description-row' ).show();
    } else {
        jQuery( '#jm-live-blog-widget-title-row' ).hide();
        jQuery( '#jm-live-blog-widget-description-row' ).hide();
    }

    $('input[type=radio][name=live_blog_show_widget]').change(function() {
        if (this.value === 'yes') {
            jQuery( '#jm-live-blog-widget-title-row' ).show();
            jQuery( '#jm-live-blog-widget-description-row' ).show();
        }
        if (this.value === 'no') {
            jQuery( '#jm-live-blog-widget-title-row' ).hide();
            jQuery( '#jm-live-blog-widget-description-row' ).hide();
        }
    });

} );

