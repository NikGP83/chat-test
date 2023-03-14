import Avatar from '../avatar/avatar';
import readedIcon from '../../assets/img/vector.png';
import './message.scss';

const avatarMock = {
  src: '',
};

interface MessageProps {
  id?: string;
  message: string;
  created_at: string;
  name?: string;
  surname?: string;
  avatar?: string;
  my: boolean;
  main: boolean;
}

function Message({
  id,
  message,
  created_at,
  name,
  surname,
  avatar,
  my,
  main,
}: MessageProps) {
  return (
    <div className='message-wrapper'>
      <div>

      {!my && (
        <>
          <div className='message-avatar'>
            <Avatar {...avatarMock} />
          </div>
          <div className='users-block'>
            <span className='user-name'>{name}</span>
            <span className='user-surname'>{surname}</span>
          </div>
        </>
      )}
      <div className='message-content'>
        <div className={`message-bubble ${my && `your-message`}`}>
          <p className='message-text'>{message}</p>
          <div className='message-time'>{created_at}</div>
          {my && (
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
