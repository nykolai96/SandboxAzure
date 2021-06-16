module.exports = async function (context, request) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (request.query.name || (request.body && request.body.name));

    let responseMessage = "This HTTP triggered function executed successfully.";
    if(name?.length > 0) 
    {
        responseMessage+= "\nHello, "+ name+ ", from JavaScript";
    }

    try {
        context.bindings.queueItem = responseMessage;

        context.bindings.response = {
            status: 200, /* Defaults to 200 */
            body: responseMessage
        };
    
        context.done();
    }
    catch (error) {
        context.response = {
            status: 400,
            body: error
        };

        context.log(error);
    }
}