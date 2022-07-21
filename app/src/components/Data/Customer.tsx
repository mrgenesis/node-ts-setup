import { IData } from "../../../types";
import InputWithInnerLabel from "./Input";
import data from './raw-data';
import Data from "./Data";

const customerData: Data = new Data(data);

const Customer = () => {
  return (
    <>
      <p>Dados do Cliente</p>
      <InputWithInnerLabel id="customer-name" label="Nome" value={customerData.getFullName()} />
      <InputWithInnerLabel label={customerData.getIdentification().type} value={customerData.getIdentification().number} />
      <InputWithInnerLabel id="email" label="E-mail" value={customerData.getEmail()} />
      <InputWithInnerLabel id="phone" label="Telefone" value={customerData.getPhone()} />
      <InputWithInnerLabel id="address" label="Endereço" value={customerData.getAddress()} />
    </>
  );
}

export default Customer;
