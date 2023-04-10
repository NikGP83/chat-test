import Avatar from '../avatar/avatar';
import readedIcon from '../../assets/img/vector.png';
import './message.scss';
import { ChatMessage } from '../../types/types';



function Message({user, created_at, message}: ChatMessage) {

  const {name, surname, you} = user;
  return (
    <div className='message-wrapper'>
      <div>

      {!you && (
        <>
          <div className='message-avatar'>
            <Avatar {...user} />
          </div>
          <div className='users-block'>
            <span className='user-name'>{name}</span>
            <span className='user-surname'>{surname}</span>
          </div>
        </>
      )}
      <div className='message-content'>
        <div className={`message-bubble ${you && `your-message`}`}>
          <p className='message-text'>{message}</p>
          <div className='message-time'>{created_at}</div>
          {you && (
            <div className='message-readed'>
              <img src={readedIcon} alt='icon readed' />
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
