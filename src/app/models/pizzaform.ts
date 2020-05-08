export class pizzaForm {

  type: string;
  size: string;
  cost: number;
  toppingNames: Array<string>
  quantity: number;

  constructor(type: string, size: string, cost: number, toppingNames: Array<string>, quantity:number) {
    this.type = type;
    this.size = size;
    this.cost = cost;
    this.toppingNames = toppingNames;
    this.quantity = quantity;
  }
}
