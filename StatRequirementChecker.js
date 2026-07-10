"use strict"
var namespace = "Stat Requirement Checker"

var pluginName = "Stat Requirement Checker"
var RIDE_WINDOW_CLASS = 12
var lastRideId = null

var REQUIREMENTS = {

    // Spiral Coaster
    0: {
        dropHeight: 12,
        maxSpeed: 22,
        negativeGs: 0.40,
        numDrops: 2,
        relaxIfInversions: false
    },

    // Standup Coaster
    1: {
        dropHeight: 12,
        maxSpeed: 22,
        negativeGs: 0.50,
        relaxIfInversions: false
    },

    // Suspended Swinging Coaster Coaster
    2: {
        dropHeight: 8,
        maxSpeed: 27,
        negativeGs: 0.60,
        lateralGs: 1.50,
        length: 368,
        relaxIfInversions: false
    },

    // Inverted Coaster
    3: {
        dropHeight: 12,
        maxSpeed: 22,
        negativeGs: 0.30,
        relaxIfInversions: true
    },

    // Junior Coaster
    4: {
        dropHeight: 6,
        maxSpeed: 15,
        numDrops: 1,
        relaxIfInversions: false
    },

    // Miniature Railroad
    5: {

    },

    // Monorail
    6: {

    },

    // Mini Suspended Coaster
    7: {
        dropHeight: 6,
        maxSpeed: 18,
        lateralGs: 1.30,
        length: 200,
        relaxIfInversions: false
    },

    // Boat Hire
    8: {

    },

    // Wooden Wild Mouse
    9: {
        dropHeight: 8,
        maxSpeed: 15,
        negativeGs: 0.10,
        lateralGs: 1.50,
        length: 170,
        numDrops: 3,
        relaxIfInversions: false
    },

    // Steeplechase
    10: {
        dropHeight: 4,
        maxSpeed: 18,
        negativeGs: 0.50,
        length: 240,
        numDrops: 2,
        relaxIfInversions: false
    },

    // Car Ride
    11: {

    },

    // Launched Freefall
    12: {

    },

    // Bobsled Coaster
    13: {
        maxSpeed: 27,
        lateralGs: 1.20,
        length: 368,
        relaxIfInversions: false
    },

    // Observation Tower
    14: {

    },

    // Looping Coaster
    15: {
        dropHeight: 14,
        maxSpeed: 22,
        negativeGs: 0.10,
        numDrops: 2,
        relaxIfInversions: true
    },

    // Dingy Slide
    16: {

    },

    // Mine Train Coaster
    17: {
        dropHeight: 8,
        maxSpeed: 22,
        negativeGs: 0.10,
        length: 368,
        numDrops: 2,
        relaxIfInversions: false
    },

    // Chairlift
    18: {

    },

    // Corkscrew Coaster
    19: {
        dropHeight: 12,
        maxSpeed: 22,
        negativeGs: 0.40,
        numDrops: 2,
        relaxIfInversions: true
    },

    // Maze
    20: {

    },

    // Slide
    21: {

    },

    // Go Karts
    22: {

    },

    // Log Flume
    23: {

    },

    // River Rapids
    24: {

    },

    // Bumper Cars
    25: {

    },

    // Swinging Ship
    26: {

    },

    // Swinging Inverter Ship
    27: {

    },

    // Food Ride
    28: {

    },

    // Drink Stall
    30: {

    },

    // Shop
    32: {

    },

    // Merry-Go-Round
    33: {

    },

    // Information Kiosk
    35: {

    },

    // Bathroom
    36: {

    },

    // Ferris Wheel
    37: {

    },

    // Motion Simulator
    38: {

    },

    // 3D Cinema
    39: {

    },

    // Top Spin
    40: {

    },

    // Space Rings
    41: {

    },

    // Reverse Freefall Coaster
    42: {
        dropHeight: 34,
        relaxIfInversions: false
    },

    // Lift
    43: {

    },

    // Vertical Drop Coaster
    44: {
        dropHeight: 20,
        maxSpeed: 22,
        negativeGs: 0.10,
        numDrops: 1,
        relaxIfInversions: false
    },

    // Cash Machine
    45: {

    },

    // Twist
    46: {

    },

    // Haunted House
    47: {

    },

    // First Aid
    48: {

    },

    // Circus
    49: {

    },

    // Ghost Train
    50: {

    },

    // Twister Coaster
    51: {
        dropHeight: 12,
        maxSpeed: 22,
        negativeGs: 0.40,
        numDrops: 2,
        relaxIfInversions: true
    },

    // Wooden Coaster
    52: {
        dropHeight: 12,
        maxSpeed: 22,
        negativeGs: 0.10,
        length: 368,
        numDrops: 2,
        relaxIfInversions: false
    },

    // Side-Friction Coaster
    53: {
        dropHeight: 6,
        maxSpeed: 11,
        length: 250,
        numDrops: 2,
        relaxIfInversions: false
    },

    // Steel Wild Mouse
    54: {
        dropHeight: 6,
        maxSpeed: 15,
        lateralGs: 1.50,
        length: 170,
        numDrops: 2,
        relaxIfInversions: false
    },

    // Multi Dimension Coaster
    55: {
        inversions: 1,
        maxSpeed: 22,
        negativeGs: 0.40,
        numDrops: 2,
        relaxIfInversions: true
    },

    // Multi Dimension Coaster Alt
    56: {
        inversions: 1,
        maxSpeed: 22,
        negativeGs: 0.40,
        numDrops: 2,
        relaxIfInversions: true
    },

    // Flying Coaster
    57: {
        inversions: 1,
        maxSpeed: 22,
        negativeGs: 0.40,
        numDrops: 2,
        relaxIfInversions: true
    },

    //Flying Coaster Alt
    58: {
        inversions: 1,
        maxSpeed: 22,
        negativeGs: 0.40,
        numDrops: 2,
        relaxIfInversions: true
    },

    // Virginia Reel
    59: {
        length: 210,
        numDrops: 2,
        relaxIfInversions: false
    },

    // Splash Boats
    60: {

    },

    // Mini Helikipoters
    61: {

    },

    // Lay Down Coaster
    62: {
        inversions: 1,
        maxSpeed: 22,
        negativeGs: 0.40,
        numDrops: 2,
        relaxIfInversions: true
    },

    // Suspended Monorail
    63: {

    },

    // Lay Down Coaster Alt
    64: {
        inversions: 1,
        maxSpeed: 22,
        negativeGs: 0.40,
        numDrops: 2,
        relaxIfInversions: true
    },

    // Reverser Coaster
    65: {
        // also requires >=1 reversal; not exposed by the plugin API
        length: 200,
        numDrops: 2,
        relaxIfInversions: false
    },

    // Heartline Twister Coaster
    66: {
        inversions: 1,
        numDrops: 1,
        relaxIfInversions: false
    },

    // Mini Golf
    67: {

    },

    // Giga Coaster
    68: {
        dropHeight: 16,
        maxSpeed: 22,
        negativeGs: 0.40,
        numDrops: 2,
        relaxIfInversions: false
    },

    // Roto Drop
    69: {

    },

    // Flying Saucers
    70: {

    },

    // Crooked House
    71: {

    },

    /// Monorail Cycles
    72: {

    },

    // Compact Inverted Coaster
    73: {
        dropHeight: 12,
        maxSpeed: 22,
        negativeGs: 0.30,
        relaxIfInversions: true
    },

    // Water Coaster
    74: {
        // also requires a splashdown track piece; not exposed by the plugin API
        dropHeight: 8,
        maxSpeed: 15,
        numDrops: 1,
        relaxIfInversions: false
    },

    // Air-Powered Coaster
    75: {
        dropHeight: 34,
        relaxIfInversions: false
    },

    // Inverted Hairpin Coaster
    76: {
        dropHeight: 8,
        maxSpeed: 15,
        negativeGs: 0.10,
        lateralGs: 1.50,
        length: 170,
        numDrops: 3,
        relaxIfInversions: false
    },

    // Magic Carpet
    77: {

    },

    // Submarine Ride
    78: {

    },

    // River Rafts
    79: {

    },

    // Enterprise
    81: {

    },

    // Inverted ImpulseCoaster
    86: {
        dropHeight: 20,
        maxSpeed: 22,
        relaxIfInversions: false
    },

    // Mini Coaster
    87: {
        dropHeight: 12,
        maxSpeed: 15,
        negativeGs: 0.50,
        numDrops: 2,
        relaxIfInversions: false
    },

    // Mine Ride
    88: {
        length: 270,
        relaxIfInversions: false
    },

    // lIM Launched Coaster
    90: {
        dropHeight: 10,
        maxSpeed: 22,
        negativeGs: 0.10,
        numDrops: 2,
        relaxIfInversions: true
    },

    // Hypercoaster
    91: {
        dropHeight: 12,
        maxSpeed: 22,
        negativeGs: 0.40,
        numDrops: 2,
        relaxIfInversions: true
    },

    // Hyper Twister Coaster
    92: {
        dropHeight: 12,
        maxSpeed: 22,
        negativeGs: 0.40,
        numDrops: 2,
        relaxIfInversions: true
    },

    // Monster Trucks
    93: {

    },

    // Spinning Wild Mouse
    94: {
        dropHeight: 6,
        maxSpeed: 15,
        lateralGs: 1.50,
        length: 170,
        numDrops: 2,
        relaxIfInversions: false
    },

    // RCT1 Steel Mini Coaster
    95: {
        dropHeight: 6,
        maxSpeed: 15,
        numDrops: 2,
        relaxIfInversions: false
    },

    // Hybrid Coaster
    96: {
        dropHeight: 14,
        maxSpeed: 22,
        negativeGs: 0.40,
        numDrops: 2,
        relaxIfInversions: false
    },

    // Single Rail Coaster
    97: {
        dropHeight: 14,
        maxSpeed: 22,
        negativeGs: 0.40,
        numDrops: 2,
        relaxIfInversions: false
    },

    // Apline Coaster
    98: {
        maxSpeed: 11,
        length: 368,
        relaxIfInversions: false
    },

    // RCT1 Wooden Coaster
    99: {
        dropHeight: 12,
        maxSpeed: 22,
        negativeGs: 0.10,
        length: 368,
        numDrops: 2,
        relaxIfInversions: false
    },

    // RCT1 Standup Coaster
    100: {
        dropHeight: 12,
        maxSpeed: 22,
        negativeGs: 0.50,
        relaxIfInversions: false
    },

    // LSM Coaster
    101: {
        dropHeight: 10,
        maxSpeed: 22,
        negativeGs: 0.10,
        numDrops: 2,
        relaxIfInversions: false
    },

    // RCT1 Wooden Twister Coaster
    102: {
        dropHeight: 12,
        maxSpeed: 22,
        negativeGs: 0.10,
        length: 368,
        numDrops: 2,
        relaxIfInversions: false
    },


}

