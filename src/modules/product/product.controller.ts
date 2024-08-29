import { Request, Response } from 'express';
import ProductValidateSchema from './product.validate';

const createProduct = async (req: Request, res: Response) => {
  try {
    const validateProduct = ProductValidateSchema.safeParse(req.body);
    if (!validateProduct.success) {
      return res.status(400).json({
        message: 'Validation error',
        errors: validateProduct.error.errors,
      });
    }
    const product = validateProduct.data;
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: product,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error,
    });
  }
};

export const productController = {
  createProduct,
};
