class Negociacao {
  constructor(data, quantidade, valor) {

    /**
     * O unerline de prefixo das variáveis são uma convenção indicando que a variável é privada
     */

    this._data = data;
    this._quantidade = quantidade;
    this._valor = valor;
  }

  /**Metodos da classe que farão retornar os valores das variáveis privadas */

  get data() {
    return this._data;
  }

  get quantidade() {
    return this._quantidade;
  }

  get valor() {
    return this._valor;
  }

  get volume() {
    return this._quantidade * this._valor;
  }
}