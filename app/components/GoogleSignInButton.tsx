import { FC, ReactNode } from 'react';

interface GoogleSignInButtonProps {
  children: ReactNode;
}
const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({ children }) => {
  const loginWithGoogle = () => console.log('login with google');

  return (
    <div>
      empty
    </div>

  );
};

export default GoogleSignInButton;
