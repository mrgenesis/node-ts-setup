import InputWithInnerLabel from "./Input";
import data from './raw-data';
import Data from "./Data";

const customerData: Data = new Data(data);

const Customer = () => {
  return (
    <>
      <p>{customerData.getProductName()}</p>
      <InputWithInnerLabel id='id' label={'ID'} value={customerData.getProductId()} />
      <InputWithInnerLabel id='quantity' label="Quantidade" value={String(customerData.getProductQuantity())} />
      <InputWithInnerLabel id='description' label="Descrição" value={customerData.getProductDescription()} />
      <InputWithInnerLabel id='price' label="Preço" value={String(customerData.getProductPrice())} />
    </>
  );
}

export default Customer;
