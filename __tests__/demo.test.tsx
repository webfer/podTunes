test('prueba falla', () => {
  // eslint-disable-next-line no-constant-condition

  const mess1 = 'Hola mundo';

  const mess2 = mess1.trim();
  expect(mess1).toBe(mess2);
});
