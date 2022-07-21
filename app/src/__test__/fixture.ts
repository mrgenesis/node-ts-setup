import { IData } from "../../types";

const correctDataToCreatePreference: IData = {
  "payer": {
    "name": "Lalo",
    "surname": "Landa",
    "email": "est_user_92801501@testuser.com",
    "phone": {
      "area_code": "55", 
      "number": "98529-8743"
    },
    "identification": {
      "type": "CPF",
      "number": "19119119100"
    },
    "address": {
      "street_name": "falsa",
      "street_number": 123,
      "zip_code": "78134-190"
    }
  },
  "items": [{
    "id": "1234",
    "title": "Celular Contoso",
    "picture_url": `${window.location.origin}/images/mobile-photo.png`,
    "description": "Celular de Tienda e-commerce",
    "quantity": 1,
    "price": 79
  }]
}

export { correctDataToCreatePreference };
