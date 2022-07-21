import { IData } from "../../../types";

 export default class Data {

  constructor(private readonly data: IData) {}

  getFullName() {
    return `${this.data.payer.name} ${this.data.payer.surname}`;
  }
  getEmail() {
    return this.data.payer.email;
  }
  getPhone() {
    return `${this.data.payer.phone.area_code} ${this.data.payer.phone.number}`;
  }
  getAddress() {
    return `Rua ${this.data.payer.address.street_name}, ${this.data.payer.address.street_number} - ${this.data.payer.address.zip_code}`;
  }
  getIdentification() {
    return this.data.payer.identification;
  }
  getProductName(index: number = 0) {
    return this.data.items[index].title;
  }
  getProductId(index: number = 0) {
    return this.data.items[index].id;
  }
  getProductDescription(index: number = 0) {
    return this.data.items[index].description;
  }
  getProductUrl(index: number = 0) {
    return this.data.items[index].picture_url;
  }
  getProductQuantity(index: number = 0) {
    return this.data.items[index].quantity;
  }
  getProductPrice(index: number = 0) {
    return this.data.items[index].price;
  }
 }