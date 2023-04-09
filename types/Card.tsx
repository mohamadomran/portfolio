import { ElementType, ReactNode } from 'react';

export type Card = {
  as?: ElementType;
  variant?: string;
  className?: string;
  children: ReactNode;
};
export type CardLink = {
  href: string;
  children: ReactNode;
};
export type CardTitle = {
  as?: ElementType;
  href: string;
  children: ReactNode;
};
export type CardDescription = {
  children: ReactNode;
  className?: string;
};
export type CardCta = {
  children: ReactNode;
};
export type CardEyebrow = {
  as: ElementType;
  dateTime: string;
  decorate: boolean;
  className?: string;
  children: ReactNode;
};

export type CardGroupProps = {
  title: string;
  children: ReactNode;
};
