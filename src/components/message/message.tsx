import Avatar from '../avatar/avatar';
import readedIcon from '../../assets/img/vector.png';
import './message.scss';
import { ChatMessage } from '../../types/types';
import { getTime } from '../../utils/utils';

function Message({ user, created_at, message }: ChatMessage) {
  const { name, surname, you } = user;

  return (
    <div className='message-wrapper'>
      <div>
        {!you && (
          <>
            <div className='users-block'>
              <div className='message-avatar-wrapper'>
                <Avatar {...user} size='sm' />
              </div>
              <div className='user-message-block'>
                <span className='user-name'>{name}</span>
                <span className='user-surname'>{surname}</span>
              </div>
            </div>
          </>
        )}
        <div className={`message-bubble ${!you && `message-partner-bubble`} `}>
          <span className='message-text'>
            {message}
            <div className={`messages-attributes ${!you && `without-check-icon`}`}>
              <div className='message-time'>{getTime(created_at)}</div>
              {you && (
                <div className='message-readed'>
                  <img src={readedIcon} alt='icon readed' />
                </div>
              )}
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Message;
