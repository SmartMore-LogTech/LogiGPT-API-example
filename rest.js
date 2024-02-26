const axios = require('axios').default;

axios.post("http://localhost:5001/message/session", {

}).then(async function (response) {
    console.log(response.data);
    message_response = await axios.post("http://localhost:5001/message/", {
        text: "有多少货物", session_id: response.data.session_id
    }, {responseType: 'stream'})

    const stream = message_response.data;

    stream.on('data', data => {
        console.log(data.toString());
    });

    stream.on('end', () => {
        console.log("Stream done.");
    });
}).catch(function (error) {
    console.log(error);
});