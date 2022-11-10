import { v4 as uuid } from "uuid";

export const mutation = {

    addCategory: (_parent, {input}, {categories}) => {
        const {name} = input;
        const newCategory = {
            id: uuid(),
            name: name
        }

        categories.push(newCategory);
        return newCategory;
    },

    addProduct: (_parent, {input}, {products}) => {
        const {name, description, image, price, onSale, quantity, categoryId} = input;
        const newProduct = {
            id: uuid(),
            name: name,
            description: description,
            image: image,
            price: price,
            onSale: onSale,
            quantity: quantity,
            categoryId: categoryId
        }

        products.push(newProduct);
        return newProduct;
    },

    addReview: (_parent, {input}, {reviews}) => {
        const {date, title, comment, rating, productId} = input;
        const newReview = {
            id: uuid(),
            date: date,
            title: title,
            comment: comment,
            rating: rating,
            productId: productId
        }

        reviews.push(newReview);
        return newReview;
    },
}