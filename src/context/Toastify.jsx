import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

const CartToastify = () => {
  const showToast = () => {
    Toastify({
      text: "Este producto ya fue agregado",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "#000000",
        borderRadius: "10px",
      },
      onClick: function () {},
    }).showToast();
  };

  showToast();

  return null; 
};

export default CartToastify;
