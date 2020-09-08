import React from "react";

import { Container, ProductTable, Total } from "./styles";
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from "react-icons/md";

import { persistor } from "../../store";

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Subtotal</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src='https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ts=1586961574'
                alt='tenis'
              />
            </td>
            <td>
              <strong>Tênis daora</strong>
              <span>129</span>
            </td>
            <td>
              <div>
                <button type='button'>
                  <MdRemoveCircleOutline size={20} color='#7159c1' />
                </button>
                <input type='number' readOnly value={1} />
                <button type='button'>
                  <MdAddCircleOutline size={20} color='#7159c1' />
                </button>
              </div>
            </td>
            <td>
              <strong>R$ 258</strong>
            </td>
            <td>
              <button type='button'>
                <MdDelete
                  size={15}
                  color='#7159c1'
                  onClick={() => persistor.purge()}
                />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type='button'>Finalizar Pedido</button>
        <Total>
          <span>Total</span>
          <strong>R$ 1000,00</strong>
        </Total>
      </footer>
    </Container>
  );
}
