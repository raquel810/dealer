export interface DoorStyle {
  name: string;
  doorImage: string | null;
  profileImage: string;
  lines: ('harris' | 'hinge' | 'hingepro')[];
}

export const doorStyles: DoorStyle[] = [
  {
    name: 'Sanders',
    doorImage: '/images/sanders_hc-door.jpg',
    profileImage: '/images/sanders_profile.png',
    lines: ['harris', 'hinge'],
  },
  {
    name: 'Duncan',
    doorImage: '/images/duncan_hc-door.jpg',
    profileImage: '/images/duncan_profile.png',
    lines: ['harris', 'hinge', 'hingepro'],
  },
  {
    name: 'James',
    doorImage: '/images/james_hc-door.jpg',
    profileImage: '/images/james_profile.png',
    lines: ['harris', 'hinge'],
  },
  {
    name: 'Payton',
    doorImage: '/images/payton_hc-door.jpg',
    profileImage: '/images/payton_profile.png',
    lines: ['harris', 'hinge'],
  },
  {
    name: 'Taylor',
    doorImage: '/images/taylor_hc-door.jpg',
    profileImage: '/images/taylor_profile.png',
    lines: ['harris', 'hinge'],
  },
  {
    name: 'Jordan',
    doorImage: '/images/jordan_hc-door.jpg',
    profileImage: '/images/jordan_profile.png',
    lines: ['harris', 'hinge'],
  },
  {
    name: 'Bryant',
    doorImage: '/images/bryant_hc-door.jpg',
    profileImage: '/images/bryant_profile.png',
    lines: ['harris', 'hinge'],
  },
  {
    name: 'Russell',
    doorImage: '/images/russell_hc-door.jpg',
    profileImage: '/images/russell_profile.png',
    lines: ['harris', 'hinge'],
  },
  {
    name: 'Erving',
    doorImage: '/images/erving_hc-door.jpg',
    profileImage: '/images/erving_profile.png',
    lines: ['harris', 'hinge'],
  },
  {
    name: 'Iverson',
    doorImage: '/images/iverson_hc-door.jpg',
    profileImage: '/images/iverson_profile.png',
    lines: ['harris', 'hinge'],
  },
  {
    name: 'Malone',
    doorImage: null,
    profileImage: '/images/malone.png',
    lines: ['harris'],
  },
  {
    name: 'Barkley',
    doorImage: null,
    profileImage: '/images/barkley.png',
    lines: ['harris'],
  },
];

export interface StainFinish {
  name: string;
  image: string;
  lines: ('harris' | 'hinge' | 'hingepro')[];
}

export const stainFinishes: StainFinish[] = [
  { name: 'Oat', image: '/images/oat_hc-stain.jpg', lines: ['harris', 'hinge'] },
  { name: 'Honey', image: '/images/honey_hc-stain.jpg', lines: ['harris', 'hinge'] },
  { name: 'Fawn', image: '/images/fawn_hc-stain.jpg', lines: ['harris', 'hinge'] },
  { name: 'Rye', image: '/images/rye_hc-stain.jpg', lines: ['harris', 'hinge'] },
  { name: 'Reed', image: '/images/reed_hc-stain.jpg', lines: ['harris', 'hinge'] },
  { name: 'Cask', image: '/images/cask_hc-stain.jpg', lines: ['harris', 'hinge'] },
  { name: 'Alcove', image: '/images/alcove_hc-stain.jpg', lines: ['harris', 'hinge'] },
  { name: 'Pumice', image: '/images/pumice_hc-stain.jpg', lines: ['harris', 'hinge'] },
  { name: 'Shale', image: '/images/shale_hc-stain.jpg', lines: ['harris', 'hinge'] },
  { name: 'Graphite', image: '/images/graphite_hc-stain.jpg', lines: ['harris', 'hinge'] },
  { name: 'Port', image: '/images/port_hc-stain.jpg', lines: ['harris', 'hinge'] },
];

export interface ProjectGallery {
  brand: string;
  brandId: 'harris' | 'hinge' | 'hingepro';
  project: string;
  doorStyle: string;
  photos: string[];
}

export const projectGalleries: ProjectGallery[] = [
  {
    brand: 'HINGE',
    brandId: 'hinge',
    project: 'Iverson Kitchen',
    doorStyle: 'Iverson',
    photos: [
      '/images/hingecustom-iverson_photo_0.jpg',
      '/images/hingecustom-iverson_photo_1.jpg',
      '/images/hingecustom-iverson_photo_2.jpg',
      '/images/hingecustom-iverson_photo_3.jpg',
      '/images/hingecustom-iverson_photo_4.jpg',
      '/images/hingecustom-iverson_photo_5.jpg',
      '/images/hingecustom-iverson_photo_6.jpg',
      '/images/hingecustom-iverson_photo_7.jpg',
    ],
  },
];
