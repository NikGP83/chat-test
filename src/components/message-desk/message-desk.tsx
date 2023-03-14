import Header from '../header/header';
import Message from '../message/message';
import PostForm from '../post-form/post-form';
import './message-desk.scss';

const mockData = [
  {
    id: '1',
    message: 'blah blah blah blah blah blah',
    created_at: '21:21',
    name: 'Diane',
    surname: 'Russel',
    avatar: '',
    my: true,
    main: true,
  },
  {
    id: '12',
    message: 'some text from some men',
    created_at: '21:31',
    name: 'Liam',
    surname: 'Russel',
    avatar: '',
    my: false,
    main: false,
  },
  {
    id: '1',
    message: 'blah blah blah blah blah blah',
    created_at: '21:21',
    name: 'Diane',
    surname: 'Russel',
    avatar: '',
    my: true,
    main: true,
  },
  {
    id: '12',
    message: 'some text from some men',
    created_at: '21:31',
    name: 'Liam',
    surname: 'Russel',
    avatar: '',
    my: false,
    main: false,
  },
  {
    id: '1',
    message: 'blah blah blah blah blah blah',
    created_at: '21:21',
    name: 'Diane',
    surname: 'Russel',
    avatar: '',
    my: true,
    main: true,
  },
  {
    id: '12',
    message: 'some text from some men',
    created_at: '21:31',
    name: 'Liam',
    surname: 'Russel',
    avatar: '',
    my: false,
    main: false,
  },
  {
    id: '1',
    message: 'blah blah blah blah blah blah',
    created_at: '21:21',
    name: 'Diane',
    surname: 'Russel',
    avatar: '',
    my: true,
    main: true,
  },
  {
    id: '12',
    message: 'some text from some men',
    created_at: '21:31',
    name: 'Liam',
    surname: 'Russel',
    avatar: '',
    my: false,
    main: false,
  },
];

function MessageDesk() {
  return (
    <>
      <div className='message-desk-wrapper'>
        <Header chatHeaderTitle='Great Project' />
 <div className="message-desk">

          {mockData.map((userMessage) => (
            <div
            key={userMessage.message}
            className={`message-item ${
              !userMessage.my && `incoming-message-position`
            }`}
            >
              <Message {...userMessage} />
            </div>
          ))}
          </div>
        <PostForm />
      </div>
    </>
  );
}

export default MessageDesk;
