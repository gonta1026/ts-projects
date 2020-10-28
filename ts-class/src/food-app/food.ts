import { Foodable } from "./interfaces";
import { Score } from "./score";

export class Food implements Foodable {
  constructor(public element: HTMLDivElement) {
    element.addEventListener("click", this.clickEventHandler.bind(this)) //bindでこのクラスのthisをメソッドの対象にさせる。
  }
  clickEventHandler() {
    this.element.classList.toggle("food-active");
    const score = Score.getInstance();
    score.render();
  }
}
