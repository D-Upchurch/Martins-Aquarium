
import { getFish } from "./fishData.js"
import { fishList } from "./fishList.js"

fishList();

const allTheFish = getFish()

for (const fish of allTheFish) {
    console.log(fish)
}
