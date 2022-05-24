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
                            size: 20,
                        },
                        color:'white'
                    },
                    ticks: {color:'white'},
                    grid: {
                        color: 'rgba(255,255,255,0.3)',
                        borderColor: 'white'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Frequency (Hz)',
                        font: {
                            size: 20,
                        },
                        color: 'white'
                    },
                    ticks: { color: 'white' },
                    grid: {
                        color: 'rgba(255,255,255,0.3)',
                        borderColor: 'white'
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return "Time (s): " + Math.round(context.parsed.x * 100) / 100 + " Frequency (Hz): " + context.parsed.y.toFixed(2);
                        }
                    }
                },
                legend: {
                    labels: {
                        color: 'white'
                    }
                }
            },
            cubicInterpolationMode: 'linear',
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