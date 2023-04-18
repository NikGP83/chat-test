import { useState } from 'react';
import './post-form.scss';

interface PostFormProps {
  chatId: string | undefined;
  userMsg: (msg: object) => void;
}

interface PostFormUserMsg {
  id: string | undefined;
  created_at: number;
  message: string;
  you: boolean;
}

function PostForm({ chatId, userMsg }: PostFormProps) {
 
  const [userMessage, setUserMessage] = useState<PostFormUserMsg>({
    id: '0',
    created_at: 0,
    message: '',
    you: false,
  });
  console.log(userMessage)
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
  };
  const submitHandler = (e: React.FormEvent): void => {
    e.preventDefault();
    
  }

  return (
    <div className='post-form-wrapper'>
      <form>
        <input value={userMessage.message} onChange={e => setUserMessage({...userMessage, id: chatId, created_at: 2, message: e.target.value, you: true})} placeholder='Type message' type='text' className='chat-input' />
        {/* <Input placeholder='Type message' type='text' /> */}
        <input id='upload-file' type='file' className='visually-hidden' />
        <button onClick={submitHandler} className='post-form-button'>
          <span className='visually-hidden'>Отправить</span>
        </button>
      </form>
    </div>
  );
}

export default PostForm;
