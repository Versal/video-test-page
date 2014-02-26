$(function(){
  var urls = [
    'http://static-1.versal.com/restapi/assets/b9e45c2d-717a-471a-92e2-295ab7d5b3c8',
    'http://static-1.versal.com/restapi/assets/40c18421-e26a-433f-9e7e-a43f775a91a3',
    'http://static-1.versal.com/restapi/assets/ce5ba717-5d0b-46cb-93b7-95c5c05cb767',
    'http://static-1.versal.com/restapi/assets/e793d208-1b46-466d-bc56-ffd4498154f7',
    'http://static-1.versal.com/restapi/assets/a51e7b9a-3233-4323-8e2c-d4cdfb1f2a88',
    'http://static-1.versal.com/restapi/assets/fbbc0a07-25c2-4278-9a96-5da49bebf596'
  ];
  var $list = $('ul');
  for(var i = 0; i < urls.length; i++){
    // Needs self calling function to include index
    // (and as a result url) in its closure
    // for ajax call
    (function() {
      var index = i;
      var templateHTML = "<li><h2>" + urls[i] + "</h2>";
      var url = urls[i];

      $.ajax({
        type:"HEAD",
        async: true,
        url: urls[i],
        complete: function(jqXHR, textStatus) {
          var xOrigin = jqXHR.getResponseHeader('X-Origin');
          var xCache = jqXHR.getResponseHeader('X-Cache');

          var template = templateHTML +'<h3>X-Cache: </h3><h4>' + xCache + '</h4>';
          template += '<h3>X-Origin: </h3><h4>' + xOrigin + '</h4></li>';

          $list.append(template);
        }
      });
    })();
  }
});
