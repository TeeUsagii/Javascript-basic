//Promise example

var users = [
    {
        id: 1,
        name: 'Kien Dam'
    },
    {
        id: 2,
        name: 'Son Tung'
    },
    {
        id: 3,
        name: 'Kieu anh'
    }
    //...
];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Anh Son Tung chua ra video moi a :((('
    },
    {
        id: 2,
        user_id: 2,
        content: 'Vua ra xong em oi!'
    },
    {
        id: 1,
        user_id: 1,
        content: 'Da tym va like cho sep'
    }
];

//1. Lấy comments 
//2. Từ comments lấy ra user_id,
//từ user_id lấy ra user tương ứng

// Fake API

function getComments() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(comments);
        }, 1000);
    });
}

function getUsersByIds(userIds) {
    return new Promise(function (resolve) {
        var result = users.filter(function (user) {
            return userIds.includes(user.id);
        });
        setTimeout(function() {
            resolve(result);
        }, 1000);
    });
}

// sap thanh promise hell
getComments()
    .then(function (comments) {
        var userIds = comments.map(function (comments) {
            return comments.user_id;
        });

        return getUsersByIds(userIds)
            .then(function (users) {
                return {
                    users: users,
                    comments: comments,
                };
            })
    })
    .then(function(data) {
        var commentBlock = document.getElementById("comment-block");

        var html ='';
        data.comments.forEach(function(comment) {
            var user = data.users.find(function(user) {
                return user.id === comment.user_id;
            });
            html += `<li>${user.name}: ${comment.content}</li>`
        });

        commentBlock.innerHTML = html;
    });

