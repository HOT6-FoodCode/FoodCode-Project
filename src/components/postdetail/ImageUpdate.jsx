import React, { useState } from 'react';
import supabase from '../../api/supabaseAPI';

const ImageUpdate = () => {
  const [imageUrl, setImageUrl] = useState('');

  //     async updatepostImage(userId, postImageFile){
  //     try{
  //         if(postImageFile){
  //             const fileName = `${userId}/${Date.now()}_${postImageFile.name}`;
  //             const { date: uploadData, error:uploadError} = await supabase.storage.from('').upload(fileName, postImageFile,{
  //                 cacheControl:'3600',
  //                 upsert: false,
  //                 metadata: {owner: userId}
  //             });
  //             if (uploadError) throw new Error(`Post image upload error: ${uploadError.message}`);

  //             const postImageUrl = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public//${
  //                 uploadData.path
  //             }`;

  //             const {data: updateData, error: updateError} = await supabase
  //             .from('')
  //             .update({postImageUrl})
  //             .eq('id', userId);

  //             if (updateError) throw new Error(`Failed to update post image: ${updateError.message}`);

  //             return updateData;
  //         }
  //     }
  // }

  return <div></div>;
};

export default ImageUpdate;
