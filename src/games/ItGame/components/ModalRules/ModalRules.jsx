import React from 'react';
import './ModalRules.css';

const ModalRules = ({ closePopup }) => {
  return (
    <div className='modal-rules' onClick={closePopup}>
      <div className='modal-container'>
        <h3 className='modal__title'>Праила игры</h3>
        <ol>
          <li className='modal-rules__text'>Играть</li>
          <li className='modal-rules__text'>Кнопку нажимать</li>
          <li className='modal-rules__text'>Отвечать</li>
          <li className='modal-rules__text'>Выигрывать/ проигрывать</li>
          <li className='modal-rules__text'>Радоваться/ не расстраиваться</li>

        </ol>
      </div>
    </div>
  );
};

export default ModalRules;
