// @todo replace with @wulke/cribbage-server/utils/card
import card2C from 'cardsJS/cards/2C.svg';
import card2H from 'cardsJS/cards/2H.svg';
import card2S from 'cardsJS/cards/2S.svg';
import card2D from 'cardsJS/cards/2D.svg';
import card3C from 'cardsJS/cards/3C.svg';
import card3H from 'cardsJS/cards/3H.svg';
import card3S from 'cardsJS/cards/3S.svg';
import card3D from 'cardsJS/cards/3D.svg';
import card4C from 'cardsJS/cards/4C.svg';
import card4H from 'cardsJS/cards/4H.svg';
import card4S from 'cardsJS/cards/4S.svg';
import card4D from 'cardsJS/cards/4D.svg';
import card5C from 'cardsJS/cards/5C.svg';
import card5H from 'cardsJS/cards/5H.svg';
import card5S from 'cardsJS/cards/5S.svg';
import card5D from 'cardsJS/cards/5D.svg';
import card6C from 'cardsJS/cards/6C.svg';
import card6H from 'cardsJS/cards/6H.svg';
import card6S from 'cardsJS/cards/6S.svg';
import card6D from 'cardsJS/cards/6D.svg';
import card7C from 'cardsJS/cards/7C.svg';
import card7H from 'cardsJS/cards/7H.svg';
import card7S from 'cardsJS/cards/7S.svg';
import card7D from 'cardsJS/cards/7D.svg';
import card8C from 'cardsJS/cards/8C.svg';
import card8H from 'cardsJS/cards/8H.svg';
import card8S from 'cardsJS/cards/8S.svg';
import card8D from 'cardsJS/cards/8D.svg';
import card9C from 'cardsJS/cards/9C.svg';
import card9H from 'cardsJS/cards/9H.svg';
import card9S from 'cardsJS/cards/9S.svg';
import card9D from 'cardsJS/cards/9D.svg';
import cardTC from 'cardsJS/cards/TC.svg';
import cardTH from 'cardsJS/cards/TH.svg';
import cardTS from 'cardsJS/cards/TS.svg';
import cardTD from 'cardsJS/cards/TD.svg';
import cardJC from 'cardsJS/cards/JC.svg';
import cardJH from 'cardsJS/cards/JH.svg';
import cardJS from 'cardsJS/cards/JS.svg';
import cardJD from 'cardsJS/cards/JD.svg';
import cardQC from 'cardsJS/cards/QC.svg';
import cardQH from 'cardsJS/cards/QH.svg';
import cardQS from 'cardsJS/cards/QS.svg';
import cardQD from 'cardsJS/cards/QD.svg';
import cardKC from 'cardsJS/cards/KC.svg';
import cardKH from 'cardsJS/cards/KH.svg';
import cardKS from 'cardsJS/cards/KS.svg';
import cardKD from 'cardsJS/cards/KD.svg';
import cardAC from 'cardsJS/cards/AC.svg';
import cardAH from 'cardsJS/cards/AH.svg';
import cardAS from 'cardsJS/cards/AS.svg';
import cardAD from 'cardsJS/cards/AD.svg';

const suits = ['C','H','S','D'];
const values = ['A','2','3','4','5','6','7','8','T','J','Q','K'];
const toRank = (card) => card % 13;
const toSuit = (card) => suits[Math.floor(card / 13)];
const toValue = (card) => values[toRank(card)];
const toString = (card) => `${toValue(card)}${toSuit(card)}`;
const SVGS = {
  '2C': card2C,
  '2H': card2H,
  '2S': card2S,
  '2D': card2D,
  '3C': card3C,
  '3H': card3H,
  '3S': card3S,
  '3D': card3D,
  '4C': card4C,
  '4H': card4H,
  '4S': card4S,
  '4D': card4D,
  '5C': card5C,
  '5H': card5H,
  '5S': card5S,
  '5D': card5D,
  '6C': card6C,
  '6H': card6H,
  '6S': card6S,
  '6D': card6D,
  '7C': card7C,
  '7H': card7H,
  '7S': card7S,
  '7D': card7D,
  '8C': card8C,
  '8H': card8H,
  '8S': card8S,
  '8D': card8D,
  '9C': card9C,
  '9H': card9H,
  '9S': card9S,
  '9D': card9D,
  'TC': cardTC,
  'TH': cardTH,
  'TS': cardTS,
  'TD': cardTD,
  'JC': cardJC,
  'JH': cardJH,
  'JS': cardJS,
  'JD': cardJD,
  'QC': cardQC,
  'QH': cardQH,
  'QS': cardQS,
  'QD': cardQD,
  'KC': cardKC,
  'KH': cardKH,
  'KS': cardKS,
  'KD': cardKD,
  'AC': cardAC,
  'AH': cardAH,
  'AS': cardAS,
  'AD': cardAD,
};

export {
  toRank,
  toSuit,
  toValue,
  toString,
  SVGS
};