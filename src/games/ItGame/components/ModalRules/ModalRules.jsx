import React from 'react';
import './ModalRules.css';

const ModalRules = ({ closeRules }) => {
  return (
    <div className='modal-overflow' role='button' tabIndex={0} onClick={closeRules} onKeyDown='none'>
      <div className='modal'>
        <h3 className='modal__title'>Праила игры</h3>
        <ol>
          <li className='modal__text'>Играть</li>
          <li className='modal__text'>Кнопку нажимать</li>
          <li className='modal__text'>Отвечать</li>
          <li className='modal__text'>Выигрывать/ проигрывать</li>
          <li className='modal__text'>Радоваться/ не расстраиваться</li>

        </ol>
      </div>
    </div>
  );
};

export default ModalRules;
