export type Service = {
  slug: string;
  title: string;
  nav: string;
  summary: string;
  description: string;
  photoId: string;
};

export const services: Service[] = [
  {
    slug: 'interior-painting',
    title: 'Interior painting',
    nav: 'Interior painting',
    summary: 'Walls, ceilings and woodwork, including new plaster.',
    description:
      'Simon paints rooms so the lines are straight and the colour is even. That covers walls, ceilings, skirting, doors and window boards. If the plaster is new, he prepares it before the finish coats go on.',
    photoId: '05',
  },
  {
    slug: 'kitchen-spraying',
    title: 'Kitchen spraying',
    nav: 'Kitchen spraying',
    summary: 'Units sprayed a new colour, with a smooth finish.',
    description:
      'A tired kitchen can take a new colour without a full refit. Simon sprays doors, drawers and frames. Customers use him for this because the finish stays smooth, and he puts the room back so it can be used.',
    photoId: '03',
  },
  {
    slug: 'woodwork-and-stairs',
    title: 'Woodwork and stairs',
    nav: 'Woodwork and stairs',
    summary: 'Doors, banisters, spindles and skirting, prepared properly.',
    description:
      'Stairs and doors show every mark. Simon scrapes loose paint, fills where it is needed, and coats the wood so the colour sits flat. Banisters, spindles, handrails and panelled doors are a regular part of the work.',
    photoId: '01',
  },
  {
    slug: 'wallpapering',
    title: 'Wallpapering',
    nav: 'Wallpapering',
    summary: 'Paper hung straight, including awkward rooms.',
    description:
      'Simon hangs wallpaper as well as paint. That includes rooms where the walls are uneven or the paper is hard to match. He also strips old paper when that is the right start.',
    photoId: '15',
  },
  {
    slug: 'exterior-painting',
    title: 'Exterior painting',
    nav: 'Exterior painting',
    summary: 'Outside doors, sheds and timber, when the weather allows.',
    description:
      'Most of the work is indoors. Simon also paints outside woodwork: doors, sheds and fascias. He will say if the weather or the timber means the job should wait.',
    photoId: '14',
  },
];
