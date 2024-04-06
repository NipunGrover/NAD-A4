console.log("hello world")

const hellowWorldBox = document.getElementById("hello-world")
const postsBox = document.getElementById("posts-box")

$.ajax({
    type: 'GET',
    url: '/hello-world/',
    success: function(response)
    {
        console.log('success', response.text)
        hellowWorldBox.textContent = response.text
    },
    errror: function(error)
    {
        console.log('error', error)
    }

})

$.ajax({
    type: 'GET',
    url: '/data/',
    success: function(response)
    {
        const data = response.data
        console.log(data)
        data.forEach(el => {
            postsBox.innerHTML += `
                ${el.title} - <b>${el.body}</b><br> 
            `   
        });
    },
    error: function(error)
    {
        console.log(error)
    }
})