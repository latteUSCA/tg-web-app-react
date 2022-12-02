const tg = window.Telegram.WebApp;
export const useTelegram = () => {
  const onClose = () => {
    tg.close();
  };
  const onToggle = () => {
    if (tg.MainButton.isVisible) {
      console.log(1);
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  };
  return {
    onClose,
    onToggle,
    tg,
    user: tg.initDataUnsafe?.user,
  };
};
