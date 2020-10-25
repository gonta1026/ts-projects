import * as Interfaces from "./interfaces.js";
//Interfaces.foodのようにして使う。 
import { Scoreable } from "./interfaces.js";
import { Foods } from "./foods.js";

export class Score implements Scoreable {
  private static instance: Score;
  private constructor() { }
  static getInstance() {
    if (!Score.instance) {
      Score.instance = new Score();
    }
    return Score.instance;
  }

  get totalScore(): number {
    const foods = Foods.getInstance();
    return foods.activeElementsScore.reduce((total: number, score: number) => total + score, 0);
  }
  render(): void {
    document.querySelector(".score__number")!.textContent = String(this.totalScore)
  }
}
