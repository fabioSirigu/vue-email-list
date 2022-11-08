/* Descrizione:
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati. */

const { createApp } = Vue

createApp ({
      data(){
            return {
                  urlMail: 'https://flynn.boolean.careers/exercises/api/random/mail',
                  loadingMessage:'il contenuto sta caricando..',
                  mailArray: []
            }
      },
      mounted(){
            for (let index = 0; index < 10; index++) {
                  axios
                  .get(this.urlMail)
                  .then(response => {
                        this.mailArray.push(response.data.response)
                  })     
            }
      }
}).mount('#app')