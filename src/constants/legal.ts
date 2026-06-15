import { SITE } from './site';

/** Bloque de contenido dentro de una sección legal. */
export interface LegalBlock {
  type: 'p' | 'list';
  text?: string;
  items?: string[];
}

export interface LegalSection {
  id: string;
  heading: string;
  blocks: LegalBlock[];
}

export interface LegalDoc {
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}

const LAST_UPDATED = '14 de junio de 2026';

/* ============================================================
   POLÍTICA DE PRIVACIDAD
   ============================================================ */
export const PRIVACY: LegalDoc = {
  lastUpdated: LAST_UPDATED,
  intro: `En ${SITE.name} tu confianza es tan importante como tu sonrisa. Esta Política de Privacidad explica qué datos personales recopilamos, con qué finalidad, cómo los protegemos y qué derechos tienes sobre ellos, en cumplimiento de la Ley N.° 29733 — Ley de Protección de Datos Personales del Perú y su reglamento.`,
  sections: [
    {
      id: 'responsable',
      heading: '1. Responsable del tratamiento',
      blocks: [
        {
          type: 'p',
          text: `El responsable del tratamiento de tus datos personales es ${SITE.legalName}, con domicilio en ${SITE.address.full}.`,
        },
        {
          type: 'list',
          items: [
            `Correo electrónico: ${SITE.email}`,
            `Teléfono / WhatsApp: ${SITE.phone}`,
            `Dirección: ${SITE.address.full}`,
          ],
        },
      ],
    },
    {
      id: 'datos',
      heading: '2. Datos que recopilamos',
      blocks: [
        { type: 'p', text: 'Recopilamos únicamente los datos necesarios para atenderte y prestarte nuestros servicios:' },
        {
          type: 'list',
          items: [
            'Datos de identificación y contacto: nombre, teléfono, correo electrónico.',
            'Datos clínicos y de salud bucal que nos compartes al solicitar una evaluación o tratamiento (datos sensibles, tratados con especial protección).',
            'Datos de la cita: tratamiento de interés, mensajes y preferencias de horario.',
            'Datos de navegación: información técnica anónima del sitio web (ver sección de cookies).',
          ],
        },
      ],
    },
    {
      id: 'finalidades',
      heading: '3. Finalidades del tratamiento',
      blocks: [
        { type: 'p', text: 'Usamos tus datos exclusivamente para:' },
        {
          type: 'list',
          items: [
            'Agendar, gestionar y dar seguimiento a tus citas y tratamientos.',
            'Responder tus consultas por formulario, WhatsApp, teléfono o correo.',
            'Enviarte recordatorios de cita y seguimiento posterior a tu atención.',
            'Elaborar tu historia clínica y los presupuestos correspondientes.',
            'Cumplir con obligaciones legales y sanitarias aplicables.',
          ],
        },
        {
          type: 'p',
          text: 'No utilizamos tus datos para fines distintos a los aquí descritos sin tu consentimiento previo.',
        },
      ],
    },
    {
      id: 'base-legal',
      heading: '4. Base legal y consentimiento',
      blocks: [
        {
          type: 'p',
          text: 'El tratamiento de tus datos se basa en el consentimiento que nos otorgas al completar nuestros formularios o contactarnos, así como en la ejecución de la relación de atención odontológica y el cumplimiento de obligaciones legales. Para los datos sensibles de salud solicitamos tu consentimiento expreso.',
        },
      ],
    },
    {
      id: 'conservacion',
      heading: '5. Conservación de los datos',
      blocks: [
        {
          type: 'p',
          text: 'Conservamos tus datos durante el tiempo necesario para cumplir las finalidades indicadas y, en el caso de la historia clínica, durante los plazos exigidos por la normativa sanitaria peruana. Cuando dejen de ser necesarios, los eliminamos o anonimizamos de forma segura.',
        },
      ],
    },
    {
      id: 'terceros',
      heading: '6. Compartir datos con terceros',
      blocks: [
        { type: 'p', text: 'No vendemos ni alquilamos tus datos personales. Solo los compartimos cuando es estrictamente necesario:' },
        {
          type: 'list',
          items: [
            'Con proveedores que nos prestan servicios (por ejemplo, laboratorios dentales o plataformas de mensajería), bajo deberes de confidencialidad.',
            'Cuando exista una obligación legal o un requerimiento de autoridad competente.',
          ],
        },
      ],
    },
    {
      id: 'derechos',
      heading: '7. Tus derechos (ARCO)',
      blocks: [
        {
          type: 'p',
          text: 'Como titular de los datos, puedes ejercer en cualquier momento tus derechos de acceso, rectificación, cancelación y oposición (ARCO), además de la revocación de tu consentimiento.',
        },
        {
          type: 'p',
          text: `Para ejercerlos, escríbenos a ${SITE.email}. Atenderemos tu solicitud en los plazos establecidos por la ley. Si consideras que tus derechos no fueron atendidos, puedes acudir a la Autoridad Nacional de Protección de Datos Personales del Perú.`,
        },
      ],
    },
    {
      id: 'seguridad',
      heading: '8. Seguridad de la información',
      blocks: [
        {
          type: 'p',
          text: 'Aplicamos medidas técnicas, organizativas y físicas razonables para proteger tus datos frente a accesos no autorizados, pérdida o alteración. El acceso a la información clínica está restringido al personal autorizado del studio.',
        },
      ],
    },
    {
      id: 'cookies',
      heading: '9. Cookies y tecnologías de navegación',
      blocks: [
        {
          type: 'p',
          text: 'Nuestro sitio puede utilizar cookies y tecnologías similares estrictamente necesarias para su funcionamiento y para entender de forma anónima cómo se usa, con el fin de mejorar tu experiencia. Puedes configurar tu navegador para rechazarlas; algunas funciones podrían verse afectadas.',
        },
      ],
    },
    {
      id: 'menores',
      heading: '10. Menores de edad',
      blocks: [
        {
          type: 'p',
          text: 'La atención de menores de edad se realiza siempre con el consentimiento y la presencia de su padre, madre o tutor, quien proporciona y autoriza el tratamiento de los datos del menor.',
        },
      ],
    },
    {
      id: 'cambios',
      heading: '11. Cambios a esta política',
      blocks: [
        {
          type: 'p',
          text: 'Podemos actualizar esta Política de Privacidad para reflejar cambios legales o en nuestros servicios. Publicaremos la versión vigente en esta página, indicando la fecha de última actualización.',
        },
      ],
    },
    {
      id: 'contacto',
      heading: '12. Contacto',
      blocks: [
        {
          type: 'p',
          text: `Si tienes dudas sobre esta política o sobre el tratamiento de tus datos, escríbenos a ${SITE.email} o por WhatsApp al ${SITE.phone}. Estaremos encantados de ayudarte.`,
        },
      ],
    },
  ],
};

