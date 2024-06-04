import supabase from './supabaseAPI';

class AuthAPI {
  async signUp(email, password, nickname) {
    try {
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({ email, password });
      if (signUpError) {
        throw new Error(signUpError.message);
      }
      const userId = signUpData.user.id;

      // 추가 정보 저장
      const { data: userData, error: userError } = await supabase.from('users').insert([{ id: userId, nickname }]);

      if (userError) {
        throw new Error(userError.message);
      }

      return { signUpData, userData };
    } catch (error) {
      throw new Error(`Sign-up failed: ${error.message}`);
    }
  }
  async signIn(email, password) {
    try {
      const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({ email, password });

      if (signInError) throw new Error(signInError.message);

      return signInData;
    } catch (error) {
      throw new Error(`Sign-in failed: ${error.message}`);
    }
  }

  async signOut() {
    try {
      const { error: signOutError } = await supabase.auth.signOut();

      if (signOutError) throw new Error(signOutError.message);
    } catch (error) {
      throw new Error(`Sign-out failed: ${error.message}`);
    }
  }
}

export default AuthAPI;
