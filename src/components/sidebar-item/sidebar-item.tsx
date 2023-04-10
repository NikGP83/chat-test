import { ChatMessage } from '../../types/types';
import Avatar from '../avatar/avatar';
import './sidebar-item.scss';


function SidebarItem({user, message, created_at, is_new}:ChatMessage) {
  return (
    <>
    <div className='sidebar-item'>
      <div className='sidebar-item-avatar'>
        <Avatar {...user}/>
      </div>
      <div className='sidebar-item-info'>
        <div className='sidebar-user-info'>
          <strong>{user.name}</strong>
          <span>
            {created_at}
          </span>
        </div>
        <div className='sidebar-users-dialog'>
            <p className='sidebar-text cut-text'>{message}</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default SidebarItem;
