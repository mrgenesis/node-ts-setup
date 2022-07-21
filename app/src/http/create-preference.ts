import { IData } from "../../types";

interface IHeader {
  [k: string]: string;
}

export default class CreatePreferece {
  private response: any;
  private headers: IHeader = {};


  constructor(private readonly data: IData) {}

  addHeader(header: IHeader) {
    this.headers = { ...this.headers, ...header };
  }
  fetch() {
    window.fetch(`/api/create-preference`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        ...this.headers
      },
      body: JSON.stringify(this.data)
    })
    .then(rawRes => rawRes.json())
    .then(res => this.response = res);
  }
  initPoint(){
    return this.response.init_point;
  }

}