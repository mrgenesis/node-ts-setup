
type Warnig = { status: boolean, msg: string };
export interface ICreatePreferenceStatus {
  hasDeviceId: boolean;
  fetch: 'stopped' | 'sent' | 'responsed';
  limitVerify: number;
  warning: string;
}

export interface ICustomerPhone {
  area_code: string;
  number: string;
}
export interface ICustomerAddress {
  street_name: string;
  street_number: number;
  zip_code: string;
}
export interface ICustomerIdentification {
  type: string;
  number: string;
}

export interface IPayer {
  name: string;
  surname: string;
  email: string;
  phone: ICustomerPhone;
  identification: ICustomerIdentification;
  address: ICustomerAddress;
}
interface IItems {
  id: string;
  title: string;
  picture_url: string;
  description: string;
  quantity: number;
  price: number
}
export interface IData {
  payer: IPayer;
  items: IItems[]
}

