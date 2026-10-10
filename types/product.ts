// types/product.ts

import React from "react";

export interface Product {
  id: number;
  name: string;
  price: number;
  in_stock: boolean;
}

export type Variant = "in-stock" | "out-of-stock";



export interface CardProps {
  children: React.ReactNode;
}

export interface PageSectionProps {
  title: string;
  children: React.ReactNode;
}

export interface ModalProps {
  header: string;
  children: React.ReactNode;
}