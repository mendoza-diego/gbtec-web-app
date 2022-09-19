import { User } from "../user";
import { PhotoExif } from "./photo-exif";
import { PhotoLinks } from "./photo-links";
import { PhotoLocation } from "./photo-location";
import { PhotoUrls } from "./photo-urls";

export interface Photo {
  id: string;
  width: number;
  height: number;
  blur_hash: string;
  description: string;
  urls: PhotoUrls;
  links: PhotoLinks;
  user: User;
  exif: PhotoExif;
  views: number;
  downloads: number;
  location: PhotoLocation;
  created_at: Date;
  topics: any;
  related_collections: any;
}