export interface SearchProducts {
  category: string
  products: {
    id: string
    name: string
    slug: string
    storeId: string
    categoryId: string
  }[]
}

export interface UserType {
  id: string;
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  image: string;
  password: string;
  gender: string;
  token: string;
  refreshToken: string;
}

export interface ProductType {
  id: string;
  title: string;
  description: string;
  category: CategoryType
  price: number
  discountPercentage: number
  rating: number
  stock: number
  tags: [string]
  brand: string
  sku: string
  weight: number
  dimensions: {
    width: number
    height: number
    depth: number
  }
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: string
  reviews: [ReviewType]
  returnPolicy: string
  minimumOrderQuantity: number
  meta: MetaType
  thumbnail: string
  images: [string]
  quantity: number
}

export interface CategoryType {
  id : string
  name: string;
  slug : string;
  url : string;
}

export interface CartType {
  id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage?: number;
  rating: number;
  stock: number;
  category: string;
  thumbnail: string;
  images: [string];
  quantity: number
}

export interface ReviewType {
  id: number | null
  rating: number
  comment: string
  date: Date
  reviewerName: string
  reviewerEmail: string
}
export interface MetaType {
  createdAt: Date;
  updatedAt: Date;
  barcode: string;
  qrCode: string;
}
