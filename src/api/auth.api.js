import supabase from './supabaseAPI';

class AuthAPI {
  async signUp(email, password, nickname, profilePictureFile) {
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({ email, password });
    if (signUpError) {
      throw signUpError;
    }
    const userId = signUpData.user.id;

    // 프로필 사진 업로드
    let profilePictureUrl = null;
    if (profilePictureFile) {
      const fileName = `${userId}/${Date.now()}_${profilePictureFile.name}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('profile-pictures')
        .upload(fileName, profilePictureFile, {
          cacheControl: '3600',
          upsert: false,
          metadata: { owner: userId }
        });

      if (uploadError) {
        throw uploadError;
      }

      profilePictureUrl = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/profile-pictures/${
        uploadData.path
      }`;
    } else {
      profilePictureUrl = `${
        import.meta.env.VITE_SUPABASE_URL
      }/storage/v1/object/public/profile-pictures/default-profile.jpg`;
    }

    // 추가 정보 저장
    const { data: userData, error: userError } = await supabase
      .from('users')
      .insert([{ id: userId, nickname, profilePictureUrl }]);

    if (userError) {
      console.error('User data insertion error:', userError);
      throw userError;
    }

    return { signUpData, userData };
  }
  async signIn(email, password) {
    const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({ email, password });
    if (signInError) {
      throw signInError;
    }
    return signInData;
  }

  async signOut() {
    const { error: signOutError } = await supabase.auth.signOut();
    if (signOutError) {
      throw signOutError;
    }
  }
}

export default AuthAPI;
