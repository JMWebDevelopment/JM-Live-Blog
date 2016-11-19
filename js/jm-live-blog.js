jQuery( document ).ready(function( $ ) {

    var updateIds = [];

    window.setInterval( checkUpdates, 30000 );

   function checkUpdates() {
       $( '.jm-live-blog-outer .jm-live-blog-section .jm-live-blog-update' ).map( function () {
           var updateID = this.id;
           updateID = updateID.replace( /\D/g,'' );
           updateIds.push( updateID );
       } );
       $.post({
           url : jmliveblog.url,
           data : {
               nonce : jmliveblog.nonce,
               action : 'jm_live_blog_ajax',
               post_id : jmliveblog.post_id,
               update_ids : updateIds
           },
           success : function ( response ) {
               $( response.data ).each( function() {
                   var updateID = this.id;
                   updateID = updateID.replace( /\D/g,'' );
                   updateIds.push( updateID );
               } );
               if ( response.data != '' ) {
                   $( '.jm-live-blog-outer .jm-live-blog-section-outer #jm-live-blog-new-updates' ).show();
                   $( '.jm-live-blog-outer .jm-live-blog-section-outer #jm-live-blog-new-updates' ).on( 'click', function() {
                       $( '.jm-live-blog-outer .jm-live-blog-section-outer #jm-live-blog-new-updates' ).hide();
                       $( ".jm-live-blog-outer .jm-live-blog-section" ).animate( { scrollTop: 0 }, "fast" );
                       var html = $( response.data ).html();
                       $( response.data ).insertBefore( '.jm-live-blog-outer .jm-live-blog-section .jm-live-blog-update:first' ).fadeIn( 'fast' );
                   } );
               } else {
               }
           }
       })
   }
});
