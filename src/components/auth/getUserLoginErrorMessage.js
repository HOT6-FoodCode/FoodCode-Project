export const getUserLoginErrorMessage = (error) => {
  console.log(error);

  if (error.includes('Invalid login credentials')) {
    return '잘못된 이메일과 비밀번호를 입력했습니다. 다시 입력해주세요.';
  }
};
