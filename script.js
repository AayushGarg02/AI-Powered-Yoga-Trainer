// script.js
// eslint-disable-next-line no-unused-vars
function continueToSite() {
    // Change the iframe src to the external site
    // eslint-disable-next-line no-restricted-globals
    const iframe = parent.document.getElementById('contentFrame');
    iframe.src = "https://ephemeral-dodol-320707.netlify.app/";
}

document.addEventListener('DOMContentLoaded', () => {
    function openFullScreen() {
        let elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { // Firefox
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { // Chrome, Safari, and Opera
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { // IE/Edge
            elem.msRequestFullscreen();
        }
    }
    openFullScreen();

    requestCameraAccess();
});

async function requestCameraAccess() {
    try {
        await navigator.mediaDevices.getUserMedia({ video: true });
        console.log('Camera access granted');
    } catch (error) {
        console.error('Camera access denied', error);
    }
}
