For execute run:

  - npm install
  - npm build
  - npm start
  - localhost:8080

Exercise.

2 points -> js/main.js with two global variables myState i myApp. Figure out a way to avoid globality. (Hint. Closures could help you)

  {
    - Podem vore el 'use strict' en cada fitxer i els clousers en les funcions de myApp y stopball.
  }

2 points -> danceWorld() is a child function inside inicia() but its callable in a global scope. We can avoid this?

  {
    - Podem vore que ara a la funcio danceWorld es retorna per a poder guardar el interval i així evitar que puga cridar desde un altre lloc.
  }

3 points -> Deal with module dependencies. main.js use core.js and stopball.js depend on main.js. In ES6 we can use import/export sentences to deal with module dependency at a browser level. Is it work in your browser?

  {
    - Els imports i els exports al pujarlo en el servidor de localhost de apache funcionen. Podem vore els imports en el main.js i els exports en el core per             exemple. En el cas de stopball al utilitzar un clousure no fa falta importarlo perque ja es crida una volta.
  }

3 points -> Using same import/export mechanism as stated in previous point if we use webpack how it simplifies our deployment?

  {
    - Al commit de webpack-config podem vore els fitxers que han sigut creats i modificats per a poder fer funcionar el webpack i a quin fitxer apunta de inici i         aon o guarda.
  }
