function drawGraph() {
    graph = new Chart(graph_context, {
        type: 'scatter',
        data: {
            labels: timestamps,
            datasets: [{
                label: "Frequency (in Hz).",
                data: signals,
                backgroundColor: ["#ffffff"],
                borderColor: ["#ffffff"],
                spanGaps: false,
                showLine: false,
                color: ["#ffffff"],
            }]
        },
        options: {
	    plugins:{
	    },
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