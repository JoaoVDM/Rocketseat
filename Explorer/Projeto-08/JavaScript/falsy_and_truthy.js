/*
    Type conversion (typecasting) vs Type coersion
*/

/*
    FALSY
    Quando um valor é considerado false em contextos onde um booleano é obrigatório ( condicionais e loops )


    Todos os valores abaixo seriam representados como false em um boolean.
    false
    0
    -0
    ""
    null
    undefined
    NaN
*/

/*
    TRUTHY
    Quando um valor é considerado true em contextos onde um booleano é obrigatório ( condicionais e loops )

	true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

console.log( NaN ? 'verdadeiro' : 'falso' )