/* ============================================================
   TÉRMINOS Y CONDICIONES
   ============================================================ */
export const TERMS: LegalDoc = {
  lastUpdated: LAST_UPDATED,
  intro: `Estos Términos y Condiciones regulan el uso del sitio web de ${SITE.name} y de los servicios que ofrecemos a través de él. Al navegar por este sitio o contactarnos, aceptas estas condiciones. Te recomendamos leerlas con calma.`,
  sections: [
    {
      id: 'aceptacion',
      heading: '1. Aceptación de los términos',
      blocks: [
        {
          type: 'p',
          text: `Al acceder y utilizar este sitio web aceptas quedar vinculado por estos Términos y Condiciones y por nuestra Política de Privacidad. Si no estás de acuerdo con ellos, te pedimos que no utilices el sitio.`,
        },
      ],
    },
    {
      id: 'studio',
      heading: '2. Sobre Evolution Studio Dental',
      blocks: [
        {
          type: 'p',
          text: `${SITE.legalName} es un studio dental ubicado en ${SITE.address.full}. A través de este sitio ofrecemos información sobre nuestros servicios y canales para agendar citas y contactarnos.`,
        },
      ],
    },
    {
      id: 'uso',
      heading: '3. Uso del sitio web',
      blocks: [
        { type: 'p', text: 'Te comprometes a usar este sitio de forma lícita y responsable. En particular, te obligas a no:' },
        {
          type: 'list',
          items: [
            'Utilizar el sitio con fines fraudulentos o que infrinjan la ley.',
            'Intentar acceder a áreas o sistemas no autorizados.',
            'Introducir software malicioso o interferir con el funcionamiento del sitio.',
            'Reproducir o explotar el contenido sin nuestra autorización.',
          ],
        },
      ],
    },
    {
      id: 'citas',
      heading: '4. Citas y reservas',
      blocks: [
        {
          type: 'p',
          text: 'Las solicitudes de cita realizadas a través del formulario, WhatsApp, teléfono o correo constituyen una solicitud de contacto y no una reserva confirmada. Una cita se considera confirmada únicamente cuando nuestro equipo te lo comunica de forma expresa.',
        },
      ],
    },
    {
      id: 'precios',
      heading: '5. Servicios y precios',
      blocks: [
        {
          type: 'p',
          text: 'Los precios mostrados en el sitio son referenciales y se expresan en soles (S/). El costo final de cada tratamiento depende de la evaluación clínica de cada paciente y se confirma en un presupuesto personalizado antes de iniciar cualquier procedimiento. Los precios pueden variar sin previo aviso.',
        },
      ],
    },
    {
      id: 'pagos',
      heading: '6. Pagos y cuotas',
      blocks: [
        {
          type: 'p',
          text: 'Aceptamos pago en efectivo, tarjeta, Yape, Plin y transferencia. Para determinados tratamientos ofrecemos planes en cuotas, cuyas condiciones te explicamos antes de empezar. El detalle de pago aplicable se acuerda directamente contigo en el studio.',
        },
      ],
    },
    {
      id: 'cancelaciones',
      heading: '7. Cancelaciones y reprogramaciones',
      blocks: [
        {
          type: 'p',
          text: 'Si necesitas cancelar o reprogramar tu cita, te agradecemos avisarnos con la mayor anticipación posible por nuestros canales de contacto, para poder reorganizar nuestra agenda y ofrecer ese espacio a otro paciente.',
        },
      ],
    },
    {
      id: 'propiedad',
      heading: '8. Propiedad intelectual',
      blocks: [
        {
          type: 'p',
          text: `Todos los contenidos de este sitio —marca, logotipo, textos, diseño, imágenes y elementos gráficos— son propiedad de ${SITE.name} o se utilizan con autorización, y están protegidos por la legislación de propiedad intelectual. No está permitida su reproducción o uso sin consentimiento previo y por escrito.`,
        },
      ],
    },
    {
      id: 'enlaces',
      heading: '9. Enlaces y contenido de terceros',
      blocks: [
        {
          type: 'p',
          text: 'Este sitio puede contener enlaces a plataformas de terceros (por ejemplo, WhatsApp, redes sociales o mapas). No somos responsables del contenido ni de las políticas de dichos sitios, que se rigen por sus propios términos.',
        },
      ],
    },
    {
      id: 'testimonios',
      heading: '10. Testimonios y resultados',
      blocks: [
        {
          type: 'p',
          text: 'Los testimonios, casos y resultados mostrados corresponden a experiencias reales de pacientes y se publican con su autorización. Cada caso es único: los resultados dependen de las condiciones particulares de cada persona y no constituyen una garantía de resultados idénticos.',
        },
      ],
    },
    {
      id: 'no-asesoria',
      heading: '11. La información no sustituye una consulta',
      blocks: [
        {
          type: 'p',
          text: 'El contenido del sitio tiene fines informativos y no constituye un diagnóstico ni asesoría odontológica personalizada. Cualquier decisión sobre tu salud bucal debe basarse en una evaluación clínica realizada por nuestros profesionales.',
        },
      ],
    },
    {
      id: 'responsabilidad',
      heading: '12. Limitación de responsabilidad',
      blocks: [
        {
          type: 'p',
          text: 'Procuramos que la información del sitio sea correcta y esté actualizada, pero no garantizamos que esté libre de errores u omisiones. En la medida permitida por la ley, no asumimos responsabilidad por daños derivados del uso o la imposibilidad de uso del sitio.',
        },
      ],
    },
    {
      id: 'modificaciones',
      heading: '13. Modificaciones',
      blocks: [
        {
          type: 'p',
          text: 'Podemos modificar estos Términos y Condiciones en cualquier momento. La versión vigente será siempre la publicada en esta página, con su fecha de última actualización.',
        },
      ],
    },
    {
      id: 'legislacion',
      heading: '14. Legislación aplicable y jurisdicción',
      blocks: [
        {
          type: 'p',
          text: 'Estos Términos y Condiciones se rigen por las leyes de la República del Perú. Cualquier controversia se someterá a los jueces y tribunales competentes de la ciudad de Huancayo.',
        },
      ],
    },
    {
      id: 'contacto',
      heading: '15. Contacto',
      blocks: [
        {
          type: 'p',
          text: `Para cualquier consulta sobre estos términos, escríbenos a ${SITE.email} o al ${SITE.phone}.`,
        },
      ],
    },
  ],
};
