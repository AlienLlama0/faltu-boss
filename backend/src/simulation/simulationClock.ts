let simulatedTime = new Date();

simulatedTime.setHours(8, 0, 0, 0);

export function tickTime() {
    simulatedTime = new Date(simulatedTime.getTime() + 30 * 60 * 1000);
}

export function getSimulatedTime() {
    return simulatedTime;
}

export function isOfficeHour() {
    const hour = simulatedTime.getHours();
    return hour >= 9 && hour < 17;
}

export function formatTime() {
    return simulatedTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });
}