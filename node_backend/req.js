function getall() {
  $.ajax({
    type: 'GET',
    url: 'http://127.0.0.1/user/',
    success: function(data) {
      var ret = jQuery.parseJSON(data);
      $.each(ret, function(index) {
        $('#container').append(ret[index].email + '</br>');
      });
    },
    error: function(xhr, status, error) {
      console.log('Error: ' + error.message);
    }
  });
}
function search(mail) {
  $.ajax({
    type: 'GET',
    url: 'http://127.0.0.1:8080/user/search/' + mail,
    success: function(data) {
      try {
        var ret = jQuery.parseJSON(JSON.stringify(data));
        $('#result').append(ret[0].nome + '</br>');
      } catch (err) {
        alert('Errore nella ricerca: ' + ret.message);
      }
    },
    error: function(xhr, status, error) {
      console.log('Error: ' + error.message);
    }
  });
}

function testpost(lat,longit){
	$.ajax({
    type: 'POST',
	url: 'http://localhost:8080/pin/testcoordinates/',
    //url: 'https://finalgalaxy-shockgen.rhcloud.com/pin/testcoordinates/',
	data: "latitude="+lat+"&longitude="+longit,
	dataType : "html",
    success: function(data) {
		
      try {
        var ret = jQuery.parseJSON(JSON.stringify(data));
		//alert("ret="+ret);
		$('#result').append(ret + '</br>');
      } catch (err) {
        alert('Errore nella ricerca: ' + ret.message);
      }
    },
    error: function(xhr, status, error) {
      alert('Error: ' + error.message);
    }
  });
}