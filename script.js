
//=========== side bar menu
// script.js
const menuToggle = document.querySelector(".menu-toggoler");
const menuDesktop = document.querySelector(".desktop_menu");
const menuMobile = document.querySelector(".mobile_menu");

menuToggle.addEventListener("click", () => {
    menuDesktop.classList.toggle("active");
    menuMobile.classList.toggle("active");
});

// Add event listener to hide menu when clicking outside
document.addEventListener("click", (event) => {
    if (!menuDesktop.contains(event.target) && !menuToggle.contains(event.target)) {
        menuDesktop.classList.remove("active");
    };
    if (!menuMobile.contains(event.target) && !menuToggle.contains(event.target)) {
        menuMobile.classList.remove("active");
    };
    if (!menuToggle.contains(event.target)) {
        menuMobile.classList.remove("active");
    };
});


//=========== left side menu bar end


//=========== User profile LINK copy script
function copyuserurl() {
    var paragraph = document.getElementById("user-porfile-url");
    var range = document.createRange();
    range.selectNode(paragraph);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    alert("copied to clipboard!");
}//=========== User profile LINK copy script end



//=========== notification panel

$(document).ready(function () {

    $('#notification_panel_btn').click(function () {
        $('.notification_panel').slideToggle();

    });

});//=========== notification panel end

//=========== Right side qr information

$(document).ready(function () {
    $('.qr_infotmation_popup_btn').click(function () {
        $('.qr_infomation').toggleClass('active');
        $('i.qr_i_b').toggleClass('active');

    });
});//=========== Right side qr information end



// =============================================
// ========scripts for Edit pages==========
// =============================================

//=========== Component accordion & Sortin script

// Sortable all the components

// document.getElementById("switch").onclick = function () {
//     Sortable.create(component_Sortable, {
//         swap: true, // Enable swap plugin
//         swapClass: 'highlight', // The class applied to the hovered swap item
//         animation: 150,
//     });
// }; // Sortable all the components end


// Component collaps & delete script
$(document).ready(function () {

    // Collapse all accordion items by default
    $('.accordion-content').hide();

    // Handle click event on accordion headers
    $('.accordion-header').click(function () {
        // Toggle active class on the clicked accordion item
        $(this).parent('.accordion-item').toggleClass('active');

        // Toggle visibility of the content section for the clicked accordion item
        $(this).siblings('.accordion-content').slideToggle();

        // Collapse all other accordion items
        $('.accordion-item').not($(this).parent('.accordion-item')).removeClass('active');
        $('.accordion-item').not($(this).parent('.accordion-item')).children('.accordion-content').slideUp();
    });


    // DELETE COMPONENT WHICH NO NEED
    // Get all the delete buttons
    const deleteButtons = document.querySelectorAll('.action-menu');

    // Iterate over each delete button
    deleteButtons.forEach(button => {
        // Add a click event listener to each delete button
        button.addEventListener('click', () => {
            // Get the parent div element to delete
            const divToDelete = button.closest('.accordion-item');

            // Check if the parent div exists
            if (divToDelete) {
                // Remove the parent div from the DOM
                divToDelete.remove();
            }
        });
    });

});// Component collaps & delete script end

// Text box component

$(document).ready(function () {
    var quill = new Quill('#add_text', {
        theme: 'snow'
    });
});// Text box component end

// ======== Expreance component
$(document).ready(function () {
    const deleteButtons = document.querySelectorAll('.experieance-items .delete-btn');

    // Iterate over each delete button
    deleteButtons.forEach(button => {
        // Add a click event listener to each delete button
        button.addEventListener('click', () => {
            // Get the parent div element to delete
            const divToDelete = button.closest('.experieance-items');

            // Check if the parent div exists
            if (divToDelete) {
                // Remove the parent div from the DOM
                divToDelete.remove();
            }
        });
    });
});// ======== Expreance component END

// ======== Social Medias component
//add more button and the delete buttons

$(document).ready(function () {
    const addMoreButton = document.querySelector('#social-accounts .add-more');
    const deleteButtons = document.querySelectorAll('#social-accounts .delete-btn');

    // Add event listener to the add more button
    addMoreButton.addEventListener('click', function () {
        const inputGroup = document.querySelector('.social_account_links');

        // Clone the input group
        const clonedInputGroup = inputGroup.cloneNode(true);
        // Reset the cloned input group's input value
        const clonedInput = clonedInputGroup.querySelector('input');
        clonedInput.value = '';

        // Add event listener to the cloned delete button
        const clonedDeleteButton = clonedInputGroup.querySelector('.delete-btn');
        clonedDeleteButton.addEventListener('click', function () {
            // Remove the cloned input group
            clonedInputGroup.remove();
        });

        // Append the cloned input group after the original input group
        inputGroup.parentNode.insertBefore(clonedInputGroup, inputGroup.nextSibling);
    });

    // Add event listener to each delete button
    deleteButtons.forEach(function (deleteButton) {
        deleteButton.addEventListener('click', function () {
            // Get the parent input group of the delete button
            const inputGroup = deleteButton.parentNode;

            // Remove the input group
            inputGroup.remove();
        });
    });
});// ======== Social Medias component  end

// ======== Skill component
$(document).ready(function () {
    const addMoreButton = document.querySelector('#skill-element .add-more');
    const deleteButtons = document.querySelectorAll('#skill-element .delete-btn');

    // Add event listener to the add more button
    addMoreButton.addEventListener('click', function () {
        const inputGroup = document.querySelector('.skill_items');

        // Clone the input group
        const clonedInputGroup = inputGroup.cloneNode(true);
        // Reset the cloned input group's input value
        const clonedInput = clonedInputGroup.querySelector('input');
        clonedInput.value = '';

        // Add event listener to the cloned delete button
        const clonedDeleteButton = clonedInputGroup.querySelector('.delete-btn');
        clonedDeleteButton.addEventListener('click', function () {
            // Remove the cloned input group
            clonedInputGroup.remove();
        });

        // Append the cloned input group after the original input group
        inputGroup.parentNode.insertBefore(clonedInputGroup, inputGroup.nextSibling);
    });

    // Add event listener to each delete button
    deleteButtons.forEach(function (deleteButton) {
        deleteButton.addEventListener('click', function () {
            // Get the parent input group of the delete button
            const inputGroup = deleteButton.parentNode;

            // Remove the input group
            inputGroup.remove();
        });
    });
});// ======== Skill component end

// Gallery page

// script.js
const fileInput = document.getElementById("upload-profile-pic");
const progressBarContainer = document.querySelector(".progress-container");
const progressBar = document.getElementById("progress-bar");

fileInput.addEventListener("input", () => {
    const file = fileInput.files[0];

    if (file) {
        progressBarContainer.style.display = "block"; // Show the progress bar container

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "upload.php", true);

        xhr.upload.onprogress = (event) => {
            const progress = (event.loaded / event.total) * 100;
            progressBar.style.width = progress + "%";
        };

        xhr.onload = () => {
            progressBarContainer.style.display = "none"; // Hide the progress bar container
            progressBar.style.width = "0"; // Reset progress bar
            if (xhr.status === 200) {
                alert("File uploaded successfully!");
            } else {
                alert("Error uploading file.");
            }
        };

        const formData = new FormData();
        formData.append("file", file);
        xhr.send(formData);
    }
});
