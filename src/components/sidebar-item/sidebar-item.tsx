import { ChatMessage } from '../../types/types';
import { getTime } from '../../utils/utils';
import Avatar from '../avatar/avatar';
import './sidebar-item.scss';

interface SideBarItemProps {
  props: ChatMessage,
  idHandler: void;
}


function SidebarItem({props, idHandler}:SideBarItemProps) {
  const {user, created_at, message, id} = props;

  const setNewId = (idCard) => {
    idHandler(idCard)
  }
  return (
    <>
    <div onClick={() => setNewId(id)} className='sidebar-item'>
      <div className='sidebar-item-avatar'>
        <Avatar {...user}/>
      </div>
      <div className='sidebar-item-info'>
        <div className='sidebar-user-info'>
          <strong>{user.name}</strong>
          <span>
            {getTime(created_at)}
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
