// Activates the image gallery
// The main task is to attach an event listener to each image in the gallery
// and respond appropriately on click.
function activateGallery() {
    //let thumbnails = document.querySelector("#gallery-thumbs")
    //                         .querySelectorAll("img");
    let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img")

    let mainImage = document.querySelector("#gallery-photo img");

    thumbnails.forEach(function(thumbnail) {
        // Preload large images.
        let largeVersion = new Image();
        largeVersion.src = thumbnail.dataset.largeVersion;

        thumbnail.addEventListener("click", function() {
            // Set clicked image as display image
            mainImage.setAttribute("src", thumbnail.dataset.largeVersion);
            mainImage.setAttribute("alt", thumbnail.dataset.alt);

            //Change which image is current.
            let currentClass = "current";
            document.querySelector(".current")
                    .classList
                    .remove(currentClass);
            thumbnail.parentNode
                    .classList
                    .add(currentClass);

            let galleryInfo = document.querySelector("#gallery-info");
            let title = galleryInfo.querySelector(".title");
            let description = galleryInfo.querySelector(".description");

            // Update image info
            title.innerHTML = thumbnail.dataset.title;
            description.innerHTML = thumbnail.dataset.description;
        });
    });
}