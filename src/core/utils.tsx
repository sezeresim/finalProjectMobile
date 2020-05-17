export const emailValidator = (email: string) => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return 'E-Posta Boş Olamaz';
  if (!re.test(email)) return 'Hata:Geçersiz E-Posta';

  return '';
};

export const passwordValidator = (password: string) => {
  if (!password || password.length <= 0) return 'Şifre Boş Olamaz';

  return '';
};

export const nameValidator = (name: string) => {
  if (!name || name.length <= 0) return 'Adınızı Giriniz';

  return '';
};
