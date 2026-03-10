

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
    familia: 'diseno', 
    descripcion: 'holi',
    imagen: '/trabajos/Diseno1.jpg'
  },
  { 
    id: 2, 
    titulo: 'In Soul Diseño de juego de mesa', 
    familia: 'diseno', 
    descripcion: 'holi',
    imagen: '/trabajos/Diseno2.jpg',
    imagenesExtra: ['/trabajos/Diseno2.2.jpg']  
  },
  { 
    id: 3, 
    titulo: 'Pereza Pecado capital', 
    familia: 'diseno', 
    descripcion: 'holi',
    imagen: '/trabajos/Diseno3.jpg' 
  },{ 
    id: 4, 
    titulo: '36 days of type', 
    familia: 'diseno', 
    descripcion: 'holi',
    imagen: '/trabajos/Diseno4.jpg',
    imagenesExtra: ['/trabajos/Diseno4.3.jpg']  
  },{ 
    id: 5, 
    titulo: 'Cunty Perry ilustración de Magdalenita', 
    familia: 'ilustracion', 
    descripcion: 'holi',
    imagen: '/trabajos/Ilustracion1.jpg',
    imagenesExtra: ['/trabajos/Ilustracion1.2.jpg']  
  },{ 
    id: 6, 
    titulo: 'El jardín secreto', 
    familia: 'ilustracion', 
    descripcion: 'holi',
    imagen: '/trabajos/Ilustracion2.jpg',
    imagenesExtra: ['/trabajos/Ilustracion2.2.jpg']
  },{ 
    id: 7, 
    titulo: 'Animación comparte tu color', 
    familia: 'ilustracion', 
    descripcion: 'holi',
    imagen: '/trabajos/Ilustracion3.jpg' 
  },{ 
    id: 8, 
    titulo: 'Mi primera borrachera', 
    familia: 'ilustracion', 
    descripcion: 'holi',
    imagen: '/trabajos/Ilustracion4.jpg',
    imagenesExtra: ['/trabajos/Ilustracion4.2.jpg']  
  },{ 
    id: 9, 
    titulo: 'Ojillos saltones', 
    familia: 'ilustracion', 
    descripcion: 'holi',
    imagen: '/trabajos/Ilustracion5.jpg',
    imagenesExtra: ['/trabajos/Ilustracion5.2.jpg']  
  },{ 
    id: 10, 
    titulo: 'Ilustración de Jungwon (Enhypen)', 
    familia: 'ilustracion', 
    descripcion: 'holi',
    imagen: '/trabajos/Ilustracion6.jpg' 
  },{ 
    id: 11, 
    titulo: 'Homenaje So Youn Lee', 
    familia: 'pintura', 
    descripcion: 'holi',
    imagen: '/trabajos/Pintura1.jpg',
    imagenesExtra: ['/trabajos/Pintura1.2.jpg']  
  },{ 
    id: 12, 
    titulo: 'Retrato perros con fondo', 
    familia: 'pintura', 
    descripcion: 'holi',
    imagen: '/trabajos/Pintura2.jpg' 
  },{ 
    id: 13, 
    titulo: 'Mural encargo', 
    familia: 'pintura', 
    descripcion: 'holi',
    imagen: '/trabajos/Pintura3.jpg' 
  },{ 
    id: 14, 
    titulo: 'Retrato persona sin fondo', 
    familia: 'pintura', 
    descripcion: 'holi',
    imagen: '/trabajos/Pintura4.jpg' 
  },{ 
    id: 15, 
    titulo: 'Retrato perros sin fondo', 
    familia: 'pintura', 
    descripcion: 'holi',
    imagen: '/trabajos/Pintura6.jpg',
    imagenesExtra: ['/trabajos/Pintura6.2.jpg']  
  }
]