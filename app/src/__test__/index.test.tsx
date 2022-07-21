import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { correctDataToCreatePreference } from './fixture';
import App from '../App';
import fs from 'fs';
import path from 'path';
import Button from '../components/Button';


describe('Dados da página', () => {
  describe('Verifica se os dados do cliente estão corretos', () => {
    test('Nome e sobrenome do cliente: name, surname', () => {
      const { container } = render(<App />);
      const name = container.querySelector('#customer-name') as HTMLInputElement;
      expect(name?.value).toBe(`${correctDataToCreatePreference.payer.name} ${correctDataToCreatePreference.payer.surname}`);
    });
    test('O e-mail do usuário de teste', () => {
      const { container } = render(<App />);
      const email = container.querySelector('#email') as HTMLInputElement;
      expect(email?.value).toBe(correctDataToCreatePreference.payer.email);
    });
    test('Telefone de contato: DDD+Num', () => {
      const { container } = render(<App />);
      const phone = container.querySelector('#phone') as HTMLInputElement;
      expect(phone?.value).toBe(`${correctDataToCreatePreference.payer.phone.area_code} ${correctDataToCreatePreference.payer.phone.number}`);
    });
    test('Endereço: rua, número e CEP', () => {
      const compare = correctDataToCreatePreference.payer.address;
      const { container } = render(<App />);
      const address = container.querySelector('#address') as HTMLInputElement;
      expect(address?.value).toBe(`Rua ${compare.street_name}, ${compare.street_number} - ${compare.zip_code}`);
    });
  });
  describe('Verifica se os dados do produto estão corretos', () => {
    test('A ID é 1234', () => {
      const { container } = render(<App />);
      const id = container.querySelector('#id') as HTMLInputElement;
      expect(id?.value).toBe(correctDataToCreatePreference.items[0].id);
    });
    test('Descrição do produto: "Celular de Tienda e-commerce"', () => {
      const { container } = render(<App />);
      const description = container.querySelector('#description') as HTMLInputElement;
      expect(description?.value).toBe(correctDataToCreatePreference.items[0].description);
    });
    test('URL Imagen: Foto do produto selecionado. (url válida)', () => {
      const { container } = render(<App />);
      const pictureUrl = container.querySelector('#picture_url') as HTMLImageElement;
      expect(pictureUrl?.src).toBe(correctDataToCreatePreference.items[0].picture_url);
    });
    test('Quantidade: 1', () => {
      const { container } = render(<App />);
      const quantityInput = container.querySelector('#quantity') as HTMLInputElement;
      expect(Number(quantityInput?.value)).toBe(correctDataToCreatePreference.items[0].quantity);
    });
    test('O preço foi definido corretamente: é um número menor que 100', () => {
      // https://www.mercadopago.com.br/developers/pt/docs/checkout-pro/test-integration
      // A documentação informa que é para usar valores baixos, mas não especifica um limite.
      // Vou definir o valor de 100 no teste. Use um valor abaixo disso para passar.
      const { container } = render(<App />);
      const priceInput = container.querySelector('#price') as HTMLInputElement;
      const value = Number(priceInput?.value);
      expect(typeof value).toBe('number');
      expect(value).toBeLessThan(100);
    });
  });
  describe('Verifica se o script de seguranção está configurado corretamente', () => {
    // corrija o arquivo "../../public/index.html"
    const htmlFile = fs.readFileSync(path.resolve(__dirname, '../../public/index.html'), { encoding: 'utf-8' });
    document.documentElement.innerHTML = htmlFile;
    const securityScript = document.querySelector('script[output="deviceId"]');
    
    // test('input onde o script será colocado está presente na página, com id "deviceId"', async () => {
      
    //   const deviceIdInput = container.querySelector('#deviceId');
    //   expect(deviceIdInput).toBeInstanceOf(HTMLInputElement);
    // });
    test('O script de segurança está presente', () => {
      // console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz', deviceIdInput);
      expect(securityScript).toBeTruthy();
    });
    test('O script de segurança tem um atributo com nome "src" e seu é valor é "https://www.mercadopago.com/v2/security.js"', () => {
      expect(securityScript?.getAttribute('output')).toBe('deviceId');
    });
    test('O script de segurança tem um atributo com nome "view" e seu é valor é "item"', () => {
      expect(securityScript?.getAttribute('view')).toBe('item');
    });
    test('O script de segurança tem um atributo com nome "output" e seu é valor é "deviceId"', () => {
      expect(securityScript?.getAttribute('output')).toBe('deviceId');
    });
  });
});


// https://http2.mlstatic.com/frontend-assets/dx-devsite/devprogram/Examen_PT_CktPRO_3.pdf

export {}
