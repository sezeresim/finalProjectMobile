export const emailValidator = email => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return 'E-Posta adresinizi girmediniz.';
  if (!re.test(email)) return 'Hata:Geçersiz E-Posta';

  return '';
};

export const passwordValidator = password => {
  if (!password || password.length <= 0) return 'Şifrenizi girmediniz.';

  return '';
};

export const nameValidator = name => {
  if (!name || name.length <= 0) return 'Adınızı Giriniz';

  return '';
};
