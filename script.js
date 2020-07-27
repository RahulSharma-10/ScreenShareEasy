const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Asks User to Select a Media Stream & Pass to Video element

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        };
    } catch(error){

    }
}

button.addEventListener('click', async () => {
    button.disabled = true; //Trigger response
    await videoElement.requestPictureInPicture(); //to automatically make it pictureinpicture
    button.disabled = false; //Resetting
  });


selectMediaStream();