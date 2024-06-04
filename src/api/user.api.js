import supabase from './supabaseAPI';

class UserAPI {
  async getUserProfile(userId) {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('id, nickname, profilePictureUrl')
        .eq('id', userId)
        .single();

      if (error) throw new Error(`Failed to fetch user profile: ${error.message}`);

      return data;
    } catch (error) {
      throw new Error(`Failed to fetch user profile: ${error.message}`);
    }
  }

  async updateUserProfile(userId, profilePictureFile) {
    try {
      if (profilePictureFile) {
        const fileName = `${userId}/${Date.now()}_${profilePictureFile.name}`;
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('profile-pictures')
          .upload(fileName, profilePictureFile, {
            cacheControl: '3600',
            upsert: false,
            metadata: { owner: userId }
          });

        if (uploadError) throw new Error(`Profile picture upload error: ${uploadError.message}`);

        const profilePictureUrl = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/profile-pictures/${
          uploadData.path
        }`;

        const { data: updateData, error: updateError } = await supabase
          .from('users')
          .update({ profilePictureUrl })
          .eq('id', userId);

        if (updateError) throw new Error(`Failed to update user profile: ${updateError.message}`);

        return updateData;
      }
    } catch (error) {
      throw new Error(`Failed to update user profile: ${error.message}`);
    }
  }
}

export default UserAPI;
