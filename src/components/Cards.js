import React, { useState } from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Modal } from 'antd';
import SigninForm from './login';



function Cards() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <SigninForm />
      </Modal>
      <div className='cards'>
        <h1>Check out these Mentorship Programs!</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/image-10.png'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus, vel sollicitudin pulvinar.Porttitor lobortis arcu interdum neque enim.'
                label='Mentoring'
                onClick={showModal}
              />
              <CardItem
                src='images/img-16.png'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus, vel sollicitudin pulvinar. Porttitor lobortis arcu interdum neque enim.'
                label='Our Program'
                onClick={showModal}
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='images/img-13.png'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus, vel sollicitudin pulvinar. Porttitor lobortis arcu interdum neque enim.'
                label='Request Session'
                onClick={showModal}
              />
              <CardItem
                src='images/img-14.png'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus, vel sollicitudin pulvinar. Porttitor lobortis arcu interdum neque enim.'
                label='Meet a Mentor'
                onClick={showModal}
              />
              <CardItem
                src='images/img-15.png'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus, vel sollicitudin pulvinar. Porttitor lobortis arcu interdum neque enim.'
                label='Quick Question'
                onClick={showModal}
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );

}

export default Cards;
