export const site = {
  name: 'White City Decorating Contractors',
  shortName: 'White City',
  alternateName: 'White City Dec Con',
  url: 'https://www.whitecitydecorating.co.uk',
  description:
    'Painter and decorator in Sandy, Bedfordshire. Simon Hewitt paints walls, ceilings, woodwork and stairs, and sprays kitchen units.',
  phoneDisplay: '07903 197206',
  phoneTel: '+447903197206',
  email: 'simon-hewitt@hotmail.co.uk',
  painter: 'Simon Hewitt',
  address: {
    street: '4 Balmoral Close',
    locality: 'Sandy',
    region: 'Bedfordshire',
    postcode: 'SG19 1TL',
    country: 'GB',
  },
  geo: {
    latitude: 52.1375914,
    longitude: -0.2927594,
  },
  hours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '17:00', label: 'Monday to Friday, 8am to 5pm' },
    { days: ['Saturday'], opens: '08:00', closes: '12:30', label: 'Saturday, 8am to 12:30pm' },
    { days: ['Sunday'], opens: null, closes: null, label: 'Sunday, closed' },
  ],
  facebook: 'https://www.facebook.com/people/White-City-Dec-Con/61577021425785/',
  googleMaps:
    'https://www.google.com/maps/place/White+City+Decorating+Contractors/@52.0640128,-0.4230962,10z/data=!3m1!4b1!4m6!3m5!1s0xaeef748622a57903:0x2de3e89dfb534ae7!8m2!3d52.0640128!4d-0.4230962!16s%2Fg%2F11xf3ww9ls',
  category: 'Painter',
} as const;

export const towns = [
  { group: 'Around Sandy', places: ['Sandy', 'Beeston', 'Moggerhanger', 'Blunham', 'Tempsford', 'Everton', 'Northill', 'Old Warden', 'Southill'] },
  { group: 'East and north', places: ['Biggleswade', 'Potton', 'Gamlingay', 'Langford', 'Sutton', 'Wrestlingworth', 'St Neots', 'Eaton Socon', 'Eynesbury', 'Little Paxton'] },
  { group: 'Towards Bedford', places: ['Bedford', 'Kempston', 'Willington', 'Great Barford', 'Cople', 'Cardington', 'Shortstown'] },
  { group: 'South of Sandy', places: ['Shefford', 'Stotfold', 'Arlesey', 'Henlow', 'Clifton', 'Flitwick', 'Ampthill', 'Maulden', 'Clophill', 'Hitchin', 'Letchworth Garden City', 'Baldock'] },
] as const;

export const allTowns = towns.flatMap((group) => [...group.places]);