function checkRideWindow() {

    var rideId = null

    for (var i = 0; i < ui.windows; i++) {
        var w = ui.getWindow(i)
        if (w.classification === RIDE_WINDOW_CLASS) {
            rideId = w.number
            break;
        }
    }

    if (rideId !== lastRideId) {
        lastRideId = rideId
        onRideSelectionChanged(rideId)
    }

}

function onRideSelectionChanged(rideId) {
    if (rideId !== null) {

        var ride = map.getRide(rideId)
        var requirements = REQUIREMENTS[ride.type]

        console.log(ride.name + ':')
        console.log(ride.maxSpeed ? "Max Speed: " + ride.maxSpeed + " mph" : "This ride has not finished testing yet, or is a ride type where speed is not calculated")
        console.log(ride.rideLength ? "Length: " + context.formatString('{LENGTH}', ride.rideLength) : "This ride has not finished testing yet, or is a ride type where length is not calculated")
        console.log(ride.maxNegativeVerticalGs ? "Max Negative Vertical G's: " + ride.maxNegativeVerticalGs : "This ride has not finished testing yet, or is a ride type where G-forces are not calculated")
        console.log(ride.maxLateralGs ? "Max Lateral G's: " + ride.maxLateralGs : "This ride has not finished testing yet, or is a ride type where G-forces are not calculated")
        console.log(ride.numDrops ? "Drops: " + ride.numDrops : "This ride has not finished testing yet, or is a ride type where drops are not calculated")
        console.log(ride.highestDropHeight ? "Highest Drop: " + context.formatString('{HEIGHT}', ride.highestDropHeight) : "This ride has not finished testing yet, or is a ride type where drops are not calculated")
        console.log(ride.inversions ? "Inversions: " + ride.inversions : "This ride has not finished testing yet, or is a ride type with no inversions")

        console.log("")
        console.log("Requirements:")
        console.log(requirements ? ride.maxSpeed >= requirements.maxSpeed ? "Max speed requirement passed" : "Max speed requirement failed" : "This ride type does not have a max speed requirement")
        console.log(requirements ? ride.rideLength >= requirements.rideLength ? "Length requirement passed" : "Length requirement failed" : "This ride type does not have a length requirement")
        console.log(requirements ? ride.maxNegativeVerticalGs >= requirements.negativeGs ? "Negative G requirement passed" : "Negative G requirement failed" : "This ride type does not have a negative G-force requirement")
        console.log(requirements ? ride.max >= requirements.lateralGs ? "Lateral G requirement passed" : "Lateral G requirement failed" : "This ride type does not have a lateral G-force requirement")
        console.log(requirements ? ride.numDrops >= requirements.numDrops ? "Number of drops requirement passed" : "Number of drops requirement failed" : "This ride type does not have a drop number requirement")
        console.log(requirements ? ride.highestDropHeight >= requirements.dropHeight ? "Drop height requirement passed" : "Drop height requirement failed" : "This ride type does not have a drop height requirement")
        
        

        if (rideId === 65) {
            console.log("Note that the reverser coaster must also have at least 1 reverser piece")
        }
        if (rideId === 74) {
            console.log("Note that the water coaster must also have at least 1 water piece")
        }

    }
}

function main() {
    context.setInterval(checkRideWindow, 250)
}

registerPlugin({
    name: 'Stat Requirement Checker',
    version: '1.0',
    licence: "MIT",
    minApiVersion: 105,
    targetApiVersion: 105,
    authors: ['Gutnis'],
    type: 'local',
    main: main
});

// TO DO:
// Only check first length number of rides with multiple stations
// Imperial/metric toggle for max speed
// Display "Drops: 0" instead of "not calculated" for rides that are capable ofr drops but don't have any
// Check if stats pass requirements
// Display "does not have this stat requirement" instead of "undefined"
// Plugin window to select ride