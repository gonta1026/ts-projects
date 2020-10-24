interface Scoreable {
  readonly totalScore: number;
  render(): void;
}
interface Foodable {
  element: HTMLDivElement;
  clickEventHandler(): void;
}

interface Foodsable {
  elements: NodeListOf<HTMLDivElement>
  readonly activeElements: HTMLDivElement[];
  readonly activeElementsScore: number[];
}

class Foods implements Foodsable {
  private static instance: Foods;
  elements = document.querySelectorAll<HTMLDivElement>(".food");
  private _activeElements: HTMLDivElement[] = [];
  private _activeElementsScore: number[] = [];
  private constructor() {
    this.elements.forEach(element => {
      new Food(element);
    })
  }
  static getInstance() {
    if (!Foods.instance) {
      Foods.instance = new Foods();
    }
    return Foods.instance;
  }
  get activeElements() {
    this._activeElements = [];
    this.elements.forEach(element => {
      if (element.classList.contains("food-active")) {
        this._activeElements.push(element)
      }
    })
    return this._activeElements;
  }
  get activeElementsScore() {
    this._activeElementsScore = [];
    this.activeElements.forEach(element => {
      if (element.classList.contains("food-active")) {
        const foodScore = element.querySelector(".food__score");
        if (foodScore) {
          this._activeElementsScore.push(Number(foodScore.textContent))
        }
      }
    })
    return this._activeElementsScore;
  }
}

class Food implements Foodable {
  constructor(public element: HTMLDivElement) {
    element.addEventListener("click", this.clickEventHandler.bind(this)) //bindでこのクラスのthisをメソッドの対象にさせる。
  }
  clickEventHandler() {
    this.element.classList.toggle("food-active");
    const score = Score.getInstance();
    score.render();
  }
}

class Score implements Scoreable {
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

const foods = Foods.getInstance();
