import type { Product, FaqItem } from './types';

export const products: Product[] = [
  {
    id: 'custom-dev',
    title: 'Desarrollo de Software a Medida',
    description: 'Creamos soluciones tecnológicas totalmente personalizadas que se adaptan a las necesidades específicas de tu negocio. Nuestro equipo de expertos se encarga del ciclo completo, desde la conceptualización hasta el despliegue y mantenimiento.',
    benefits: ['Aplicaciones Móviles y Web a medida.', 'Desarrollo de sistemas CRM y ERP personalizados.', 'Soluciones escalables y seguras.', 'Integración nativa con tus sistemas existentes.'],
    imageId: 'product-custom-dev',
    cta: 'Solicita una consultoría',
  },
  {
    id: 'consulting',
    title: 'Consultoría Tecnológica y de Procesos',
    description: 'Te ofrecemos un asesoramiento estratégico para transformar la visión tecnológica de tu empresa. Optimizamos tus procesos y te guiamos en la adopción de las mejores prácticas y herramientas del mercado.',
    benefits: ['Asesoría en arquitectura de software e infraestructura.', 'Gestión del cambio y dirección de proyectos.', 'Implantación de metodologías ágiles (Scrum, Kanban).', 'Minería de datos, Big Data y Cloud Computing.'],
    imageId: 'product-consulting',
    cta: 'Agenda una reunión',
  },
];


export const faqs: FaqItem[] = [
  {
    question: '¿Qué tipo de proyectos de software realizan?',
    answer: 'Nos especializamos en desarrollo a medida, lo que incluye aplicaciones web progresivas (PWA), aplicaciones móviles nativas e híbridas, sistemas de gestión de clientes (CRM), y sistemas de planificación de recursos empresariales (ERP). Cada solución se diseña desde cero para tu negocio.',
  },
  {
    question: '¿Cómo funciona el servicio de consultoría?',
    answer: 'Nuestro proceso de consultoría comienza con un análisis profundo de tu negocio, tus procesos y tus objetivos. A partir de ahí, diseñamos un plan estratégico que puede incluir la optimización de procesos, la migración a la nube, la adopción de metodologías ágiles o la integración de nuevas tecnologías.',
  },
  {
    question: '¿Trabajan con metodologías ágiles?',
    answer: 'Sí, las metodologías ágiles son el pilar de nuestro proceso de desarrollo y consultoría. Implementamos Scrum y Kanban para garantizar la flexibilidad, la transparencia y la entrega continua de valor en cada proyecto.',
  },
  {
    question: '¿Qué soporte ofrecen una vez finalizado el proyecto?',
    answer: 'Nos vemos como tu socio tecnológico a largo plazo. Ofrecemos planes de soporte y mantenimiento continuo para asegurar que tu software funcione de manera óptima, se mantenga actualizado y evolucione junto con tu negocio.',
  },
];
