export class pizzaForm {

  type: string;
  size: string;
  cost: number;
  toppingNames: Array<string>;

  constructor(type: string, size: string, cost: number, toppingNames: Array<string>) {
    this.type = type;
    this.size = size;
    this.cost = cost;
    this.toppingNames = toppingNames;
  }
}
