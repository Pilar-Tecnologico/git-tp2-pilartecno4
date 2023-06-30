# Guía de actividades Nº2 - GIT

1. Haz un **Fork** del repositorio del proyecto a tu cuenta personal de GitHub.

2. **Clona** el repositorio desde tu Fork a tu máquina local.

3. Por cada uno de los tickets que se presentan a continuación, realiza las siguientes acciones:

    - Crea una nueva rama desde master siguiendo el formato: `feature/<nombre_descriptivo>`

    - Resolver lo solicitado por el ticket.
    
    - Asegúrate de subir la versión de la página (en el bloque meta version del header) usando SemVer. El número de versión dependerá si el ticket es Major, Minor o Patch.
    
    - Haz **push** de cada rama "feature" y genera una **Pull Request** (PR) a la rama principal de tu repositorio. Acepta el merge y borra la rama feature en GitHub.

    - Haz un tag en GitHub con la nueva versión desde master.

4. Realiza un **Pull Request** al repositorio original desde la rama master de tu Fork una vez que hayas terminado todos los tickets.

---

# Tickets

## Ticket 1: Validación de Formulario de Carga

**Resumen:** Implementar una validación en el formulario de carga para verificar que el campo de nombre no esté vacío.

**Descripción:** Actualmente, el formulario de carga permite a los usuarios hacer clic en el botón de carga sin rellenar el campo de nombre. Necesitamos prevenir esto al inhabilitar el botón de carga hasta que el campo de nombre esté relleno. Considerar este cambio como un Patch.

**Criterios de aceptación:**

- El botón de carga está inhabilitado por defecto.
- El botón de carga se habilita cuando el campo de nombre contiene al menos un carácter.

---

## Ticket 2: Botón de Eliminar

**Resumen:** Agregar una funcionalidad de eliminación a la lista de videojuegos.

**Descripción:** Los usuarios deberían poder eliminar una entrada de la lista de videojuegos. Necesitamos agregar un botón de eliminar a cada entrada de la lista, el botón debe ser rojo con una X blanca. Cuando el botón se presione, la entrada correspondiente se eliminará de la lista. Considerar este cambio como un Minor.

**Criterios de aceptación:**

- Cada entrada de la lista tiene un botón de eliminar.
- Al presionar el botón de eliminar, la entrada correspondiente se elimina de la lista.

---

## Ticket 3: Sistema de Clasificación (Opcional)

**Resumen:** Implementar una funcionalidad de clasificación para los videojuegos.

**Descripción:** Los usuarios deberían poder asignar una clasificación a cada videojuego (por ejemplo, de 1 a 5 estrellas). Necesitamos agregar esta funcionalidad y mostrar la clasificación en la tabla. Considerar este cambio como un Major.

**Criterios de aceptación:**

- Los usuarios pueden asignar una clasificación a cada videojuego.
- La clasificación se muestra en la tabla.

OD

