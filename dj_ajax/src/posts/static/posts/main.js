console.log("hello world")

const hellowWorldBox = document.getElementById("hello-world")
const postsBox = document.getElementById("posts-box")
const spinnerBox = document.getElementById("spinner-box")

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
        
        setTimeout(() => {
            spinnerBox.classList.add('not-visible')
            console.log(data)
            data.forEach(el => {
                postsBox.innerHTML += `
                    <div class="card mb-2" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${el.title}</h5>
                            <p class="card-text">${el.body}</p>
                            <a href="#" class="btn btn-primary">Details</a>
                        </div>
                    </div>
                `   
            });
          
        }, 100)
   
    },
    error: function(error)
    {
        console.log(error)
    }
})
