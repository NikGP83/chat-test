import { useGetChatDataQuery, useGetSidebarDialogMsgDataQuery } from '../../api/chat/chat-serivces';
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
];

function MessageDesk() {
  const sidebarDialogeMsgData = useGetSidebarDialogMsgDataQuery('/message.get?chat_id=4961bbba-9b9e-4523-ab2a-ecfeeb7a4913&offset=0&limit=20');
  const chatData = useGetChatDataQuery('/chat.get')
  

  console.log('chatMessageArr:', sidebarDialogeMsgData.data)
  console.log('msgs:', chatData.data)


  if (typeof chatData !== 'undefined') {
    return (
      <>
        <div className='message-desk-wrapper'>
          <Header chatHeaderTitle='Great Project' />
          <div className='message-desk'>
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
}

export default MessageDesk;
