import { useGetChatDataQuery } from '../../api/chat/chat-services';
import Header from '../header/header';
import Message from '../message/message';
import PostForm from '../post-form/post-form';
import './message-desk.scss';


function MessageDesk({chatId}) {
  const {data} = useGetChatDataQuery(chatId);
  console.log(chatId,data)

  if (typeof data === 'undefined') {
    return null;
  }
    return (
      <>
        <div className='message-desk-wrapper'>
          <Header chatHeaderTitle='Great Project'/>
          <div className='message-desk'>
            {data.map((userMessage) => (
              <div
                key={userMessage.message}
                className={`message-item ${
                  !userMessage.user.you && `incoming-message-position`
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
