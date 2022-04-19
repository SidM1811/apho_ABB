function drawGraph() {
    graph = new Chart(graph_context, {
        type: 'scatter',
        data: {
            labels: timestamps,
            datasets: [{
                label: "Frequency (Hz).",
                data: signals,
                backgroundColor: ["#ffffff"],
                borderColor: ["#ffffff"],
                spanGaps: false,
                showLine: true,
                color: ["#ffffff"],
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Time (s)',
                        font: {
                            size: 20
                        }
                    }
                }
            },
            plugins: {},
            cubicInterpolationMode: 'monotone',
            pointRadius: 0.5,
            pointHoverRadius: 3.0,
            borderWidth: 1.0,
            normalized: true,
            animation: false,
        }
    });
    graph_context.lineJoin = 'round';
    graph_context.lineCap = 'round';
}