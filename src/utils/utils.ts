import constants from "./constants.ts";

export default class Utils {
    public static getRandomInt(max: number): number {
        return Math.floor(Math.random() * max);
    }

    public static renderToday() {
        const currentDate = new Date();
        const month = constants.months[currentDate.getMonth()];
        const day = currentDate.getDate();
        const year = currentDate.getFullYear();

        return `${month} ${day}, ${year}`;
    }
}