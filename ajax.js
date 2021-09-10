/* SERVER calls and base urls */
// POST
var host = "http://192.168.43.178/telugu-devotional-admin/speed_api.php";
var timeoutConfigVal  = 20000;
function fetchApi(dataType,data,successCallback,failureCallback){
  $.ajax({
    url: host,
    type: "POST",
    dataType:dataType,
    data : data,
    timeout:timeoutConfigVal,
    success: function(response) {

      if(response.status == false){
        /**
         * TODO: If this error related to user block message. Need to redirect to Login.
        */
      }
      // callback function
      successCallback(response);
    },
    error: function(error){
      // throw error in logs
      console.log(error);
      failureCallback(error)
    }
  });
}