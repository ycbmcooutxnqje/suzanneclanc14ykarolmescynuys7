// obtain plugin
var cc = initCookieConsent();

// run plugin with your configuration
cc.run({
  current_lang: "es",
  autoclear_cookies: true, // default: false
  page_scripts: true, // default: false

  // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
  delay: 1000, // default: 0
  auto_language: "browser", // default: null; could also be 'browser' or 'document'
  // autorun: true,                          // default: true
  force_consent: true, // default: false
  // hide_from_bots: false,                  // default: false
  // remove_cookie_tables: false             // default: false
  cookie_name: "avisolegal", // default: 'cc_cookie'
  // cookie_expiration: 182,                 // default: 182 (days)
  // cookie_necessary_only_expiration: 182   // default: disabled
  // cookie_domain: location.hostname,       // default: current domain
  // cookie_path: '/',                       // default: root
  // cookie_same_site: 'Lax',                // default: 'Lax'
  // use_rfc_cookie: false,                  // default: false
  // revision: 0,                            // default: 0

  onFirstAction: function (user_preferences, cookie) {
    // callback triggered only once
  },

  onAccept: function (cookie) {
    // ...
  },

  onChange: function (cookie, changed_preferences) {
    // ...
  },

  languages: {
    es: {
      consent_modal: {
        title: "Antes de continuar..",
        description:
          "Esta web NO es la oficial de Gran Hermano. Esta web no emite ni emitirá, transmite o transmitirá nunca ningún tipo de contenido desde sus servidores. Todos los contenidos aqui mostrados son de terceros.",
        primary_btn: {
          text: "Aceptar",
          role: "accept_all", // 'accept_selected' or 'accept_all'
        },
      },
      settings_modal: {
        title: "Configuración de cookies",
        save_settings_btn: "Guardar",
        accept_all_btn: "Permitirlas todas",
        reject_all_btn: "Rechazarlas todas",
        close_btn_label: "Cerrar",
        blocks: [
          {
            title: "Uso de cookies 📢",
            description:
              'Utilizamos cookies para ofrecerte una mejor experiencia en nuestro servicio y garantizar las funcionalidades básicas. Puede elegir para cada categoría la opción de aceptar/rechazar cuando lo desee. Para obtener más detalles sobre las cookies y otros datos sensibles, lea: <a href="/privacidad.html" class="cc-link">Política de Privacidad</a>.',
          },
          {
            title: "Cookies estrictamente necesarias",
            description:
              "Estas cookies son esenciales para el correcto funcionamiento de la web. Sin estas cookies, la web no funcionaría correctamente.",
            toggle: {
              value: "necessary",
              enabled: true,
              readonly: true, // cookie categories with readonly=true are all treated as "necessary cookies"
            },
          },
          {
            title: "Cookies de rendimiento",
            description:
              "Estas cookies nos permiten contar las visitas y fuentes de circulación para poder medir y mejorar el desempeño de nuestro sitio. Nos ayudan a saber qué páginas son las más o menos populares, y ver cuántas personas visitan el sitio. Toda la información que recogen estas cookies es agregada y, por lo tanto, anónima. Si no permite estas cookies no sabremos cuándo visitó nuestro sitio, y por lo tanto no podremos saber cuándo lo visitó.",
            toggle: {
              value: "analytics", // your cookie category
              enabled: true,
              readonly: false,
            },
          },
          {
            title: "Cookies dirigidas",
            description:
              "Estas cookies pueden estar en todo el sitio web, colocadas por nuestros socios publicitarios. Estos negocios pueden utilizarlas para crear un perfil de sus intereses y mostrarle anuncios relevantes en otros sitios. No almacenan información personal directamente, sino que se basan en la identificación única de su navegador y dispositivo de acceso al Internet. Si no permite estas cookies, tendrá menos publicidad dirigida.",
            toggle: {
              value: "targeting",
              enabled: true,
              readonly: false,
            },
          },
          {
            title: "Más información",
            description:
              'Para cualquier consulta en relación con nuestra política de cookies y sus opciones, por favor <a class="cc-link" href="#">contacta con nosotros</a>.',
          },
        ],
      },
    },
  },

  gui_options: {
    consent_modal: {
      layout: "cloud",
    },
  },
});
