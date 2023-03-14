import Avatar from '../avatar/avatar';
import './sidebar-item.scss';

interface SidebarProps {
    user: object;
    message: string;
}
// { user, message }: SidebarProps

function SidebarItem() {
  return (
    <>
    <div className='sidebar-item'>
      <div className='sidebar-item-avatar'>
        <Avatar />
      </div>
      <div className='sidebar-item-info'>
        <div className='sidebar-user-info'>
          <strong>Имя Фамилия</strong>
          <span>
            {new Date().toLocaleTimeString()}
          </span>
        </div>
        <div className='sidebar-users-dialog'>
            <p className='sidebar-text cut-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae sequi vero maiores autem dolore voluptatem placeat tenetur, quasi debitis laudantium ullam temporibus assumenda dicta totam reprehenderit asperiores similique ab minus.</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default SidebarItem;
