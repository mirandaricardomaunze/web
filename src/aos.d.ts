declare module 'aos' {
    import * as React from 'react';
  
    interface AosOptions {
        duration?: number; // Duração da animação em milissegundos
        easing?: string; // Tipo de easing
        offset?: number; // Distância que o elemento precisa rolar para ativar a animação
        delay?: number; // Atraso antes da animação começar
        once?: boolean  
    }
  
    const init=(aosOptions:AosOptions):void=>
    function refresh(){}
    function refreshHard(){}
    
    export default{
         init,
         refresh,
         refreshHard,
    };
  }