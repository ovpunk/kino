export const formatDate = (inputDate: string) => {
  const months = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];

  const date = new Date(inputDate);

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  const formattedDate = `${day} ${months[monthIndex]} ${year}`;

  if (!!day && !!monthIndex && !!year) {
    return formattedDate;
  }
  return "";
};
