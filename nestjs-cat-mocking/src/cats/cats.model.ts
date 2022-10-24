/**
 * test 용 데이터
 * 실제 소프트웨어에서는 데이터를 몽고DB나 mySQL 같은 디비 사용
 * express 디자인 패턴 보려고 메모리에 존재하는 로컬 데이터 사용
 * */

export type CatType = {
  id: string;
  name: string;
  age: number;
  species: string;
  isCute: boolean;
  friends: string[];
};

export const Cat: CatType[] = [
  {
    id: 'fsduifh',
    name: 'blue',
    age: 8,
    species: 'Russian Blue',
    isCute: true,
    friends: ['asdfhj29009', 'WE09tju2j'],
  },

  {
    id: 'iohf2309q4hr',
    name: 'som',
    age: 4,
    species: 'Sphynx cat',
    isCute: true,
    friends: ['weju0fj20qj', 'asdfhj29009', 'weju0fj20qj'],
  },
  {
    id: 'WE09tju2j',
    name: 'lean',
    age: 6,
    species: 'Munchkin',
    isCute: false,
    friends: [],
  },
  {
    id: 'asdfhj29009',
    name: 'star',
    age: 10,
    species: 'Scottish Fold',
    isCute: true,
    friends: ['weju0fj20qj'],
  },

  {
    id: 'weju0fj20qj',
    name: 'red',
    age: 2,
    species: 'Sharm',
    isCute: false,
    friends: [],
  },
];
