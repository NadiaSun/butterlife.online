var $ = jQuery;

jQuery(document).ready(function($) {
  var alterClass = function() {
    var $window = $(window)
    if ($window.width() < 800) {
      $('.services-items').addClass('owl-carousel').addClass(' owl-theme').addClass('services-carousel');

    } else if ($window.width() >= 801) {
      $('.services-items').removeClass('owl-carousel').removeClass('owl-theme');
    };
  };
  $(window).resize(function(){
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();

  $('button.close').on('click', function(){
    if ($(this).data('id')) {
      var data = {
        action: 'close_alert',
        id: $(this).data('id')
      };
      jQuery.post( '/wp-admin/admin-ajax.php', data, function(response) {
        console.log(response);
      });
    }
  });
});






// Включаем Tooltip
( function($) {

  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    // $('.delete_project').confirmation({
    //     onConfirm: function(value) {
    //         var project_id = $(this).attr('project-id');
    //
    //         $.ajax({
    //             type: 'post',
    //             data: {'action': 'delete_project', 'project_id': project_id},
    //             dataType: 'json',
    //             url: '/wp-admin/admin-ajax.php',
    //             success: function(json) {
    //                 location.reload();
    //             }
    //         })
    //     }
    // });
    $('.delete_project').click(function() {
      var question = 'Удалить этот проект? Проект удалится безвозвратно, без возможности восстановления!';
      var onConfirm = confirm(question);
      if (onConfirm) {
        var project_id = $(this).attr('project-id');

        $.ajax({
          type: 'post',
          data: {'action': 'delete_project', 'project_id': project_id},
          dataType: 'json',
          url: '/wp-admin/admin-ajax.php',
          success: function(json) {
            location.reload();
          }
        })
      }
    });
    $('#user_offer').click(function(e){
      var user_id = $(this).attr('user-id');

      $.ajax({
        type: 'post',
        data: {'app_action': 'confirm_offer', 'data': {'user_id': user_id}},
        dataType: 'json',
        url: '?',
        success: function(json) {
          location.reload();
        }
      })
    });
    $('#user_offer_accept').click(function(e){
      var user_id = $(this).attr('user-id');

      $.ajax({
        type: 'post',
        data: {'app_action': 'confirm_offer', 'data': {'user_id': user_id}},
        dataType: 'json',
        url: '?',
        success: function(json) {
          window.location = "https://www.polskoy.com/cabinet/";
        }
      })
    });
    $('#user_offer_decline').click(function(e){
      alert("Вы не можете пользоваться сервисами сайта, если не согласны с публичной офертой");
    });
    // $('.user_offer').confirmation({
    // 	onConfirm: function(value) {
    // 		var user_id = $(this).attr('user-id');
    //
    // 		$.ajax({
    // 			type: 'post',
    // 			data: {'app_action': 'confirm_offer', 'data': {'user_id': user_id}},
    // 			dataType: 'json',
    // 			url: '?',
    // 			success: function(json) {
    // 				location.reload();
    // 			}
    // 		})
    // 	}
    // });

    $('[data-copy]').click(function(e){
      var notify = new Notyf();
      const el = document.createElement('textarea');
      el.value = $(this).data().copy;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);

      notify.confirm("Скопировано в буфер обмена");
    });

    $('[data-toggle="toggle"]').click(function(){
      let target = $(this).data().target;
      let group = $(target).data().group;

      $('div[data-group="' + group + '"]').addClass('hidden');
      $(target).removeClass('hidden');
    });
  });
} ) ( jQuery );

/* OWL */
jQuery(document).ready(function($) {

  var owl = $('.portfolio-slider');
  owl.owlCarousel({
    margin: 0,
    nav: false,
    dots: true,
    dotsEach: 1,
    loop: true,
    items: 3,
    navSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 2000,
    autoplayHoverPause:false,
    responsive:{
      0:{
        items: 1
      },
      600:{
        items: 2
      },
      1000:{
        items: 3,
        margin: 0
      }
    }
  })

  var owl = $('.services-carousel');
  owl.owlCarousel({

    margin: 0,
    nav: false,
    dots: true,
    dotsEach: 1,
    loop: true,
    items: 3,
    navSpeed: 1000,
    autoplay: false,
    autoplayTimeout: 2000,
    autoplaySpeed: 2000,
    autoplayHoverPause:false,
    responsive:{
      0:{
        stagePadding: 30,
        items: 1
      },
      400:{
        stagePadding: 55,
        items: 1
      },
      600:{
        loop: false,
        items: 4
      },
      1000:{
        items: 4,
        margin: 0
      }
    }
  })


});
