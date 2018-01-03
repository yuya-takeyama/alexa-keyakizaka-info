export interface Member {
  lastName: string;
  firstName: string;
  lastNameKana: string;
  firstNameKana: string;
  birthday: string;
  nicknames: Nickname[];
}

interface Nickname {
  name: string;
  kana: string;
}

const members: Member[] = [
  {
    lastName: '石森',
    firstName: '虹花',
    lastNameKana: 'いしもり',
    firstNameKana: 'にじか',
    birthday: '1997-05-07',
    nicknames: [],
  },
  {
    lastName: '今泉',
    firstName: '佑唯',
    lastNameKana: 'いまいずみ',
    firstNameKana: 'ゆい',
    birthday: '1998-09-30',
    nicknames: [
      {
        name: 'ずーみん',
        kana: 'ずーみん',
      },
      {
        name: 'ずみこ',
        kana: 'ずみこ',
      },
    ],
  },
  {
    lastName: '上村',
    firstName: '莉菜',
    lastNameKana: 'うえむら',
    firstNameKana: 'りな',
    birthday: '1997-01-04',
    nicknames: [],
  },
  {
    lastName: '尾関',
    firstName: '梨香',
    lastNameKana: 'おぜき',
    firstNameKana: 'りか',
    birthday: '1997-10-07',
    nicknames: [],
  },
  {
    lastName: '織田',
    firstName: '奈那',
    lastNameKana: 'おだ',
    firstNameKana: 'なな',
    birthday: '1998-06-04',
    nicknames: [
      {
        name: 'オダナナ',
        kana: 'おだなな',
      },
    ],
  },
  {
    lastName: '小池',
    firstName: '美波',
    lastNameKana: 'こいけ',
    firstNameKana: 'みなみ',
    birthday: '1998-11-14',
    nicknames: [
      {
        name: 'みーちゃん',
        kana: 'みーちゃん',
      },
    ],
  },
  {
    lastName: '小林',
    firstName: '由依',
    lastNameKana: 'こばやし',
    firstNameKana: 'ゆい',
    birthday: '1999-10-23',
    nicknames: [
      {
        name: 'ゆいぽん',
        kana: 'ゆいぽん',
      },
      {
        name: 'ぽん',
        kana: 'ぽん',
      },
    ],
  },
  {
    lastName: '齋藤',
    firstName: '冬優花',
    lastNameKana: 'さいとう',
    firstNameKana: 'ふゆか',
    birthday: '1998-02-15',
    nicknames: [
      {
        name: 'ふーちゃん',
        kana: 'ふーちゃん',
      },
    ],
  },
  {
    lastName: '佐藤',
    firstName: '詩織',
    lastNameKana: 'さとう',
    firstNameKana: 'しおり',
    birthday: '1996-11-16',
    nicknames: [
      {
        name: 'しーちゃん',
        kana: 'しーちゃん',
      },
      {
        name: 'さとし',
        kana: 'さとし',
      },
    ],
  },
  {
    lastName: '志田',
    firstName: '愛佳',
    lastNameKana: 'しだ',
    firstNameKana: 'まなか',
    birthday: '1998-11-23',
    nicknames: [
      {
        name: 'もな',
        kana: 'もな',
      },
      {
        name: 'しだぴっぴ',
        kana: 'しだぴっぴ',
      },
      {
        name: 'ぴっぴ',
        kana: 'ぴっぴ',
      },
      {
        name: 'クロエ',
        kana: 'くろえ',
      },
    ],
  },
  {
    lastName: '菅井',
    firstName: '友香',
    lastNameKana: 'すがい',
    firstNameKana: 'ゆうか',
    birthday: '1995-11-29',
    nicknames: [
      {
        name: 'ゆっかー',
        kana: 'ゆっかー',
      },
      {
        name: '菅井様',
        kana: 'すがいさま',
      },
    ],
  },
  {
    lastName: '鈴本',
    firstName: '美愉',
    lastNameKana: 'すずもと',
    firstNameKana: 'みゆ',
    birthday: '1997-12-05',
    nicknames: [
      {
        name: 'すずもん',
        kana: 'すずもん',
      },
      {
        name: 'もん',
        kana: 'もん',
      },
      {
        name: 'もんた',
        kana: 'もんた',
      },
      {
        name: '栗太郎',
        kana: 'くりたろう',
      },
    ],
  },
  {
    lastName: '長沢',
    firstName: '菜々香',
    lastNameKana: 'ながさわ',
    firstNameKana: 'ななこ',
    birthday: '1997-04-23',
    nicknames: [
      {
        name: 'なーこ',
        kana: 'なーこ',
      },
      {
        name: 'なーこ先生',
        kana: 'なーこせんせい',
      },
      {
        name: '長沢君',
        kana: 'ながさわくん',
      },
    ],
  },
  {
    lastName: '長濱',
    firstName: 'ねる',
    lastNameKana: 'ながはま',
    firstNameKana: 'ねる',
    birthday: '1998-09-04',
    nicknames: [
      {
        name: 'ねるそん',
        kana: 'ねるそん',
      },
    ],
  },
  {
    lastName: '土生',
    firstName: '瑞穗',
    lastNameKana: 'はぶ',
    firstNameKana: 'みづほ',
    birthday: '1997-07-07',
    nicknames: [
      {
        name: 'はぶちゃん',
        kana: 'はぶちゃん',
      },
    ],
  },
  {
    lastName: '原田',
    firstName: '葵',
    lastNameKana: 'はらだ',
    firstNameKana: 'あおい',
    birthday: '2000-05-07',
    nicknames: [
      {
        name: 'あおちゃん',
        kana: 'あおちゃん',
      },
      {
        name: 'あおたん',
        kana: 'あおたん',
      },
    ],
  },
  {
    lastName: '平手',
    firstName: '友梨奈',
    lastNameKana: 'ひらて',
    firstNameKana: 'ゆりな',
    birthday: '2001-06-25',
    nicknames: [
      {
        name: 'てち',
        kana: 'てち',
      },
      {
        name: 'てちこ',
        kana: 'てちこ',
      },
      {
        name: 'てっちゃん',
        kana: 'てっちゃん',
      },
      {
        name: '平手ちゃん',
        kana: 'ひらてちゃん',
      },
    ],
  },
  {
    lastName: '守屋',
    firstName: '茜',
    lastNameKana: 'もりや',
    firstNameKana: 'あかね',
    birthday: '1997-11-12',
    nicknames: [
      {
        name: 'あかねん',
        kana: 'あかねん',
      },
      {
        name: '軍曹',
        kana: 'ぐんそう',
      },
    ],
  },
  {
    lastName: '米谷',
    firstName: '奈々未',
    lastNameKana: 'よねたに',
    firstNameKana: 'ななみ',
    birthday: '2000-02-24',
    nicknames: [
      {
        name: 'よねさん',
        kana: 'よね',
      },
    ],
  },
  {
    lastName: '渡辺',
    firstName: '梨加',
    lastNameKana: 'わたなべ',
    firstNameKana: 'りか',
    birthday: '1995-05-16',
    nicknames: [
      {
        name: 'べりか',
        kana: 'べりか',
      },
      {
        name: 'ペーちゃん',
        kana: 'ペーちゃん',
      },
    ],
  },
  {
    lastName: '渡邉',
    firstName: '理佐',
    lastNameKana: 'わたなべ',
    firstNameKana: 'りさ',
    birthday: '1998-07-27',
    nicknames: [
      {
        name: 'べりさ',
        kana: 'べりさ',
      },
    ],
  },
  {
    lastName: '井口',
    firstName: '眞緒',
    lastNameKana: 'いぐち',
    firstNameKana: 'まお',
    birthday: '1995-11-10',
    nicknames: [],
  },
  {
    lastName: '潮',
    firstName: '紗理菜',
    lastNameKana: 'うしお',
    firstNameKana: 'さりな',
    birthday: '1997-12-26',
    nicknames: [],
  },
  {
    lastName: '柿崎',
    firstName: '芽実',
    lastNameKana: 'かきざき',
    firstNameKana: 'めみ',
    birthday: '2001-12-02',
    nicknames: [],
  },
  {
    lastName: '影山',
    firstName: '優佳',
    lastNameKana: 'かげやま',
    firstNameKana: 'ゆうか',
    birthday: '2001-05-08',
    nicknames: [],
  },
  {
    lastName: '加藤',
    firstName: '史帆',
    lastNameKana: 'かとう',
    firstNameKana: 'しほ',
    birthday: '1998-02-02',
    nicknames: [],
  },
  {
    lastName: '金村',
    firstName: '美玖',
    lastNameKana: 'かねむら',
    firstNameKana: 'みく',
    birthday: '2002-09-10',
    nicknames: [],
  },
  {
    lastName: '河田',
    firstName: '陽菜',
    lastNameKana: 'かわた',
    firstNameKana: 'ひな',
    birthday: '2001-07-23',
    nicknames: [],
  },
  {
    lastName: '小坂',
    firstName: '菜緒',
    lastNameKana: 'こさか',
    firstNameKana: 'なお',
    birthday: '2002-09-07',
    nicknames: [],
  },
  {
    lastName: '齊藤',
    firstName: '京子',
    lastNameKana: 'さいとう',
    firstNameKana: 'きょうこ',
    birthday: '1997-09-05',
    nicknames: [
      {
        name: 'きょんこ',
        kana: 'きょんこ',
      },
    ],
  },
  {
    lastName: '佐々木',
    firstName: '久美',
    lastNameKana: 'ささき',
    firstNameKana: 'くみ',
    birthday: '1996-01-22',
    nicknames: [],
  },
  {
    lastName: '佐々木',
    firstName: '美玲',
    lastNameKana: 'ささき',
    firstNameKana: 'みれい',
    birthday: '1999-12-17',
    nicknames: [],
  },
  {
    lastName: '高瀬',
    firstName: '愛奈',
    lastNameKana: 'たかせ',
    firstNameKana: 'まな',
    birthday: '1998-09-20',
    nicknames: [],
  },
  {
    lastName: '高本',
    firstName: '彩花',
    lastNameKana: 'たかもと',
    firstNameKana: 'あやか',
    birthday: '1998-11-02',
    nicknames: [],
  },
  {
    lastName: '富田',
    firstName: '鈴花',
    lastNameKana: 'とみた',
    firstNameKana: 'すずか',
    birthday: '2001-01-18',
    nicknames: [],
  },
  {
    lastName: '丹生',
    firstName: '明里',
    lastNameKana: 'にぶ',
    firstNameKana: 'あかり',
    birthday: '2001-02-15',
    nicknames: [],
  },
  {
    lastName: '濱岸',
    firstName: 'ひより',
    lastNameKana: 'はまぎし',
    firstNameKana: 'ひより',
    birthday: '2002-09-28',
    nicknames: [],
  },
  {
    lastName: '東村',
    firstName: '芽依',
    lastNameKana: 'ひがしむら',
    firstNameKana: 'めい',
    birthday: '1998-08-23',
    nicknames: [],
  },
  {
    lastName: '松田',
    firstName: '好花',
    lastNameKana: 'まつだ',
    firstNameKana: 'このか',
    birthday: '1999-04-27',
    nicknames: [],
  },
  {
    lastName: '宮田',
    firstName: '愛萌',
    lastNameKana: 'みやた',
    firstNameKana: 'まなも',
    birthday: '1998-04-28',
    nicknames: [],
  },
  {
    lastName: '渡邉',
    firstName: '美穂',
    lastNameKana: 'わたなべ',
    firstNameKana: 'みほ',
    birthday: '2000-02-24',
    nicknames: [
      {
        name: 'べみほ',
        kana: 'べみほ',
      },
    ],
  },
];

export default members;
