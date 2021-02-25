
import { getFish } from "./fishData.js"

const allTheFish = getFish()

for (const fish of allTheFish) {
    console.log(fish)
}
