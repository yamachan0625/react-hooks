//action = {
//   type: 'CREATE_EVENT',
//   title: '2020東京オリンピックのお知らせ',
//   body:  '2020年に東京オリンピックを開催します！'
// }
//#before
// state = [];
//#after = [
//   id:1,
//   title: '2020東京オリンピックのお知らせ',
//   body:  '2020年に東京オリンピックを開催します！'
// ]

// #before
// state = [
//   {
//     id: 1,
//     title: 'タイトル１',
//     body: 'ボディ１'
//   },
//   {
//     id: 2,
//     title: 'タイトル2',
//     body: 'ボディ2'
//   },
//   {
//     id: 3,
//     title: 'タイトル3',
//     body: 'ボディ3'
//   }
// ];
// #after
// state = [
//   {
//     id: 1,
//     title: 'タイトル１',
//     body: 'ボディ１'
//   },
//   {
//     id: 2,
//     title: 'タイトル2',
//     body: 'ボディ2'
//   },
//   {
//     id: 3,
//     title: 'タイトル3',
//     body: 'ボディ3'
//   },
//   {
//   id:4,
//   title: '2020東京オリンピックのお知らせ',
//   body:  '2020年に東京オリンピックを開催します！'
//   }
// ];

const events = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_EVENT':
      const event = { title: action.title, body: action.body };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      // { id : id, ...event }をショートハンドで書いている
      return [...state, { id, ...event }];

    case 'DELETE_EVENT':
      return state.filter(event => event.id !== action.id);

    case 'CDELETE_ALL_EVENT':
      return [];

    default:
      return state;
  }
};

export default events;
