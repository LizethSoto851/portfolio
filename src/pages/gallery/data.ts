export interface Trabajo {
  id: number
  titulo: string
  familia: string
  imagen: string
}

export const trabajos: Trabajo[] = [
  { id: 1, titulo: 'Comparte tu color', familia: 'diseno', imagen: '/trabajos/diseno1.jpg' },
  { id: 2, titulo: 'In Soul Diseño de juego de mesa', familia: 'diseno', imagen: '/trabajos/diseno2.png' },
  { id: 3, titulo: 'Pereza Pecdo capital', familia: 'diseno', imagen: '/trabajos/diseno3.jpg' },
  { id: 4, titulo: '36 days of type', familia: 'diseno', imagen: '/trabajos/diseno4.jpg' },
  { id: 5, titulo: 'Cunty Perry ilustración de Magdalenita', familia: 'ilustracion', imagen: '/trabajos/ilustracion1.jpeg' },
  { id: 6, titulo: 'El jardín secreto', familia: 'ilustracion', imagen: '/trabajos/ilustracion2.png' },
  { id: 7, titulo: 'Animación comparte tu color', familia: 'ilustracion', imagen: '/trabajos/ilustracion3.mp4' },
  { id: 8, titulo: 'Mi primera borrachera', familia: 'ilustracion', imagen: '/trabajos/ilustracion4.jpg' },
  { id: 9, titulo: 'Ojillos saltones', familia: 'ilustracion', imagen: '/trabajos/ilustracion5.JPG' },
  { id: 10, titulo: 'Ilustración de Junwon (Enhypen)', familia: 'ilustracion', imagen: '/trabajos/ilustracion6.jpeg' },
  { id: 11, titulo: 'pink up', familia: 'ilustracion', imagen: '/trabajos/ilustracion7.JPG' },
  { id: 12, titulo: 'Homenaje So Youn Lee', familia: 'pintura', imagen: '/trabajos/pintura1.JPG' },
  { id: 13, titulo: 'Retrato perros con fondo', familia: 'pintura', imagen: '/trabajos/pintura2.jpg' },
  { id: 14, titulo: 'Mural encargo', familia: 'pintura', imagen: '/trabajos/pintura3.jpeg' },
  { id: 15, titulo: 'Retrato persona sin fondo', familia: 'pintura', imagen: '/trabajos/pintura4.jpg' },
  { id: 16, titulo: 'Retrato perros sin fondo', familia: 'pintura', imagen: '/trabajos/pintura6.jpeg' }
]