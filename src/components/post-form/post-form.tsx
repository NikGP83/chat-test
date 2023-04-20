import { useState } from 'react';
import './post-form.scss';
import { PostFormMessage } from '../../types/types';
import { useAddMessageMutation } from '../../api/chat/chat-services';

interface PostFormProps {
  chatId: string | undefined;
}

const initialFormData = {
  id: '',
  created_at: 0,
  message: '',
  you: false,
}

function PostForm({ chatId }: PostFormProps) {
  const [addMessage] = useAddMessageMutation();

  const [userMessage, setUserMessage] = useState<PostFormMessage>(initialFormData);

  const submitHandler = async(e: React.FormEvent) => {
    e.preventDefault();
    const newMessage = {...userMessage, created_at: Date.now()}

        await addMessage(newMessage as PostFormMessage).unwrap();


      setUserMessage(initialFormData);
  };

  return (
    <div className='post-form-wrapper'>
      <form>
        <input
          value={userMessage.message}
          onChange={(e) =>
            setUserMessage({
              ...userMessage,
              id: chatId,
              message: e.target.value,
              you: true,
            })
          }
          placeholder='Type message'
          type='text'
          className='chat-input'
        />
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
