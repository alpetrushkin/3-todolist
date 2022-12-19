import React from 'react';

type AppButtonType = {
   title: string
   callback: () => void
}

const AppButton = (props: AppButtonType) => {
   const onClickHandler = () => {
     props.callback()
   }

   return (
      <button onClick={onClickHandler}>{props.title}</button>
   );
};

export default AppButton;