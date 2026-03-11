

export interface Trabajo {
  id: number
  titulo: string
  familia: string
  descripcion: string
  imagen: string       
  imagenesExtra?: string[] 
}

export const trabajos: Trabajo[] = [
  { 
    id: 1, 
    titulo: 'Comparte tu color', 
    familia: 'diseño', 
    descripcion: 'Proyecto transversal nº 3 de Diseño y tecnologías creativas. Campaña que ayuda a mejorar a no perder el contacto entre geeraciones. Nuestra campaña fomenta como tenemos nuestra misma esencia pero esta se nutre de las relaciones y sabiduría que nos pueden ofrecer otros "compartiendonos su color"',
    imagen: '/trabajos/Diseno1.jpg'
  },
  { 
    id: 2, 
    titulo: 'In Soul Diseño de juego de mesa', 
    familia: 'diseño', 
    descripcion: 'Proyecto transversal nº 2 de Diseño y tecnologías creativas. Juego de mesa como ayuda emocional con diseño limpio y amigable al público. In soul es un camino que recorre tu alma para que puedas sanar tu inteirior ya sea solo o cno amigos para tener un momento de reflexión conjunta. Con este jugos aprenderas sobre tu persona, sombre y ego tres estaciones en las que mediante avanzas el juego te adentrarás más en ti mismo',
    imagen: '/trabajos/Diseno2.jpg',
    imagenesExtra: ['/trabajos/Diseno2.2.jpg']  
  },
  { 
    id: 3, 
    titulo: 'Pereza Pecado capital', 
    familia: 'diseño', 
    descripcion: 'Trabajo para elementos del diseño. Cartel promocional para obra de tatro sobe el pecado capital de la pereza.',
    imagen: '/trabajos/Diseno3.jpg' 
  },{ 
    id: 4, 
    titulo: '36 days of type', 
    familia: 'diseño', 
    descripcion: 'Trabajo para tipografía. Participación en el proyecto anual de 36 days of type, creación de tres letras con la temática de lazo y bordado.',
    imagen: '/trabajos/Diseno4.jpg',
    imagenesExtra: ['/trabajos/Diseno4.3.jpg', '/trabajos/Diseno4.2.jpg']  
  },{ 
    id: 5, 
    titulo: 'Cunty Perry', 
    familia: 'ilustración', 
    descripcion: 'Ilustración homenaje a la artista magdalenita. Composición de tres poses diferentes. Material: lápices de colores y retocado digital',
    imagen: '/trabajos/Ilustracion1.jpg',
    imagenesExtra: ['/trabajos/Ilustracion1.2.jpg']  
  },{ 
    id: 6, 
    titulo: 'El jardín secreto', 
    familia: 'ilustración', 
    descripcion: 'Trabajo para ilustración. Creación de diferentes ilustraciones que formen parte del arte de la novela del jardín secreto. Material: pintura gpuache, lápices de colores y retoque digital',
    imagen: '/trabajos/Ilustracion2.jpg',
    imagenesExtra: ['/trabajos/Ilustracion2.2.jpg', '/trabajos/Ilustracion2.3.jpg']
  },{ 
    id: 7, 
    titulo: 'Animación comparte tu color', 
    familia: 'ilustración', 
    descripcion: 'Parte de animación del Proyecto transversal nº 3 de Diseño y tecnologías creativas. Realizado en procreate dreams. Crea una interactividad y llamada de atención al público gracias a todos sus pequeños detalles y colores, acompañando así a todo el propósito de la campaña',
    imagen: '/trabajos/Ilustracion3.jpg' 
  },{ 
    id: 8, 
    titulo: 'Mi primera borrachera', 
    familia: 'ilustración', 
    descripcion: 'Trabajo de cómic de ilustración. Cómic bocetado y entintado en tradicional y coloreado y retocado en digital. Pequeña historieta cómica de una pequeña Lizeth y una anecdota divertida',
    imagen: '/trabajos/Ilustracion4.jpg',
    imagenesExtra: ['/trabajos/Ilustracion4.2.jpg']  
  },{ 
    id: 9, 
    titulo: 'Ojillos saltones', 
    familia: 'ilustración', 
    descripcion: 'Ilustración en digital de Nano y Max (mis perritos) para uso en redes sociales. Adopta un estilo adorable y sencillo',
    imagen: '/trabajos/Ilustracion5.jpg',
    imagenesExtra: ['/trabajos/Ilustracion5.2.jpg']  
  },{ 
    id: 10, 
    titulo: 'Ilustración de Jungwon (Enhypen)', 
    familia: 'ilustración', 
    descripcion: 'Ilustración de Jungwon integrante del grupo de k-pop "Enhypen". Estilo realista en blanco y negro con un toque de color en el fondo.Materiales: lapices de gráfito de diferentes durezas y lápices de colores',
    imagen: '/trabajos/Ilustracion6.jpg' 
  },{ 
    id: 11, 
    titulo: 'Homenaje So Youn Lee', 
    familia: 'pintura', 
    descripcion: 'Trabajo para la asignatura de volumen. Modelado realizado por Cristina Caro, pintura ralizada por Michelle Lizeth Soto Morales. Materiales: pintura acrílica. Basado en las pinturas de la artista So Youn Lee, en colaboración con la marca de decoración lladró.',
    imagen: '/trabajos/Pintura1.jpg',
    imagenesExtra: ['/trabajos/Pintura1.2.jpg']  
  },{ 
    id: 12, 
    titulo: 'Retrato perros con fondo', 
    familia: 'pintura', 
    descripcion: 'Encargo en acuarela y lápices de colores',
    imagen: '/trabajos/Pintura2.jpg' 
  },{ 
    id: 13, 
    titulo: 'Mural encargo', 
    familia: 'pintura', 
    descripcion: 'Encargo de mural en pared',
    imagen: '/trabajos/Pintura3.jpg' 
  },{ 
    id: 14, 
    titulo: 'Retrato persona sin fondo', 
    familia: 'pintura', 
    descripcion: 'Encargo en acuarela y lápices de colores',
    imagen: '/trabajos/Pintura4.jpg' 
  },{ 
    id: 15, 
    titulo: 'Retrato perros sin fondo', 
    familia: 'pintura', 
    descripcion: 'Encargo en acuarela y lápices de colores',
    imagen: '/trabajos/Pintura6.jpg',
    imagenesExtra: ['/trabajos/Pintura6.2.jpg', '/trabajos/Pintura6.3.jpg']  
  }
]