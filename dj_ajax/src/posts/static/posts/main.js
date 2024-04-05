console.log("hello world")

const hellowWorldBox = document.getElementById("hello-world")


$.ajax({
    type: 'GET',
    url: '/hello-world/',
    success: function(response)
    {
        console.log('success', response.text)
    },
    errror: function(error)
    {
        console.log('error', error)
    }

})