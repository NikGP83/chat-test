import { ChatMessage } from '../../types/types';
import { getTime } from '../../utils/utils';
import Avatar from '../avatar/avatar';
import './sidebar-item.scss';

interface SideBarItemProps {
  props: ChatMessage;
  idHandler: (id: string) => void;
}


function SidebarItem({props, idHandler}:SideBarItemProps) {
  const {user, created_at, message, id} = props;
  const setNewId = (idCard: string) => {
    idHandler(idCard)
  }
  return (
    <>
    <div onClick={() => setNewId(id)} className='sidebar-item'>
      <div className='sidebar-item-avatar'>
        <Avatar {...user} size={'md'}/>
      </div>
      <div className='sidebar-info-block'>
        <div className='user-info'>
          <span className='user-name'>{user.name}</span>
          <span className='created-at'>
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
