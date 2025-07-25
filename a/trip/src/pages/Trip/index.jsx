import {
    useEffect,
    useState
} from 'react';
import {
    Button,
    Input,
    Loading,
    Toast
} from 'react-vant'

import useTitle from '@/hooks/useTitle'
import {
    chat
} from '@/llm/index'
import styles from './trip.module.css';
import { 
  ChatO, 
  UserO 
} from '@react-vant/icons';

const Trip = () => {
    useTitle('旅游智能客服')
    const [text, setText] = useState("");
    const [isSending, setIsSending] = useState(false);
    // 数据驱动界面
    // 静态界面
    const [messages, setMessages] = useState([
      {
        id: 1,
        content: 'hello, I am your assistant~~',
        role: 'assistant'
      },
      {
        id: 2,
        content: '你好',
        role: 'user'
      },
      {
        id: 1,
        content: '你好',
        role: 'assistant'
      },
      {
        id: 2,
        content: '你好',
        role: 'user'
      },
      {
        id: 1,
        content: '你好',
        role: 'assistant'
      },
      {
        id: 2,
        content: '你好',
        role: 'user'
      }
      
    ]);
    const handleChat = async () => {
        if (text.trim() === "") {
          Toast.info({
            message:'内容不能为空'
          })
            return;
        }
        setIsSending(true)
        const userMessage = {
          content: text,
          role: 'user'
        };
        setText('');
        
        // 添加用户消息
        setMessages(prevMessages => [
          ...prevMessages,
          userMessage
        ]);
        
        try {
          const newMessage = await chat([
            {
              role: 'user',
              content: text
            }
          ]);
          
          // 添加AI回复
          setMessages(prevMessages => [
            ...prevMessages,
            {
              content: newMessage.content,
              role: 'assistant'
            }
          ]);
        } catch (error) {
          console.error('Chat error:', error);
          Toast.fail('发送失败，请重试');
        }
        
        setIsSending(false);
    }
    return (
        <div className="flex flex-col h-all">
            <div className={`flex-1 ${styles.chatArea}`}>
            {
              messages.map((msg, index) => (
                <div 
                    key={index}
                    className={
                      msg.role === 'user' ? 
                      styles.messageRight : 
                      styles.messageLeft
                    }
                    >
                      {
                        msg.role === 'assistant' ?
                        <ChatO />:
                        <UserO />
                      }
                      {msg.content}
                </div>
              ))
            }
            </div>
            <div className={`flex ${styles.inputArea}`}>
                <Input
                    value={text}
                    onChange={(e) => setText(e)}
                    placeholder="请输入消息"
                    className={`flex-1 ${styles.input}`}
                />
                <Button disabled={isSending} type="primary" onClick={handleChat} >发送</Button>
            </div>
            {isSending &&  (<div className="fixed-loading"><Loading type="ball"/></div>) }
        </div>
    )
}

export default Trip