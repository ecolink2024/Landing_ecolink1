# EcoLink — Guía de uso

Manual práctico del sitio y del panel de noticias. Pensado para quien carga contenido o administra el día a día (no hace falta saber programar).

## Sitio público

**URL:** https://landing-ecolink-gtr1.vercel.app

### Secciones del menú

| Sección | Qué encontrarás |
| --- | --- |
| **Inicio** | Presentación, impacto, novedades recientes y formulario de contacto |
| **Casas** | Servicios para hogares, videos/imágenes y formulario de consulta |
| **Empresas** | Servicios B2B, CTAs a WhatsApp y formulario de consulta |
| **Somos** | Quiénes somos / equipo |
| **Novedades** | Todas las noticias publicadas (con paginación) |

También hay un botón flotante de **WhatsApp** en la mayoría de las páginas.

### Formularios de contacto

En Inicio, Casas y Empresas hay formularios (nombre, email, teléfono, consulta).  
Al enviarlos, los datos se guardan en una **planilla de Google Sheets** del equipo (no se ven en el panel de noticias).

Si ves `?ok=1` en la URL después de enviar, el envío se registró bien.

### Presentaciones (enlaces especiales)

Hay páginas solo con presentaciones de Google Slides (para compartir por link):

- `/recursos/p/presentacion`
- `/recursos/p/organicos-compostables`

No aparecen en el menú principal. Si hay que cambiar la presentación, lo hace alguien de desarrollo (archivo de configuración del proyecto).

---

## Panel de noticias (Admin)

**URL:** https://landing-ecolink-gtr1.vercel.app/admin  
(si no estás logueada, te manda a `/admin/login`)

### Entrar y salir

1. Ir a `/admin/login`
2. Ingresar email y contraseña de administrador
3. Entrá al panel: formulario a la izquierda, listado a la derecha
4. **Salir** cierra la sesión

La sesión dura varios días; si te pide login de nuevo, volvé a entrar.

---

## Crear una noticia

1. Completá **Título** (mínimo 3 caracteres, máximo 120).
2. Elegí la **Fecha de la noticia** (es la que se muestra en Novedades; por defecto es hoy).
3. Escribí la **Bajada** (resumen que se ve en listados y debajo del título).  
   - Mínimo 3 caracteres.  
   - **Sin límite máximo** de caracteres.
4. Escribí el **Contenido** (texto principal de la nota; mínimo 10 caracteres).
5. Subí la **Imagen principal** (archivo).
6. (Opcional) Subí hasta **6 imágenes de galería**.
7. Activá **Publicada** (verde) o dejala en **Borrador**.
8. Tocá **Publicar**.

Si algo falla, debería aparecer un **mensaje en rojo** debajo del formulario (no una pantalla de error genérica). Leé el mensaje y corregí (por ejemplo: imagen faltante, texto muy corto, imagen muy pesada).

### Editar

En el listado, tocá **Editar**. Se cargan los datos arriba. Cambiá lo que haga falta y tocá **Actualizar**.

### Eliminar

**Eliminar** pide confirmación. La noticia se borra del sitio.

### Limpiar

**Limpiar** vacía el formulario y cancela el modo edición.

---

## Imágenes

### Reglas importantes

- Formatos: **JPG, PNG, WebP, GIF**
- Tamaño máximo: **4 MB** por archivo  
  Si supera 4 MB, el deploy puede devolver error (HTTP 413). Comprimí la imagen antes de subirla.
- Imagen principal: **obligatoria** para publicar
- Galería: hasta **6** imágenes, opcionales

### Cómo subir

1. En **Imagen**, elegí el archivo. Esperá el mensaje “Subiendo imagen…”.
2. Cuando termina, se muestra una vista previa.
3. Para la galería, usá el selector múltiple; podés quitar una imagen con la **×** sobre la miniatura.

No hace falta pegar URLs a mano: el sistema las genera al subir.

---

## Negrita en el contenido

En el campo **Contenido** podés resaltar texto:

1. Seleccioná la palabra o frase
2. Tocá el botón **Negrita**

O escribí a mano así:

```text
**Este título va en negrita**

Después sigue el párrafo normal.
```

En el sitio (detalle de la novedad) se verá en negrita.  
La bajada y el título **no** usan este formato por ahora (solo el contenido).

---

## Publicada vs borrador

| Estado | Qué pasa |
| --- | --- |
| **Publicada** | Se ve en Inicio (carousel), listado `/novedades` y detalle |
| **Borrador** | Solo la ves en el panel admin; no aparece en el sitio público |

---

## Qué se ve en cada lado del sitio

| Campo | Listado / Inicio | Detalle de la noticia |
| --- | --- | --- |
| Título | Sí | Sí (grande) |
| Fecha | Sí | Sí |
| Bajada | Sí (resumen) | Sí (debajo del título) |
| Contenido | No (o se usa bajada) | Sí (completo, con negrita) |
| Imagen principal | Sí | Sí (hero) |
| Galería | No | Sí (carousel debajo del texto) |

---

## Problemas frecuentes

| Síntoma | Qué revisar |
| --- | --- |
| “No se pudo subir la imagen” / 413 | Archivo &gt; 4 MB o formato no permitido |
| No deja publicar / mensaje de validación | Título corto, bajada vacía, contenido &lt; 10 caracteres, o falta imagen |
| Pantalla “Application error…” | Antes pasaba con errores de validación; si vuelve a pasar, avisar a desarrollo y mirar la consola del navegador |
| No veo la noticia en el sitio | ¿Está en **Borrador**? ¿Esperaste el deploy/caché unos minutos? |
| No entro al admin | Usuario/contraseña, o sesión vencida → `/admin/login` |
| Envié el form de contacto y no sé si llegó | Revisar la planilla de Leads; si la URL tiene `ok=1`, el sistema lo aceptó |

---

## Contactos del sitio (referencia)

- Email: somos@ecolink.com.ar  
- Instagram / LinkedIn / WhatsApp: enlaces del pie y botones del sitio  

(Los números/links de WhatsApp pueden variar por sección: Casas vs Empresas.)

---

## Para el equipo técnico

Detalle de repo, variables, API y deploy: [DESARROLLO.md](./DESARROLLO.md).
