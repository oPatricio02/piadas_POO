class Piada
{
    #titulo;
    #texto;
    #imagem;
    #cat;
    constructor(titulo, texto, imagem, cat)
    {
        this.#titulo = titulo;
        this.#texto = texto;
        this.#imagem = imagem;
        this.#cat = new Categoria(cat);
    }

    get Titulo()
    {
        return this.#titulo;
    }
    get Texto()
    {
        return this.#texto;
    }
    get Image()
    {
        return this.#imagem;
    }

    get Cat()
    {
        const valor = this.#cat.Nome;
        return valor;
    }
}

