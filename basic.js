let screen_width = window.innerWidth, screen_height = window.innerHeight;
let canvas_width, canvas_height;
let paused = false;
let mobile;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    mobile = true;
} else {
    mobile = false;
}

let graph_canvas = document.getElementById("graph-canvas");
let graph_context = graph_canvas.getContext("2d");

let angles_display = document.getElementById("angles-display");
let freq_display = document.getElementById("freq-display");
let scale_display = document.getElementById("scale-display");

let pause_button = document.getElementById("pause-button");

let table = document.getElementById("table");

let pos_x_input = document.getElementById("pos-x-input");
let pos_y_input = document.getElementById("pos-y-input");
let vel_x_input = document.getElementById("vel-x-input");
let vel_y_input = document.getElementById("vel-y-input");

let simul_start_time_input = document.getElementById("simul-start-time-input");
let simul_end_time_input = document.getElementById("simul-end-time-input");
let fps_input = document.getElementById("fps-input");

window.onload = function () {
    defaultParams();
}

function defaultParams() {
    pos_x_input.value = 0;
    pos_y_input.value = 0;
    vel_x_input.value = 20;
    vel_y_input.value = 0;
    simul_start_time_input.value = 25;
    simul_end_time_input.value = 50;
    fps_input.value = 60;
}