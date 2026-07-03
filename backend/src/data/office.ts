import { devices } from "./devices"
import { calculatePower } from "../power/power"
import { checkAfterHours } from "../simulation/alert"
import { formatTime } from "../simulation/simulationClock"

export function getOfficeState(){
    return { 
        devices,
        power: calculatePower(),
        alerts: checkAfterHours(),
        time: formatTime(),
    };
}