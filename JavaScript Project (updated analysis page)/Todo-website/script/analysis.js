document.addEventListener("DOMContentLoaded", function () {

    const ctx = document.getElementById("taskChart");

    new Chart(ctx, {
        type: "pie",
        data: {
            labels: ["Delayed", "In Progress", "Complete"],
            datasets: [
                {
                    data: [2, 2, 2],
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
                    position: "top",   // <-- this is correct
                    labels: {
                        font: {
                            size: 18    // <-- bigger labels
                        }
                    }
                }
            }
        }
    });
});
