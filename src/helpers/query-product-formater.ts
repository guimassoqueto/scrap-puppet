import { QueryResult } from "pg";
import { Product } from "../types/product.js";

export class QueryProductFormater {
  static format(query_result: QueryResult<any>): Product[] {
    const { rows } = query_result
    const products: Product[] = rows.map(row => {
      const product: Product = {
        id: row.id,
        title: row.title,
        image_url: row.image_url,
        free_shipping: row.free_shipping,
        price: row.price,
        previous_price: row.previous_price,
        discount: row.discount,
      }
      return product
    })
    return products
  }
}