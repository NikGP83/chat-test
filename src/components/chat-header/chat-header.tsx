import headerIcon from '../../assets/img/header-icon.png';
import './chat-header.scss';

interface HeaderProps {
  chatHeaderTitle: string;
}

function Header({chatHeaderTitle}: HeaderProps) {

  return (
    <header className='chat-header'>
      <div className='chat-header-wrapper'>
        <div className='chat-header-icon'>
          <img src={headerIcon} alt='header icon' />
        </div>
        <div className='chat-header-text'>{chatHeaderTitle}</div>
      </div>
    </header>
  );
}

export default Header;
