export default {
  name: 'Augusto Moita',
  photo: 'perfil.jpg',
  personalInfo: {
    dni: '38.553.444',
    birthday: new Date(1994, 9 - 1, 6),
    civilStatus: 'Soltero'
  },
  contact: {
    location: 'La Plata, Argentina',
    email: 'a94moita@outlook.com',
    phone: '2216712233',
    github: 'agusmoita'
  },
  studies: [
    {
      degree: 'Bachiller en Cs. Sociales',
      place: 'Colegio Manantiales - Año 2012'
    },
    {
      degree: 'Analista Programador Universitario',
      place: 'Facultad de Informática, U.N.L.P.',
      description: 'Cursando actualmente'
    },
    {
      degree: 'Cursos online',
      place: 'Platzi.com',
      description: 'Ver perfil en platzi.com/@agusmoita'
    }
  ],
  experience: [
    {
      period: 'Feb 2015 - actualidad',
      place: 'Ministerio de Salud de la Provincia de Buenos Aires',
      position: 'Desarrollador Web Symfony',
      description: 'Utilizando Symfony 3, Bootstrap, jQuery, HTML5 y bases de datos Oracle, PostgreSql y MySql'
    }
  ],
  skills: [
    'Symfony', 'Javascript', 'HTML5',
    'PHP', 'jQuery', 'CSS3',
    'SQL', 'Node.js', 'Bootstrap',
    'Linux', 'Vue.js', 'Python',
    'Git y Svn', 'React', 'Armado PC',
    'Java', 'Arduino', 'Android'
  ],
  languages: [
    {
      language: 'Inglés',
      level: 'Nivel Intermedio Superior',
      description: 'Egresado de la Escuela de Lenguas de la U.N.L.P - Año 2013'
    }
  ]
}
