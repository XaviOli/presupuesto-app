# S7. Presupuesto

Aplicación para calcular el presupuesto de una página web, añadiendo más interacciones con el usuario (casillas de selección, inputs, botones). 

## Available Scripts

In the project directory, you can run:

### 🌟 `nivel 1`
Ejercicio 1

Empezará con tres checkboxes mediante los cuales el usuario podrá decidir si desea obtener el presupuesto de una página web (500 €), una campaña SEO (300 €) o una campaña de publicidad (200 €).

En función de las opciones que marque, se mostrará un precio distinto.

Ejercicio 2

Una vez creadas las casillas de selección que permitirán al usuario seleccionar el tipo de servicio que necesita, le ofreceremos la opción de ajustar uno de los servicios: crear una página web, pudiendo elegir el número de páginas y de idiomas .

Para ello, es necesario definir un styled-component llamado Panel que será visible cuando el cliente/a seleccione que desea hacer una página web.

Dentro de este componente, el cliente podrá seleccionar el número de páginas y el número de idiomas de la web que desea hacer. 

Al coste total de la web deberemos añadir la  siguiente cantidad :

- Número de páginas * el número de idiomas * 30 €.

Ejercicio 3

el usuario/a ya puede pedir 3 de nuestros servicios y customizar uno de ellos. 

Para hacer la vida más fácil al usuario, en lugar de hacerle teclear el número de páginas e idiomas que necesita, le pondremos unos botones a los lados del input para que de forma fácil pueda modificar su selección .

Para ellos, debes cambiar los `<input type = "texto"/>` del panel por un nuevo componente hecho a medida, que tendrá botones de incrementar y decrementar la cantidad, además de un cuadro de texto en el que podremos escribir la cantidad directamente:

Ejercicio 4

Ya casi has completado la base del proyecto, te falta guardar los datos de los campos seleccionados por el usuario en localstorage .

Tienes que usar el hook useEffect para cargar los datos del localstorage cuando se inicie el componente.

Ejercicio 5

Para terminar esta primera fase del proyecto, es necesario implementar una pantalla de bienvenida por el usuario/a , donde se explique el propósito y funcionamiento de la web.

Es necesario que implementes la navegación entre vistas utilizando el routing de React.

### 🌟🌟 `nivel 2`
Ejercicio 6

Para garantizar que todo el mundo entiende el significado de los inputs de número de páginas y de idiomas, tendrás que implementar un botón que abra un popup de ayuda.

Tienes que crear un nuevo componente, consistente en un botón que cuando es pulsado mostrará un popup de información, que contenga una descripción del servicio y el número de páginas seleccionadas por el usuario:

Al pulsar la capa de fondo gris de la ventana emergente, éste debe desaparecer.

Ejercicio 7

Ya has completado la web, pero sólo funciona para realizar un único presupuesto. Como esta web está pensada para que también los programadores/as freelance puedan generar sus presupuestos, falta dar la opción al usuario/a  para que pueda generar  varios presupuestos.

Para ello, deberás añadir dos inputs: nombre de presupuesto y cliente , que junto con el servicio seleccionado por el usuario y el precio total calculado, deberá añadirse a un listado de presupuestos en la parte derecha de la pantalla.

A la hora de añadir el presupuesto al listado, debe añadirse la fecha mediante el constructor new Date().

Los ítems de este listado deben contener todos los datos citados anteriormente.

Ejercicio 8

Hay un problema con el listado de presupuestos, cuesta encontrar los presupuestos cuando hay muchos, ya que no existe filtro, buscador u opción de ordenar el listado.

En este ejercicio deberás implementar 3 botones en la parte superior del listado, que efectúan las siguientes tareas:

- Botón ordenar alfabéticamente los presupuestos.

- Botón ordenar por fecha los presupuestos.

- Botón reinicializar el orden.

Ejercicio 9

Ordenando los presupuestos gracias al ejercicio anterior, facilita mucho la vida a los usuarios/as, pero todavía no es suficiente. 

Se necesita implementar un buscador de presupuestos, que busca en todos los nombres de los presupuestos para mostrar sólo los que concuerdan.

Ejercicio 10

Al igual que en el ejercicio 4 has implementado localstorage para guardar las preferencias de los servicios introducidos por el usuario/a, en este apartado debes implementar la persistencia del listado de presupuestos generados.

### 🌟🌟🌟 `nivel 3`
Ejercicio 11

Nos falta tener la capacidad de que el usuario pueda compartir la URL de un presupuesto y que al receptor le salga la pantalla cumplimentada. En muchas ocasiones un servicio se contrata por recomendación, por lo que es fundamental tenerlo implementado.

Al ir seleccionando cada una de las opciones del presupuesto, la URL de la misma debe cambiar en función de estos cambios. De esta forma, si el cliente comparte la URL con alguien, éste podrá visualizar las mismas opciones del presupuesto.



