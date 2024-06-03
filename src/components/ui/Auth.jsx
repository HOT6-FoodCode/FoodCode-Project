// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import supabase from '../../supabaseClient';
// import { setUser, signInWithGitHub, signOut } from '../../redux/slices/authSlice';

// const Auth = () => {
//   const dispatch = useDispatch();
//   const auth = useSelector((state) => state.auth);

//   useEffect(() => {
//     const checkSession = async () => {
//       const { data } = await supabase.auth.getSession();
//       if (data.session) {
//         dispatch(setUser({ user: data.session.user, session: data.session }));
//       }
//     };

//     checkSession();

//     const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
//       if (session) {
//         dispatch(setUser({ user: session.user, session }));
//       } else {
//         dispatch(signOut());
//       }
//     });

//     return () => {
//       authListener.subscription.unsubscribe();
//     };
//   }, [dispatch]);

//   const handleGitHubLogin = () => {
//     dispatch(signInWithGitHub());
//   };

//   const handleSignOut = () => {
//     supabase.auth.signOut();
//     dispatch(signOut());
//   };

//   return (
//     <div>
//       <h2>GitHub 로그인</h2>
//       {!auth.user ? (
//         <button onClick={handleGitHubLogin} disabled={auth.status === 'loading'}>
//           GitHub로 로그인
//         </button>
//       ) : (
//         <button onClick={handleSignOut}>로그아웃</button>
//       )}
//       {auth.status === 'loading' && <p>로딩 중...</p>}
//       {auth.error && <p>에러: {auth.error}</p>}
//       {auth.user && (
//         <>
//           <p>환영합니다, {auth.user.email}님!</p>
//         </>
//       )}
//     </div>
//   );
// };

// export default Auth;
