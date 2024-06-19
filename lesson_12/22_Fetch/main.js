//Fetch

// APT -> Fetch -> JSON/XML
// JSON.parse -> Javascript types

var postAPI = 'https://jsonplaceholder.typicode.com/posts';


// stream
fetch(postAPI)
    .then(function(response) {
        return response.json();
        // JSON.parse: JSON -> Javascript types
    })
    .then(function(post) {
        var htmls = post.map(function(post) {
            return `<li>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </li>`;
        });

        var html = htmls.join('');
        document.getElementById('post-block').innerHTML = html;
    })
    .catch(function(err) {
        alert('Error');
    });