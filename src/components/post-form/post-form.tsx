import { useState } from 'react';
import './post-form.scss';
import { PostFormMessage } from '../../types/types';
import { useAddMessageMutation } from '../../api/chat/chat-services';

interface PostFormProps {
  chatId: string | undefined;
}


function PostForm({ chatId }: PostFormProps) {
  const [addMessage] = useAddMessageMutation();
  const [userMessage, setUserMessage] = useState<PostFormMessage>({
    id: '0',
    created_at: 0,
  message: '',
    you: false,
  });

  
  const submitHandler = (e: React.FormEvent): void => {
    e.preventDefault();
    addMessage(userMessage)
  }


  return (
    <div className='post-form-wrapper'>
      <form>
        <input value={userMessage.message} onChange={e => setUserMessage({...userMessage, id: chatId, created_at: 0, message: e.target.value, you: true})} placeholder='Type message' type='text' className='chat-input' />
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
