# Precios de referencia

Los precios se muestran según el idioma de la página, que a su vez se elige con el idioma del navegador:

- `/es` (navegador en español) → **MXN**, mercado mexicano. Fuente: `src/content/home.es.js` (objeto `PRICES`).
- `/` (cualquier otro idioma) → **USD**, clientes en EE. UU. y otros países. Fuente: `src/content/home.en.js`.

Son precios "desde". Para cambiarlos, edita solo el objeto `PRICES` de cada archivo: las tarjetas, las respuestas
de la FAQ y los datos estructurados para Google (JSON-LD) se actualizan solos.

## Tabla actual

| Paquete | MXN (`/es`) | USD (`/`) |
| --- | --- | --- |
| Landing Page | $5,490 | $630 |
| Sitio Profesional (hasta 5 páginas) | $11,900 | $1,350 |
| Sitio Premium (hasta 10 páginas, CMS, bilingüe) | $22,300 | $2,390 |
| Automatización e IA (agente WhatsApp) | $9,600 + $1,200/mes | $630 + $79/mes |
| Sistema web a medida | $31,900 | $3,100 |
| Plataforma a medida | $71,900 | $7,100 |
| Tienda en línea | $23,900 | $2,790 |
| Menú digital QR | $3,100 | $230 |
| Automatización de redes | $2,800/mes | $199/mes |
| Mantenimiento y hosting | $470/mes | $39/mes |

## Por qué estos montos

Rangos de mercado consultados en octubre de 2026:

- México: una landing cuesta entre $3,000 y $10,000 MXN con freelance y más de $10,000 MXN con agencia; un sitio
  corporativo para PyME, entre $10,000 y $30,000 MXN ([GoDaddy México](https://www.godaddy.com/resources/latam/clientes/cuanto-cuesta-una-pagina-web-mexico)).
  Promedio de directorio en Zapopan: ~$12,000 MXN ([Cronoshare](https://www.cronoshare.com.mx/servicios/hacer-pagina-web/jalisco/zapopan)).
- EE. UU.: landing de $500 a $2,500 USD; sitio de 5 a 15 páginas de $2,000 a $8,000 USD; agencias pequeñas de $3,000 a
  $15,000 USD; mantenimiento de $50 a $500 USD/mes ([guía 2026](https://dev.to/allenarduino/how-much-does-a-small-business-website-cost-in-2026-2i0k),
  [Bellaworks](https://bellaworksweb.com/website-design-cost/), [Merge](https://merge.rocks/blog/how-much-does-website-design-cost-in-2026-an-honest-pricing-guide)).

Criterio (octubre de 2026): son los **precios base** del estudio, fijados ~20% por debajo del precio de referencia
de un estudio en el mercado (Landing ~$6,900 MXN / $790 USD, sitio de 5 páginas ~$14,900 / $1,690) para ganar
posicionamiento y clientes más rápido. No se presentan como descuento.

En USD se usa precio regional para clientes extranjeros (estudio nearshore), no una conversión directa del peso.

## Pendientes de decidir

- **IVA**: los precios no dicen si incluyen IVA. Si facturas, conviene agregar "+ IVA" en `pricing.note` de `home.es.js`.
- **Hispanohablantes fuera de México** (España, Colombia, EE. UU.) ven precios en MXN porque su navegador está en
  español. Si se vuelve común, se puede agregar un selector de moneda.
