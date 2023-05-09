import React, { FC } from 'react';
import './Rules.scss';
import selectCategoryImage from '../../images/rule_step_select-category.svg';
import selectCostImage from '../../images/rule_step_select-cost.svg';
import answerImage from '../../images/rule_step_answer.svg';
import rightImage from '../../images/rule_step_right.svg';
import wrongImage from '../../images/rule_step_wrong.svg';

const Rules: FC = () => {
  return (
    <section className='rules-section' id='rules'>
      <h2 className='rules-section__title'>Правила игры</h2>
      <p className='rules-section__rule rules-section__rule_step_select-category'>Выберите 1 из 5 категорий вопросов</p>
      <img className='rules-section__image rules-section__image_step_select-category' src={selectCategoryImage} alt='Выбери категорию' />
      <p className='rules-section__rule rules-section__rule_step_select-cost'>Выберите стоимость вопроса</p>
      <img className='rules-section__image rules-section__image_step_select-cost' src={selectCostImage} alt='Выбери вопрос' />
      <p className='rules-section__rule rules-section__rule_step_answer'>Есть 30 секунд прочитать и ответить</p>
      <img className='rules-section__image rules-section__image_step_answer' src={answerImage} alt='Ответь на вопрос' />
      <p className='rules-section__rule rules-section__rule_step_right'>За правильной ответ баллы прибавляются </p>
      <img className='rules-section__image rules-section__image_step_right' src={rightImage} alt='Правильный ответ!' />
      <p className='rules-section__rule rules-section__rule_step_wrong'>За не правильной ответ баллы отнимаются </p>
      <img className='rules-section__image rules-section__image_step_wrong' src={wrongImage} alt='Неправильный ответ' />
    </section>
  );
};

export default Rules;
