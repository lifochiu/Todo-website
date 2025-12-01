let savedTasks = JSON.parse(localStorage.getItem('toDoList')) || [];
let closedTask = 0;
let inProgressTask = 0;
let delayedTask = 0;
const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
const now = new Date().getTime();

savedTasks.forEach(element => {
    let timeDiff = now - element[4];
    if (element[2] == "Open") { //task at close status
        closedTask++;
    } else { //task at open status
        inProgressTask++
    }
    if (timeDiff > THREE_DAYS_IN_MS) {
        delayedTask++;
    }
});

document.getElementById('inProgressItem').textContent = `In Progress: ${inProgressTask} item`;
document.getElementById('closedItem').textContent = `Complete: ${closedTask} item`;
document.getElementById('delayItem').textContent = `Delayed: ${delayedTask} item`;


document.addEventListener("DOMContentLoaded", function () {

    const ctx = document.getElementById("taskChart");

    new Chart(ctx, {
        type: "pie",
        data: {
            labels: ["Delayed", "In Progress", "Complete"],
            datasets: [
                {
                    data: [delayedTask, inProgressTask, closedTask],
                    borderWidth: 5,
                    borderColor: "black",
                    backgroundColor: ["pink", "purple", "lightskyblue"]
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: "top",
                    labels: { font: { size: 18 } }
                }
            }
        }
    });

    
    let mediaRecorder;
    let audioChunks = [];

    const recordBtn = document.getElementById("recordBtn");

    recordBtn.addEventListener("click", async () => {

        if (mediaRecorder && mediaRecorder.state === "recording") {
            mediaRecorder.stop();
            recordBtn.textContent = "Start Recording";
            recordBtn.classList.remove("recording");
            return;
        }

        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

        mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.ondataavailable = event => audioChunks.push(event.data);
        mediaRecorder.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
            audioChunks = [];

            

         const audioURL = URL.createObjectURL(audioBlob);

         const recordingDiv = document.createElement("div");
         recordingDiv.classList.add("audio-recording");

         const newAudio = document.createElement("audio");
         newAudio.controls = true;
         newAudio.src = audioURL;

         const a = document.createElement("a");
         a.href = audioURL;
         a.download = "recording.webm";
         a.style.marginLeft = "10px";

         const deleteBtn = document.createElement("button");
         deleteBtn.textContent = "Delete";
         deleteBtn.style.marginLeft = "10px";
         deleteBtn.classList.add("delete-button");
         deleteBtn.addEventListener("click", () => {
            recordingDiv.remove();
         });

         recordingDiv.appendChild(newAudio);
         recordingDiv.appendChild(a);
         recordingDiv.appendChild(deleteBtn);

         const container = document.getElementById("audioContainer");
         container.appendChild(recordingDiv);
        };


        mediaRecorder.start();
        recordBtn.textContent = "Stop Recording";
        recordBtn.classList.add("recording");
    });

});
