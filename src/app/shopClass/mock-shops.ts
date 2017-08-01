import { Shop } from './shop';

export const SHOPS: Shop[] = [
  { 
    id: 1,
    name: 'Spiners for beginners',
    address: 'Suharevskaya str, 10',
    days: [true, true, true, true, true, true, false],
    startTime: '8:00', 
    endTime: '20:00',
    latitude: 50.678418,
    longitude: 7.009007
  },
  { 
    id: 2,
    name: 'Fresh vegetable tea',
    address: 'Zybickaya str, 28',
    days: [true, true, true, true, true, true, true],
    startTime: '14:00',
    endTime: '24:00',
    latitude: 49.98418,
    longitude: 6.98007
  },
  { 
    id: 3,
    name: 'Best perforators for your neighbors',
    address: 'Mashinostroitelej str, 20',
    days: [false, false, false, false, false, true, true],
    startTime: '6:00',
    endTime: '12:00',
    latitude: 50.008418,
    longitude: 7.999007
  },
  { 
    id: 4,
    name: 'Camping - vodka && rybalka',
    address: 'Yankovskogo str, 17',
    days: [true, true, true, true, true, false, false],
    startTime: '9:00',
    endTime: '21:00',
    latitude: 50.778418,
    longitude: 7.509007
  },
  { 
    id: 5,
    name: 'Autohous - did not crash, did not colored',
    address: 'Skripnikova, 2',
    days: [false, true, true, true, true, true, true],
    startTime: '8:00',
    endTime: '20:00',
    latitude: 50.578418,
    longitude: 7.009007
  },
  { 
    id: 6,
    name: 'Bicycles: I dont know drive rules but I wanna go hightway',
    address: 'Suharevskaya str, 10',
    days: [true, true, true, true, true, true, false],
    startTime: '8:00',
    endTime: '20:00',
    latitude: 50.928418,
    longitude: 7.809007
  },
  { 
    id: 7,
    name: 'Macbooks: make your apple worm happy',
    address: 'Sharangovicha str, 8',
    days: [true, true, true, true, true, true, false],
    startTime: '8:00',
    endTime: '20:00',
    latitude: 50.278418,
    longitude: 7.169007
  }
];