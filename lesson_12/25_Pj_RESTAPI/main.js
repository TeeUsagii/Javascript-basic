
var courseAPI = 'http://localhost:3000/courses'

function start() {
    getCourses(renderCourses);

    handleCreateForm();
}

start();


// Funtions

function getCourses(callback) {
    fetch(courseAPI)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function createCourse(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(data)
    };

    fetch(courseAPI, options)
        .then(function(response) {
            response.json()
        })
        .then(callback);
}

function handleDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
          },
    };

    fetch(courseAPI + '/' + id, options)
        .then(function(response) {
            response.json()
        })
        .then(function() {
            var courseItem = document.querySelector('.course-item-' + id);
            if (courseItem) {
                courseItem.remove();
            }
        });
}

function handleEditCourse(id) {
    fetch(courseAPI + '/' + id)
        .then(function(response) {
            return response.json();
        })
        .then(function(course) {
            document.querySelector('input[name="name"]').value = course.name;
            document.querySelector('input[name="description"]').value = course.description;
            var createBtn = document.querySelector('#create');
            createBtn.textContent = 'Update';
            createBtn.onclick = function() {
                var name = document.querySelector('input[name="name"]').value;
                var description = document.querySelector('input[name="description"]').value;

                var formData = {
                    name: name,
                    description: description
                };

                updateCourse(id, formData, function() {
                    getCourses(renderCourses);
                    createBtn.textContent = 'Create';
                    handleCreateForm();
                });
            }
        });
}

function updateCourse(id, data, callback) {
    var options = {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    };

    fetch(courseAPI + '/' + id, options)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function renderCourses(courses) {
    var listCourseBlock = document.querySelector('#list-courses');

    var htmls = courses.map(function(course) {
        return `
            <li class="course-item-${course.id}">
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <button onclick="handleDeleteCourse(${course.id})">Xóa</button>
                <button onclick="handleEditCourse(${course.id})">Sửa</button>
            </li>
        `;
    });
    listCourseBlock.innerHTML = htmls.join('');
}

function handleCreateForm() {
    var createBtn = document.querySelector('#create');

    createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;

        var formData = {
            name: name,
            description: description
        }

        createCourse(formData,function() {
            getCourses(renderCourses);
        });
    }
}