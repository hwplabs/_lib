//
import { FakerHelper } from "./index";

export const USER = {
  id: 1,
  avatar: "avatar",
  auth: () =>
    FakerHelper.in([
      "GUEST",
      "USER",
      "SUPER_USER",
      "ADMIN",
      "SUPER_ADMIN",
      "WEBMASTER",
    ]),
  name: "username",
  email: "email",
  password: "password",
  is_subscribed: true,
  notes: {
    ip: "ip",
    date: "date",
    user_agent: "userAgent",
  },
  status: () =>
    FakerHelper.in(
      Object.keys(["Default", "Verified", "Onboarded", "Priority", "Watchlist"])
    ),
  created_at: "date",
  updated_at: null,
  deleted_at: null,
  uuid: "uuid",
};

export const POST = {
  id: 1,
  thumbnail: "thumbnail",
  product: "product",
  category: {
    id: "number",
    name: "word",
  },
  brand: {
    logo: "logo",
    name: "word",
    website: "website",
  },
  summary: "description",
  description: "paragraphs",
  price: "price",
  discount: "discount",
  impressions: {
    ratings: "ratings",
    reviews: "reviews",
  },
  status: "booleanInt",
  created_at: "date",
  updated_at: null,
  deleted_at: null,
  uuid: "uuid",
};
