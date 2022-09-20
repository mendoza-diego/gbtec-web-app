import { UserProfileImage } from "./user-profile-image";

export interface User {
  id: string;
  username: string;
  name: string;
  portfolio_url: string;
  bio: string;
  profile_image: UserProfileImage;
  links: any;
}