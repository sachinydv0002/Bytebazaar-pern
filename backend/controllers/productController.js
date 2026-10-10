import {sql} from "../config/db.js";

const parseProductId = (value) => {
   if (!/^\d+$/.test(value)) return null;
   const id = Number(value);
   return Number.isSafeInteger(id) && id > 0 ? id : null;
};

const validateProduct = ({ name, image, price }) => {
   if (typeof name !== "string" || !name.trim() || name.length > 255) {
      return "Name is required and must be at most 255 characters";
   }
   if (typeof image !== "string" || !image.trim() || image.length > 255) {
      return "Image URL is required and must be at most 255 characters";
   }
   try {
      const imageUrl = new URL(image);
      if (!["http:", "https:"].includes(imageUrl.protocol)) return "Image URL must use HTTP or HTTPS";
   } catch {
      return "Image URL must be a valid URL";
   }
   const numericPrice = typeof price === "number" ? price : Number(price);
   if (!Number.isFinite(numericPrice) || numericPrice < 0 || numericPrice > 99999999.99) {
      return "Price must be a valid non-negative number";
   }
   return null;
};

export const getAllProducts = async (req, res) => {
   try {
      const products = await sql `
      SELECT * FROM products
      ORDER BY created_at DESC
      `;

      res.status(200).json({success: true, data: products});

   } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({success: false, message: "Failed to fetch products"});
   }
};

export const createProduct = async (req, res) => {
   const { name, image, price } = req.body;

   const validationError = validateProduct({ name, image, price });
   if (validationError) {
      return res.status(400).json({success: false, message: validationError});
   }

   try {
      const newProduct = await sql `
         INSERT INTO products (name, image, price)
         VALUES (${name}, ${image}, ${price})
         RETURNING *
      `;
      res.status(201).json({success: true, data: newProduct[0]});
   } catch (error) {
      console.error("Error creating product:", error);
      res.status(500).json({success: false, message: "Failed to create product"});
   }
};

export const getProduct= async (req, res) => {
   const { id } = req.params;
   const productId = parseProductId(id);
   if (!productId) return res.status(400).json({success: false, message: "Invalid product ID"});

   try {
      const product = await sql `
         SELECT * FROM products
         WHERE id = ${productId}
      `;
      if (product.length === 0) {
         return res.status(404).json({success: false, message: "Product not found"});
      }
      res.status(200).json({success: true, data: product[0]});
   } catch (error) {
      console.error("Error fetching product:", error);
      res.status(500).json({success: false, message: "Failed to fetch product"});
   }

};

export const updateProduct = async (req, res) => {
   const { id } = req.params;
   const { name, image, price } = req.body;
   const productId = parseProductId(id);
   if (!productId) return res.status(400).json({success: false, message: "Invalid product ID"});
   const validationError = validateProduct({ name, image, price });
   if (validationError) {
      return res.status(400).json({success: false, message: validationError});
   }

   try {
      const updatedProduct = await sql `
         UPDATE products
         SET name = ${name}, image = ${image}, price = ${price}
         WHERE id = ${productId}
         RETURNING *
      `;
      if (updatedProduct.length === 0) {
         return res.status(404).json({success: false, message: "Product not found"});
      } 

      res.status(200).json({success: true, data: updatedProduct[0]});
   } catch (error) {
      console.error("Error updating product:", error);
      res.status(500).json({success: false, message: "Failed to update product"});
   }
};

export const deleteProduct = async (req, res) => {
   const { id } = req.params;
   const productId = parseProductId(id);
   if (!productId) return res.status(400).json({success: false, message: "Invalid product ID"});

   try {
      const deletedProduct = await sql `
         DELETE FROM products
         WHERE id = ${productId}
         RETURNING id
      `;
      if(deletedProduct.length === 0) {
         return res.status(404).json({success: false, message: "Product not found"});
      }

      res.status(200).json({success: true, message: "Product deleted successfully"});
   } catch (error) {
      console.error("Error deleting product:", error);
      res.status(500).json({success: false, message: "Failed to delete product"});
   }
};
