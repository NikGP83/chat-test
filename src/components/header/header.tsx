import headerIcon from '../../assets/img/header-icon.png';
import './header.scss';

interface HeaderProps {
  chatHeaderTitle: string;
}

function Header(chatHeaderTitle: HeaderProps) {
  return (
    <header className='chat-header'>
      <div className='chat-header-icon'>
        <img src={headerIcon} alt='header icon' />
      </div>
      <div className='chat-header-text'>Great Project</div>
    </header>
  );
}

export default Header;
