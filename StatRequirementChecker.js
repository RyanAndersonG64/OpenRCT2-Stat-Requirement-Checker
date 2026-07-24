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
        length: 200,
        relaxIfInversions: false
    },

    // Monorail
    6: {
        length: 170,
        relaxIfInversions: false
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
        length: 200,
        relaxIfInversions: false
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
        dropHeight: 12,
        maxSpeed: 15,
        length: 140,
        relaxIfInversions: false
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
        length: 150,
        relaxIfInversions: false
        // also needs at least 2 stations
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
        dropHeight: 6,
        relaxIfInversions: false
    },

    // River Rapids
    24: {
        dropHeight: 2,
        length: 200,
        relaxIfInversions: false
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
        length: 180,
        relaxIfInversions: false
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
        dropHeight: 6,
        relaxIfInversions: false
    },

    // Mini Helikipoters
    61: {
        length: 160,
        relaxIfInversions: false
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
        length: 170,
        relaxIfInversions: false
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
        length: 200,
        numDrops: 2,
        relaxIfInversions: false
        // also needs at least one reverser piece
    },

    // Heartline Twister Coaster
    66: {
        inversions: 1,
        numDrops: 1,
        relaxIfInversions: false
    },

    // Mini Golf
    67: {
        // needs at least 1 hole
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
        length: 140,
        relaxIfInversions: false
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
        dropHeight: 8,
        maxSpeed: 15,
        numDrops: 1,
        relaxIfInversions: false
        // also needs at least one water piece
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

    // Inverted Impulse Coaster
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

    // LIM Launched Coaster
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
        length: 200,
        relaxIfInversions: false
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

function getBuiltStations(ride) {
    var result = []
    for (var i = 0; i < ride.stations.length; i++) {
        if (ride.stations[i].start !== null) {
            result.push(ride.stations[i])
        }
    }
    return result
}

function measureFirstLeg(ride) {
    var stations = getBuiltStations(ride)
    if (stations.length < 2) {
        return 0
    }

    var start = stations[0].start

    var tile = map.getTile(Math.floor(start.x / 32), Math.floor(start.y / 32))

    var elementIndex = -1
    for (var i = 0; i < tile.elements.length; i++) {
        var el = tile.elements[i]
        if (el.type === "track" && el.ride === ride.id && el.baseZ === start.z) {
            elementIndex = i
            break
        }
    }
    if (elementIndex === -1) {
        return 0
    }

    var iterator = map.getTrackIterator({ x: start.x, y: start.y }, elementIndex)
    if (!iterator) {
        return 0
    }

    function samePosition(a, b) {
        return a.x === b.x && a.y === b.y && a.z === b.z
    }

    function isAtAnyStation(pos) {
        for (var i = 0; i < stations.length; i++) {
            if (samePosition(pos, stations[i].start)) {
                return true
            }
        }
        return false
    }

    var maxIterations = 1000
    var segmentSum = 0
    var firstLeg = 0
    var legsRecorded = 0
    var legsNeeded = stations.length

    while (maxIterations-- > 0) {
        segmentSum += iterator.segment.length

        if (!iterator.next()) {
            break // dead end - shouldn't normally happen before legsNeeded is reached
        }

        // Only check the position we just moved to, never the starting tile
        // itself, otherwise station 0's own position would falsely count
        // as "arrived" on the very first iteration.
        if (isAtAnyStation(iterator.position)) {
            legsRecorded++
            if (legsRecorded === 1) {
                firstLeg = segmentSum
            }
            if (legsRecorded >= legsNeeded) {
                break // recorded one leg per station - the whole circuit/bounce is covered
            }
        }
    }

    if (segmentSum === 0) {
        return 0
    }

    return ride.rideLength * (firstLeg / segmentSum)
}

function countInversions(ride) {
    if (!ride.stations || ride.stations.length === 0) {
        return 0
    }

    var start = ride.stations[0].start
    var tile = map.getTile(Math.floor(start.x / 32), Math.floor(start.y / 32))

    var elementIndex = -1
    for (var i = 0; i < tile.elements.length; i++) {
        var el = tile.elements[i]
        if (el.type === "track" && el.ride === ride.id && el.baseZ === start.z) {
            elementIndex = i
            break
        }
    }
    if (elementIndex === -1) {
        return 0
    }

    var iterator = map.getTrackIterator({ x: start.x, y: start.y }, elementIndex)
    if (!iterator) {
        return 0
    }

    function samePosition(a, b) {
        return a.x === b.x && a.y === b.y && a.z === b.z && a.direction === b.direction
    }

    var startPos = iterator.position
    var count = 0
    var maxIterations = 1000
    var loopedBackToStart = false

    if (iterator.segment && iterator.segment.countsAsInversion) {
        count++
    }

    while (maxIterations-- > 0) {
        if (!iterator.next()) {
            break // dead end - reached the far end of a shuttle-style layout
        }
        if (samePosition(iterator.position, startPos)) {
            loopedBackToStart = true
            break // back at the station - full circuit covered
        }
        if (iterator.segment && iterator.segment.countsAsInversion) {
            count++
        }
    }

    if (!loopedBackToStart) {
        // Shuttle-style layout: the track behind the station (e.g. a launch
        // track with inline twists) is a separate branch that forward
        // iteration never reaches, so walk backwards from the station too.
        var backIterator = map.getTrackIterator({ x: start.x, y: start.y }, elementIndex)
        if (backIterator) {
            maxIterations = 1000
            while (maxIterations-- > 0 && backIterator.previous()) {
                if (samePosition(backIterator.position, startPos)) {
                    break
                }
                if (backIterator.segment && backIterator.segment.countsAsInversion) {
                    count++
                }
            }
        }
    }

    return count
}

function checkRideWindow() {

    var rideId = null

    for (var i = 0; i < ui.windows; i++) {
        var w = ui.getWindow(i)
        if (w.classification === RIDE_WINDOW_CLASS) {
            rideId = w.number
            break
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
        var isTested = (ride.flags & (1 << 1)) !== 0
        var requirements = REQUIREMENTS[ride.type] || {}

        var inversions = countInversions(ride)

        console.log(ride.name + ':')
        console.log(isTested ? "Max Speed: " + ride.maxSpeed + " mph" : "This ride has not finished testing yet, or is a ride type where speed is not calculated")
        console.log(isTested ? "Length: " + context.formatString('{LENGTH}', ride.rideLength) : "This ride has not finished testing yet, or is a ride type where length is not calculated")
        console.log(isTested ? "Max Negative Vertical G's: " + ride.maxNegativeVerticalGs : "This ride has not finished testing yet, or is a ride type where G-forces are not calculated")
        console.log(isTested ? "Max Lateral G's: " + ride.maxLateralGs : "This ride has not finished testing yet, or is a ride type where G-forces are not calculated")
        console.log(isTested ? "Drops: " + ride.numDrops : "This ride has not finished testing yet, or is a ride type where drops are not calculated")
        console.log(isTested ? "Highest Drop: " + context.formatString('{HEIGHT}', ride.highestDropHeight) : "This ride has not finished testing yet, or is a ride type where drops are not calculated")
        console.log("Inversions: " + inversions)

        console.log("")
        console.log("Requirements:")
        console.log(requirements.maxSpeed ? ride.maxSpeed >= requirements.maxSpeed ? "Max speed requirement passed" : "Max speed requirement failed" : "This ride type does not have a max speed requirement")
        if (getBuiltStations(ride).length == 1) {
            console.log(requirements.length ? ride.rideLength >= requirements.length ? "Length requirement passed" : "Length requirement failed" : "This ride type does not have a length requirement")
        }
        else if (getBuiltStations(ride).length > 1) {
            var firstLegLength = measureFirstLeg(ride)
            console.log("First leg length: ≈ " + context.formatString('{LENGTH}', firstLegLength))
            console.log(requirements.length ? firstLegLength >= requirements.length ? "Length requirement passed (estimated)" : "Length requirement failed (estimated)" : "This ride type does not have a length requirement")
        }
        console.log(requirements.negativeGs ? ride.maxNegativeVerticalGs <= requirements.negativeGs ? "Negative G requirement passed" : requirements.relaxIfInversions && inversions > 0 ? "Negative G requirement would fail, but is nullified by inversion(s)" : "Negative G requirement failed" : "This ride type does not have a negative G-force requirement")
        console.log(requirements.lateralGs ? ride.maxLateralGs >= requirements.lateralGs ? "Lateral G requirement passed" : "Lateral G requirement failed" : "This ride type does not have a lateral G-force requirement")
        console.log(requirements.numDrops ? ride.numDrops >= requirements.numDrops ? "Number of drops requirement passed" : requirements.relaxIfInversions && inversions > 0 ? "Number of drops requirement would fail, but is nullified by inversion(s)" : "Number of drops requirement failed" : "This ride type does not have a drop number requirement")
        console.log(requirements.dropHeight ? ride.highestDropHeight >= requirements.dropHeight ? "Drop height requirement passed" : requirements.relaxIfInversions && inversions > 0 ? "Drop height requirement would fail, but is nullified by inversion(s)" : "Drop height requirement failed" : "This ride type does not have a drop height requirement")
        console.log(requirements.inversions ? inversions >= requirements.inversions ? "Inversion requirement passed" : "Inversion requirement failed" : "This ride type does not have an inversion requirement")

        if (ride.type == 18) {
            console.log("Note that the chairlift must also have at least 2 stations")
        }

        if (ride.type == 67) {
            console.log("Note that the mini golf must have at least 1 hole")
        }

        if (ride.type == 65) {
            console.log("Note that the reverser coaster must also have at least 1 reverser piece")
        }
        if (ride.type == 74) {
            console.log("Note that the water coaster must also have at least 1 water piece")
        }

    }
}

function colourFor(requirementValue, passed, relaxIfInversions, inversions) {

    // black text for stat requirements not used by ride type
    if (requirementValue === undefined) return "{BLACK}"
    // green for stat requirements that the ride passes
    if (passed) return "{GREEN}"
    // yellow for requirements that the ride fails, but are being nullified by the presence of an inversion
    if (!passed && relaxIfInversions && inversions > 0) return "{YELLOW}"
    // red for failed requirements
    return "{RED}"
}

function statRequirementWindow() {

    var existingWindow = ui.getWindow("stat_requirements");
    if (existingWindow) {
        existingWindow.bringToFront();
        return;
    }

    var rides = map.rides.filter(function (r) { return r.classification === "ride" })
    var selectedRide = null
    var uiWindow = null

    var cachedLengthRideId = null
    var cachedLengthStationCount = null
    var cachedFirstLegLength = 0

    function getFirstLegLength(ride) {
        var stationCount = getBuiltStations(ride).length
        if (ride.id !== cachedLengthRideId || stationCount !== cachedLengthStationCount) {
            cachedLengthRideId = ride.id
            cachedLengthStationCount = stationCount
            cachedFirstLegLength = measureFirstLeg(ride)
        }
        return cachedFirstLegLength
    }

    var cachedInversionsRideId = null
    var cachedInversionsCount = 0

    function getInversions(ride) {
        if (ride.id !== cachedInversionsRideId) {
            cachedInversionsRideId = ride.id
            cachedInversionsCount = countInversions(ride)
        }
        return cachedInversionsCount
    }

    // Track construction fires these GameActions; invalidate both caches so the
    // next refresh recomputes rather than showing a stale length/inversion count.
    // trackremove doesn't expose which ride was affected, so this invalidates
    // unconditionally rather than trying to filter - the caches above already
    // do the real per-ride filtering lazily, next time they're read.
    var constructionHook = context.subscribe("action.execute", function (e) {
        if (e.action === "trackplace" || e.action === "trackremove") {
            cachedLengthRideId = null
            cachedInversionsRideId = null
        }
    })

    function refreshLabels() {
        if (!uiWindow || selectedRide === null) return

        var isTested = (selectedRide.flags & (1 << 1)) !== 0
        var requirements = REQUIREMENTS[selectedRide.type] || {}
        var inversions = getInversions(selectedRide)

        var maxSpeedLabel = uiWindow.findWidget('max-speed-label')
        maxSpeedLabel.text = isTested ? colourFor(requirements.maxSpeed, selectedRide.maxSpeed >= requirements.maxSpeed, requirements.relaxIfInversions, inversions) + "Max Speed: " + context.formatString('{VELOCITY}', selectedRide.maxSpeed) : selectedRide.name + " has not finished testing yet."
        
        var lengthLabel = uiWindow.findWidget('length-label')
        var stations = getBuiltStations(selectedRide).length
        if (stations == 1) {
            lengthLabel.text = isTested ? colourFor(requirements.length, selectedRide.rideLength >= requirements.length, requirements.relaxIfInversions, inversions) + "Length: " + context.formatString('{LENGTH}', selectedRide.rideLength) : ""
        }
        else if (stations > 1 && isTested) {
            var firstLegLength = getFirstLegLength(selectedRide)
            lengthLabel.text = colourFor(requirements.length, firstLegLength >= requirements.length, requirements.relaxIfInversions, inversions) + "Length: " + context.formatString('{LENGTH}', firstLegLength)
        }
        else if (stations > 1) {
            lengthLabel.text = ""
        }

        var maxNegativeGLabel = uiWindow.findWidget('max-negative-g-label')
        maxNegativeGLabel.text = isTested ? colourFor(requirements.negativeGs, selectedRide.maxNegativeVerticalGs <= requirements.negativeGs, requirements.relaxIfInversions, inversions) + "Max Negative Gs: " + selectedRide.maxNegativeVerticalGs : ""
        var maxLateralGLabel = uiWindow.findWidget('max-lateral-g-label')
        maxLateralGLabel.text = isTested ? colourFor(requirements.lateralGs, selectedRide.maxLateralGs >= requirements.lateralGs, requirements.relaxIfInversions, inversions) + "Max Lateral Gs: " + selectedRide.maxLateralGs : ""
        var dropNumberLabel = uiWindow.findWidget('number-of-drops-label')
        dropNumberLabel.text = isTested ? colourFor(requirements.numDrops, selectedRide.numDrops >= requirements.numDrops, requirements.relaxIfInversions, inversions) + "Drops: " + selectedRide.numDrops : ""
        var dropHeightLabel = uiWindow.findWidget('highest-drop-label')
        dropHeightLabel.text = isTested ? colourFor(requirements.dropHeight, selectedRide.highestDropHeight >= requirements.dropHeight, requirements.relaxIfInversions, inversions) + "Highest Drop: " + context.formatString('{HEIGHT}', selectedRide.highestDropHeight) : ""
        var inversionsLabel = uiWindow.findWidget('inversions-label')
        inversionsLabel.text = isTested ? colourFor(requirements.inversions, inversions >= requirements.inversions, requirements.relaxIfInversions, inversions) + "Inversions: " + inversions : ""
    }


    var desc = {
        classification: "stat_requirements",
        width: 240,
        height: 220,
        title: "Stat Requirement Checker",
        onUpdate: refreshLabels,
        onClose: function () {
            constructionHook.dispose()
        },
        widgets: [
            {
                name: 'ride_selector',
                type: 'dropdown',
                x: 5,
                y: 20,
                width: 230,
                height: 14,
                items: ["Select a ride"].concat(rides.map(function (r) { return r.name })),
                selectedIndex: 0,
                onChange: function (index) {
                    selectedRide = index === 0 ? null : rides[index - 1]
                    refreshLabels()
                }
            },
            // {
            //     name: 'ride-type-label',
            //     type: 'label',
            //     x: 5,
            //     y: 120,
            //     width: 200,
            //     height: 14,
            //     textAlign: 'left',
            //     text: selectedRide.rideType,
            // },
            {
                name: 'max-speed-label',
                type: 'label',
                x: 5,
                y: 100,
                width: 200,
                height: 14,
                textAlign: 'left',
                text: "",
            },
            {
                name: 'length-label',
                type: 'label',
                x: 5,
                y: 90,
                width: 200,
                height: 14,
                textAlign: 'left',
                text: "",
            },
            {
                name: 'max-negative-g-label',
                type: 'label',
                x: 5,
                y: 80,
                width: 200,
                height: 14,
                textAlign: 'left',
                text: "",
            },
            {
                name: 'max-lateral-g-label',
                type: 'label',
                x: 5,
                y: 70,
                width: 200,
                height: 14,
                textAlign: 'left',
                text: "",
            },
            {
                name: 'number-of-drops-label',
                type: 'label',
                x: 5,
                y: 60,
                width: 200,
                height: 14,
                textAlign: 'left',
                text: "",
            },
            {
                name: 'highest-drop-label',
                type: 'label',
                x: 5,
                y: 50,
                width: 200,
                height: 14,
                textAlign: 'left',
                text: "",
            },
            {
                name: 'inversions-label',
                type: 'label',
                x: 5,
                y: 40,
                width: 200,
                height: 14,
                textAlign: 'left',
                text: "",
            },
        ],
    }

    uiWindow = ui.openWindow(desc)
}

function main() {
    context.setInterval(checkRideWindow, 250)

    if (typeof ui !== 'undefined') {
        ui.registerMenuItem("Stat Requirement Checker", function () {
            statRequirementWindow()
        })
    }
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
})

// TO DO:

// Should do:
// Adjust window size and text spacing and stuff
// clean up code/remove code for console logs and other unnecessary stuff

// Could do:
// List rides in alphabetical order
// List whether ride counts for harder guest generation
// Refactor stat display/log lines into a map if possible
// Display ride type?
// Possibly check unsheltered track requirement
// Count inversions twice on shuttle coasters