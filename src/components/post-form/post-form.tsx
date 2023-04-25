import { useState } from 'react';
import './post-form.scss';
import { PostFormMessage } from '../../types/types';
import { useAddMessageMutation } from '../../api/chat/chat-services';

interface PostFormProps {
  chatId: string | undefined;
}

const initialFormData = {
  id: '',
  dialog: '',
  created_at: 0,
  user: {
    you: false,
  },
  message: '',
};

function PostForm({ chatId }: PostFormProps) {
  const [userMessage, setUserMessage] =
    useState<PostFormMessage>(initialFormData);
  const [addMessage] = useAddMessageMutation();

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const newMessage = { ...userMessage, created_at: Date.now() };
    try {
      await addMessage(newMessage as PostFormMessage).unwrap();
    } catch (error) {
      console.log(error);
    }

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
              id: Date.now().toString(),
              dialog: chatId,
              created_at: Date.now(),
              user: {
                you: true,
              },
              message: e.target.value,
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
