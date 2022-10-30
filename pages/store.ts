import {defineStore} from "pinia";

interface Items {
    id: number|string;
    name: string;
    price: number;
    description: string;
    photo: string;
}

type RootState = {
    items: Items[];
}

export const useMenuStore = defineStore('menu', {
    state: () => ({
        items: [
            {
                id: 1,
                name: 'Hamburger',
                price: 5.99,
                description: 'A hamburger, with lettuce, tomato, and onions.',
                photo: 'https://www.tastingtable.com/img/gallery/steakburger-vs-hamburger-whats-the-biggest-difference/l-intro-1657643502.jpg',
            },
            {
                id: 2,
                name: 'Classic Sliders',
                price: 4.99,
                description: 'Three sliders, with lettuce, tomato, and onions.',
                photo: 'http://www.tastewiththeeyes.com/wp-content/uploads/2014/01/IMG_2887.jpg',
            },
            {
                id: 3,
                name: 'Fries',
                price: 2.99,
                description: 'A small order of fries. Perfect for sharing.',
                photo: 'https://www.unileverfoodsolutions.com.my/dam/global-ufs/mcos/SEA/calcmenu/recipes/MY-recipes/appetisers/kentang-goreng-pasti-sedap/main-header.jpg',
            },
            {
                id: 4,
                name: 'Soda',
                price: 1.99,
                description: 'A refreshing soda to wash down your meal.',
                photo: 'https://media.istockphoto.com/photos/pour-soft-drink-in-glass-with-ice-splash-on-dark-background-picture-id1062831310?k=20&m=1062831310&s=612x612&w=0&h=kvadNOzqCnDYUH83ffviQie1G7E62kBzvZZ8CmZuoxU=',
            },
            {
                id: 5,
                name: 'Coffee',
                price: 1.99,
                description: 'A coffe to wake you up. Or keep you up.',
                photo: 'https://post.healthline.com/wp-content/uploads/2020/08/coffee-worlds-biggest-source-of-antioxidants-1296x728-feature_0-732x549.jpg',
            }
        ]
    } as RootState),

    actions: {
        addItem(item) {

        }
    }
})