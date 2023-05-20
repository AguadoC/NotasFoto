var photos = [];

function addPhoto() {

  var linkUrl = document.getElementById("link-url").value;

  var tags = document.getElementById("tags").value.split(",").map(function(tag) {

    return tag.trim();

  });

  var comment = document.getElementById("comment").value;

  var photo = {

    link: linkUrl,

    tags: tags,

    comment: comment

  };

  photos.push(photo);

  displayPhotos();

  // Limpiar los campos de entrada

  document.getElementById("link-url").value = "";

  document.getElementById("tags").value = "";

  document.getElementById("comment").value = "";

}

function displayPhotos() {

  var container = document.getElementById("grid-container");

  container.innerHTML = "";

  photos.forEach(function(photo) {

    var gridItem = document.createElement("div");

    gridItem.className = "grid-item";

    var link = document.createElement("a");

    link.href = photo.link;

    link.textContent = "Enlace";

    gridItem.appendChild(link);

    var tags = document.createElement("p");

    tags.textContent = "Categorías: " + photo.tags.join(", ");

    gridItem.appendChild(tags);

    var comment = document.createElement("p");

    comment.textContent = "Comentario: " + photo.comment;

    gridItem.appendChild(comment);

    container.appendChild(gridItem);

  });

}

function filterByTag() {

  var input = document.getElementById("tag-filter");

  var filter = input.value.toLowerCase();

  var filteredPhotos = photos.filter(function(photo) {

    return photo.tags.some(function(tag) {

      return tag.toLowerCase().includes(filter);

    });

  });

  if (filter === "") {

    displayPhotos();

  } else {

