if(process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: './.env.development' });
}

export default function simpleTestSun(n1: number, n2: number): number {
  return n1 + n2;
}