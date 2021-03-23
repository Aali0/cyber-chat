import { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';
import  TranslateApi  from '../utils/API';
import {Form} from 'react-bootstrap';

const MessageForm = (props) => {

    const [value, setValue] = useState('');
    const { chatId, creds } = props;
    const [language, setLanguage] = useState('');
    const [message, setMessage] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();

        const text = value.trim();
        console.log(text);

        if(text.length > 0) sendMessage(creds, chatId, { text });

        TranslateApi(text, language);

        setMessage(TranslateApi(text, language));
        // console log for async output
        console.log(TranslateApi(text, language));

        setValue('');

    }

    const handleChange = (event) => {
        setValue(event.target.value);

        isTyping(props, chatId);
    }

    const handleLangChange = (e) => {
        e.preventDefault();

        const languageChoice = document.querySelector(".language");

        setLanguage(languageChoice.value)

        console.log(language);
    }

    const handleUpload = (event) => {
        sendMessage(creds, chatId, { files: event.target.files, text: ''});
    }



    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <input
                className="message-input"
                placeholder="Send a message..."
                value={value}
                onChange={handleChange} 
                onSubmit={handleSubmit}
            />
            <label htmlFor="upload-button">
                <span className="image-button">
                    <PictureOutlined  className="picture-icon" />
                </span>
            </label>
            <input 
                type="file"
                multiple={false}
                id="upload-button"
                style={{ display: 'none' }}
                onChange={handleUpload}
            />
            <button type="submit" className="send-button">
                <SendOutlined className="send-icon" />
            </button>
            <Form.Control as="select" className="language" onChange={handleLangChange}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="de">German</option>
            <option value="ko">Korean</option>
            <option value="ar">Arabic</option>
            </Form.Control>
        </form>
        
    );
}

export default MessageForm;