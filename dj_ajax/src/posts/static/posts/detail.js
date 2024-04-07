const backBtn = document.getElementById('back-btn');
const updatBtn = document.getElementById('update-btn');
const deleteBtn = document.getElementById('delete-btn');
const url = window.location.href + "data/";
const spinnerBox = document.getElementById('spinner-box')

backBtn.addEventListener('click', () => {
    history.back();
})

$.ajax({
    type: 'GET',
    url: url,
    success: function(response)
    {
        console.log(response)
        spinnerBox.classList.add('not-visible')
        const data = response.data

        if (data.logged_in === data.author) {
            updatBtn.classList.remove('not-visible')
            deleteBtn.classList.remove('not-visible')
        }
        // response.forEach(el => {
        //     document.getElementById('posts').innerHTML += `
        //         <div class="card mt-3">
        //             <div class="card-header">
        //                 ${el.title}
        //             </div>
        //             <div class="card-body">
        //                 <p class="card-text">${el.body}</p>
        //             </div>
        //         </div>
        //     `
        //})
    },
    error: function(error)
    {
        console.log(error)
    }
})

