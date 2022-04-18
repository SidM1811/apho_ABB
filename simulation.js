// This version adds increased fps control and minimizes UI
// it is a modified version of dopper effect (merged) by Siddhant
// some code has also been refactored

// constants
const speed_of_sound = 330;
const source_frequency = 991;
let detected = false;
let fps;
let current_fps;

let increased_fps=10000;

// arrays
let signals = [];
let detectors = [];
let timestamps = [];

// objects
let source;
let graph = undefined;

// counters
let current_frame;
let current_time;

function addDoppler(source) {
    for (let detector of detectors) signals.push(Number.parseFloat(doppler(source, detector).toFixed(6)));
}

function doppler(source, detector) {
    f0 = source_frequency;
    vc = speed_of_sound;

    let t_em = LinAlg.find_em(current_time, vc, source, detector);
    let source_pos = source.position(t_em);
    let detector_pos = detector.position(current_time);
    let source_vel = LinAlg.velocity(source, t_em);
    let detector_vel = LinAlg.velocity(detector, current_time);
    let components_along = LinAlg.comp(source_pos, detector_pos, source_vel, detector_vel);
    if (t_em >= 0) {
        if (!detected) {
            current_time -= 1 / current_fps;
            current_fps = increased_fps;
	    current_time -= 1 / current_fps;
            detected = true;
	    return NaN;
        }
        else { current_fps = fps; }
        return f0 * (vc + components_along[1]) / (vc - components_along[0]);
    }
    else return NaN;
}

function initParams() {
    simul_end_time = Number.parseFloat(simul_end_time_input.value);
    simul_start_time = Number.parseFloat(simul_start_time_input.value);
    fps = Number.parseInt(fps_input.value);
    current_fps=fps;
    signals = [];
    timestamps = [];
    current_time = simul_start_time;
    current_frame = 0;
    detected = false;
    //table.innerHTML = "<tr><th>Type</th><th>Frequency (Hz)</th><th>Timestamp (s)</th></tr>";

    // SET PARAMS HERE
    // (x, y, z, vx, vy, vz, R, angular_velocity)
    source = new Source(5, 7, 0, 200, 100, 0, 120, 1.5);

    detectors = [];
    // (x, y, z, vx, vy, vz)
    detectors.push(new Detector(Number.parseFloat(pos_x_input.value), Number.parseFloat(pos_y_input.value), 0, Number.parseFloat(vel_x_input.value), Number.parseFloat(vel_y_input.value), 0));

    if (graph !== undefined) graph.destroy();

    while (current_time < simul_end_time) {
        timestamps.push(Number.parseFloat(current_time.toFixed(6)));
        current_time += 1/current_fps;
        current_frame += 1;

        // generate signals
        addDoppler(source);
    }
    timestamps=timestamps.slice(2);
    signals=signals.slice(2);
    //for checking only
    console.log(timestamps);
    console.log(signals);
    drawGraph();
    detectExtrema();
}