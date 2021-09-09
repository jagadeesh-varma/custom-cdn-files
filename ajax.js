/* SERVER calls and base urls */
// POST
var host = "http://3.7.44.132/aquabrahma-web-admin/server2.2/";
var timeoutConfigVal  = 20000;
function fetchApi(action,dataType,data,successCallback,failureCallback){
  $.ajax({
    url: host+action,
    type: "POST",
    dataType:"json",
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