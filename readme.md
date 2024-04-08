# E-Commerce App - React Native

Una aplicación para la venta de abarrotes de forma electronica desarrollada con React Native que pretende ofrecer una comoda experiencia de compra e intuitiva.

### Principales Funciones
#### Pantalla de Login
En esta se muestra un formulario en donde se pden datos de loogueo como correo y contraseña y en caso de no estar registrado esta la opcion de registrase.

#### Pantalla de Registro 
En esta seccion se muestra un formulario para realizar el registro se solcitan datos como:
- correo
- Contraseña 
- Verificacion de la contraseña  
### Pantalla de Perfil
- **Acceso Controlado:** Tanto las compras y el acceso a la pantalla de perfil se logran solo si el usuario esta logueado, lo que brinda una mayor seguridad.
- **Perfil:** En la pantalla del perfil se muestran datos como direccion y la imagen de perfil( ambas pueden ser cambiadas)

### Autenticación con Firebase

- Se utilizan los servicios de autentificacion de Firebase para gestionar el acceso de los  usuarios a la aplicacion.
- Permite  al usuario el iniciar sesion y realizar el registro de forma segura.

### Pantalla de Categorias 

Esta pantalla permite visualizar las categorias de los productos que estan disponibles en la tienda, permitiendo a los usuarios elegir.


### Pantalla de Detalles del Producto
La pantalla de detalles del producto es una pantalla que muestra información adicional sobre cada uno de los productos,
Esta pantalla es una vista detallada del producto, en ella se mostraran todos los atributos del producto que fue seleccionado por el usuario.
En esta pantalla permite al usuario agregar al carrito y elegi la cantidad de productos a agregar.

### Navegacion 

Es un Tab inferios en donde se muestran:
- Home (Pantalla Inicial)
- Carrito de Compras
- Compras realizadas 
- Perfil 

## Tecnologias utilizadas 

- **Firebase Authentication:** Implementa el sistema de autenticación de Firebase para gestionar la seguridad de la aplicación.
- **React Native Navigation Stack:** Gestiona la navegación entre pantallas.
- **React Native Navigation Buttom tap:** Gestiona la navegación entre pestañas.
- **Expo-Location:** Permite acceder y gestionar la ubicación del usuario.
- **Expo-Picker-Image:** Facilita la carga de imágenes de perfil.
- **Redux:** Centraliza y gestiona el estado de la aplicación.
- **RTK Query y Firebase:** Realiza operaciones de lectura/escritura en la base de datos.

## Instalación

1. Clona el repositorio: `git clone https://github.com/AlfonsoAntonioF/appPV1.git`
2. Instala las dependencias: `npm install`
3. Configura las claves de API para servicios externos (Expo-Location, Firebase, etc.).
4. Configura las credenciales de Firebase en tu proyecto.
5. Ejecuta la aplicación: `npm start`

## Contacto

Para preguntas o soporte, contacta a alfonsoantonio234@gmail.com
