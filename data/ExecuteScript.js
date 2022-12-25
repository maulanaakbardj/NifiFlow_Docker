var flowFile = session.get();

if (flowFile !== null) {

  var StreamCallback = Java.type("org.apache.nifi.processor.io.StreamCallback");
  var IOUtils = Java.type("org.apache.commons.io.IOUtils");
  var StandardCharsets = Java.type("java.nio.charset.StandardCharsets");

  flowFile = session.write(flowFile, new StreamCallback(function (inputStream, outputStream) {
    // Read input FlowFile content
    var inputText = IOUtils.toString(inputStream, StandardCharsets.UTF_8);
    var inputObj = JSON.parse(inputText);
    var outputObj = inputObj.map(function(data){
      var newData = {
        email: data.email,
        gender: data.gender,
        phone_number:data.phone_number,
        birthdate: data.birthdate * 1000
    };
    return newData;
  })
    // Write output content
    outputStream.write(JSON.stringify(outputObj, null, "\t").getBytes(StandardCharsets.UTF_8));
  }));

  // Finish by transferring the FlowFile to an output relationship
  session.transfer(flowFile, REL_SUCCESS);
}
