.pragma library

function generatePins(count, x, y, width, startId) {
    var ret = [];
    for (var i = 0; i < count; i++) {
        ret.push({x: x+i*width, y:y, id:i+startId});
    }
    return ret;
}
var pinLocations = {
    "/images/ArduinoUno.svg": {width: 284, height:208, pins: [...generatePins(8,254, 16, -9, 0), ...generatePins(6,177, 16, -9, 8), ...generatePins(6,209, 186, 9, 14)], r:4},
    "/images/ArduinoProMicro.svg": {width: 262, height:138, pins: [
            ...generatePins(2,216.75, 5, -19, 0),
            ...generatePins(8,140.25, 5, -19, 2),
            {x:7, y: 121, id: 10},
            {x:26.25, y: 121, id: 16},
            {x:45.25, y: 121, id: 14},
            {x:64.25, y: 121, id: 15},
            ...generatePins(4, 83.25, 121, 19, 18)
        ], r:11.5},
    "/images/ArduinoLeonardo.svg": {width: 199, height:150, pins: [...generatePins(8,183, 5, -7, 0), ...generatePins(6,121, 5, -7, 8), ...generatePins(6,146, 141, 7, 18)], r:4},
}
var bindings = {
    "/images/ArduinoUno.svg": { 14: "A0", 15: "A1", 16: "A2", 17: "A3", 18: "A4", 19: "A5", 255: "Disabled" },
    "/images/ArduinoProMicro.svg": { 0: "TXO", 1: "RXI", 18: "A0", 19: "A1", 20: "A2", 21: "A3", 255: "Disabled" },
    "/images/ArduinoLeonardo.svg": { 18: "A0", 19: "A1", 20: "A2", 21: "A3", 22: "A4", 23: "A5", 255: "Disabled" },
}
var analog = {
    "/images/ArduinoLeonardo.svg": [18,19,20,21,22,23,4,6,7,8,9,10,12],
    "/images/ArduinoProMicro.svg": [18,19,20,21,22,23,4,6,7,8,9,10,12],
    "/images/ArudinoUno.svg": [14,15,16,17,18,19],
}
function checkValid(pin, board) {
    return analog[board].includes(pin);
}
function getBindings(board) {
    return (pin)=>(bindings[board][pin] || pin);
}

var drumLabels = {
    "Up": "D-pad Up",
    "Down": "D-pad Down",
    "Left": "D-pad Left",
    "Right": "D-pad Right",
    "Start": "Start Button",
    "Back": "Select Button",
    "Home": "Home Button",
    "A": "Green Drum",
    "B": "Red Drum",
    "Y": "Yellow Drum",
    "X": "Blue Drum",
    "LB": "Orange Drum",
    "RB": "Kick Pedal",
    "LX": "Joystick X Axis",
    "LY": "Joystick Y Axis",
}
var guitarLabels = {
    "Up": "Strum Up",
    "Down": "Strum Down",
    "Left": "D-pad Left",
    "Right": "D-pad Right",
    "Start": "Start Button",
    "Back": "Select Button",
    "Home": "Home Button",
    "A": "Green Fret",
    "B": "Red Fret",
    "Y": "Yellow Fret",
    "X": "Blue Fret",
    "LB": "Orange Fret",
    "LX": "Joystick X Axis",
    "LY": "Joystick Y Axis",
    "RX": "Whammy",
    "RY": "Tilt Axis",
}

var guitarRBLabels = {
    "Up": "Strum Up",
    "Down": "Strum Down",
    "Left": "DPad Left",
    "Right": "DPad Right",
    "Start": "Start Button",
    "Back": "Select Button",
    "Home": "Home Button",
    "A": "Green Fret",
    "B": "Red Fret",
    "Y": "Yellow Fret",
    "X": "Blue Fret",
    "LB": "Orange Fret",
    "Lt": "Effects Switch",
    "LX": "Joystick X Axis",
    "LY": "Joystick Y Axis",
    "RX": "Whammy",
    "RY": "Tilt",
}

var guitarLiveLabels = {
    "Up": "Strum Up",
    "Down": "Strum Down",
    "Left": "D-pad Left",
    "Right": "D-pad Right",
    "Start": "Start Button",
    "Back": "Select Button",
    "Home": "Home Button",
    "A": "Black 1",
    "B": "Black 2",
    "Y": "Black 3",
    "X": "White 1",
    "LB": "White 2",
    "RB": "White 3",
    "LX": "Joystick X Axis",
    "LY": "Joystick Y Axis",
    "RX": "Whammy",
    "RY": "Tilt Axis",
}
var wiiLabels = {
    "Lt": "Left Shoulder Axis",
    "Rt": "Right Shoulder Axis",
    "LX": "Left Joystick X Axis",
    "LY": "Left Joystick Y Axis",
    "RX": "Right Joystick X Axis",
    "RY": "Right Joystick Y Axis"
}
var wiiGuitarLabels = {
    "LX": "Joystick X Axis",
    "LY": "Joystick Y Axis",
    "RX": "Whammy",
    "RY": "Tilt Axis",
}
var mouseLabels = {
    "A": "Left Click",
    "B": "Right Click",
    "LX": "Mouse Movement X",
    "LY": "Mouse Movement Y",
    "RX": "Vertical Scroll",
    "RY": "Horizontal Scroll"
}

var defLabels = {
    "Up": "D-pad Up",
    "Down": "D-pad Down",
    "Left": "D-pad Left",
    "Right": "D-pad Right",
    "Start": "Start Button",
    "Back": "Back Button",
    "LeftStick": "Left Stick Click",
    "RightStick": "Right Stick Click",
    "LB": "Left Bumper",
    "RB": "Right Bumper",
    "Home": "Home Button",
    "A": "A Button",
    "B": "B Button",
    "X": "X Button",
    "Y": "Y Button",
    "Lt": "Left Shoulder Axis",
    "Rt": "Right Shoulder Axis",
    "LX": "Left Joystick X Axis",
    "LY": "Left Joystick Y Axis",
    "RX": "Right Joystick X Axis",
    "RY": "Right Joystick Y Axis",
}

function getUnused(isGuitar, isWii, isLiveGuitar, isRB, isDrum, isMouse) {
    let unused = [];
    let labels = getLabels(isGuitar, isWii, isLiveGuitar, isRB, isDrum, isMouse);
    if (labels === defLabels) return unused;
    for (let label in defLabels) {
        if (!(label in labels)) {
            unused.push(label);
        }
    }
    return unused;
}

function getLabels(isGuitar, isWii, isLiveGuitar, isRB, isDrum, isMouse) {
    if (isMouse) {
        return mouseLabels;
    }
    if (isWii) {
        if (isGuitar) return wiiGuitarLabels;
        return wiiLabels;
    }
    if (isDrum) return drumLabels;
    if (isRB) return guitarRBLabels;
    if (isLiveGuitar) return guitarLiveLabels;
    if (isGuitar) return guitarLabels;
    return defLabels;
}
