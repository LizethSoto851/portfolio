export interface Trabajo {
  id: number
  titulo: string
  familia: string
}

export const trabajos: Trabajo[] = [
  { id: 1, titulo: 'Cartel Festival', familia: 'diseno' },
  { id: 2, titulo: 'Logo Cafetería', familia: 'diseno' },
  { id: 3, titulo: 'Personaje Dragón', familia: 'ilustracion' },
  { id: 4, titulo: 'Animación Logo', familia: 'animacion' }
]