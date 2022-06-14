// No parameters defined because function needs nothing to do its job
const createChassis = () => {
	// Create a new object. No properties yet.
	const newChassisObject = {	}

	return newChassisObject
}
const addBody = (chassisObject) => {
	// Use dot notation to add a new property
	chassisObject.body = "fever"

	// Return the chassis that now has a body property on it
	return chassisObject
}

const addWheels = (chassisObject) => {
    chassisObject.wheels = 4
    return chassisObject
}

const addEngine = (chassisObject) => {
    chassisObject.engine = "4.8L";
    return chassisObject
}

const addSteeringWheel = (chassisObject) => {
    chassisObject.steeringWheel = "tilting"
    return chassisObject
}

const addDriveTrain = (chassisObject) => {
    chassisObject.driveTrain = 'Two wheel drive'
    return chassisObject
}

let creatNewCar = createChassis()

addBody(creatNewCar)
addWheels(creatNewCar)
addEngine(creatNewCar)
addSteeringWheel(creatNewCar)
addDriveTrain(creatNewCar)

console.log(creatNewCar)