export type NavItem = {
  label: string;
  href: string;
};

export type PracticeArea = {
  title: string;
  summary: string;
  href: string;
};

export type Attorney = {
  name: string;
  role: string;
  focus: string;
  bio?: string;
};

export type FirmProfile = {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  phoneHref: string;
  email: string;
  address: string[];
  disclaimer: string;
};
