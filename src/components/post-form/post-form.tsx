import Input from '../input/input';
import './post-form.scss';

interface PostFormProps {
  chatId: string | undefined;
}

function PostForm({chatId}:PostFormProps) {
  console.log(chatId)
  return (
    <div className='post-form-wrapper'>
      <form method='post'>
        <Input placeholder='Type message' type='text' />
        <input id='upload-file' type='file' className='visually-hidden'/>
        <button className='post-form-button'>
          <span className='visually-hidden'>Отправить</span>
        </button>
      </form>
    </div>
  );
}

export default PostForm;
