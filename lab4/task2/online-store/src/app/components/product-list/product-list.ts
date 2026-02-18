import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../../modules/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
    products: Product[] = [
      {
        id: 1,
        name: 'Ноутбук ASUS ProArt P16 16" / 64 Гб / M.2 4000 Гб / Win 11 Pro / H7606WX-SE002X',
        description: 'Ноутбук ASUS ProArt P16 16" 4K OLED 120Hz AMD Ryzen 9 64GB 2TB RTX 5090 Windows 11 Pro (90NB17E1-M000Y0)',
        price: 4309749,
        rating: 0,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pbd/p02/93188267.png?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/pa1/p02/93188268.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p85/p02/93188269.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p85/p02/93188269.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/asus-proart-p16-16-64-gb-m-2-4000-gb-win-11-pro-h7606wx-se002x-153888660/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iEr4lAQjlEDrW1A86_ssy4J&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1EqKu-trZVXT4r9E0XjjCu-oL98qd5mX5BUHiiSc07fH2R3X1MljVhoCZlIQAvD_BwE'
      },
      {
        id: 2,
        name: 'Мышь Ultra-S ULTMICE11-H2 белый',
        description: ' Мышь от Ultra-S — это лёгкость, надёжность и профессиональный уровень контроля, который оценят как геймеры, так и те, кто ищет удобный и современный аксессуар для работы.',
        price: 9800,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p23/pee/69280945.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/peb/ped/69280947.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p85/p02/93188269.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p47/peb/69280950.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/ultra-s-ultmice11-h2-belyi-146975135/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iEr4lAQjlEDrW1A86_ssy4J&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1EqKu-trZVXT4r9E0XjjCu-oL98qd5mX5BUHiiSc07fH2R3X1MljVhoCZlIQAvD_BwE'
      },
      {
        id: 3,
        name: 'Ручка шариковая Obama OB-12345 1 шт, 0.7 мм, цвет чернил синий',
        description: 'Шариковая ручка Obama OB-12345 — надежный инструмент для письма, который сочетает в себе удобство и стильный дизайн. Идеально подходит для работы, учебы и творчества.',
        price: 10,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p14/p5b/25040430.png?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/pb7/p3a/67380702.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p9b/p3a/67380703.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/ruchka-sharikovaja-obama-ob-12345-1-sht-0-7-mm-tsvet-chernil-sinii-106183439/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iEr4lAQjlEDrW1A86_ssy4J&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1EqKu-trZVXT4r9E0XjjCu-oL98qd5mX5BUHiiSc07fH2R3X1MljVhoCZlIQAvD_BwE'
      },
      {
        id: 4,
        name: 'Бутылка для воды 780 мл черный',
        description: 'Представляем вам стильную и функциональную бутылку для воды с уникальной надписью "Hello Water". Ее вместительность составляет 780 мл, что идеально подходит для вашего повседневного употребления воды.',
        price: 1875,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h96/hd8/65857060110366.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/haa/h01/65857060372510.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h2a/h22/65857056702494.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/butylka-dlja-vody-780-ml-chernyi-107614270/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iEr4lAQjlEDrW1A86_ssy4J&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1EqKu-trZVXT4r9E0XjjCu-oL98qd5mX5BUHiiSc07fH2R3X1MljVhoCZlIQAvD_BwE'
      },
      {
        id: 5,
        name: 'Гарнитур OKYANUS , предметов в наборе 5 шт серый',
        description: 'Спальный гарнитур OKYANUS — это современное решение для вашего интерьера, которое сочетает в себе функциональность и стильный дизайн. В комплект входят все необходимые элементы для создания уютного и комфортного пространства.',
        price: 3796416,
        rating: 0,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p7c/pc7/13510648.jpeg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p13/pc4/13510649.jpeg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pfd/p78/13510650.jpeg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p2a/p72/13510652.jpeg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/okyanus-predmetov-v-nabore-5-sht-seryi-131519395/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iEr4lAQjlEDrW1A86_ssy4J&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1EqKu-trZVXT4r9E0XjjCu-oL98qd5mX5BUHiiSc07fH2R3X1MljVhoCZlIQAvD_BwE'
      },
      {
        id: 6,
        name: 'Пульт ДУ Samsung UNIVERSAL RM-L1088 LCD',
        description: 'Подходит для подавляющего большинства телевизоров Samsung, выпущенных после 2010 года. Настройка не требуется. Вставляете батарейки и можно пользоваться.',
        price: 790,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hd4/hc1/64327376207902.jpg?format=gallery-large',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hd4/hc1/64327376207902.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h90/hcf/64327379025950.jpg?format=gallery-large'
        ],
        link: 'https://kaspi.kz/shop/p/samsung-universal-rm-l1088-lcd-102972600/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iEr4lAQjlEDrW1A86_ssy4J&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1EqKu-trZVXT4r9E0XjjCu-oL98qd5mX5BUHiiSc07fH2R3X1MljVhoCZlIQAvD_BwE'
      },
      {
        id: 7,
        name: 'Телевизор Avalon 50F6000 127 см черный',
        description: 'AVALON — быстрорастущий и узнаваемый бренд телевизоров, сочетающий стабильное качество, современный дизайн и актуальные технологии. Линейка включает модели от компактных до премиальных Smart-телевизоров с поддержкой 4K.',
        price: 154047,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pb2/p77/58072925.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/pcd/p77/58072926.PNG?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pe9/p77/58072927.PNG?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p05/p78/58072928.PNG?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/avalon-50f6000-127-sm-chernyi-121671093/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iEr4lAQjlEDrW1A86_ssy4J&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1EqKu-trZVXT4r9E0XjjCu-oL98qd5mX5BUHiiSc07fH2R3X1MljVhoCZlIQAvD_BwE'
      },
      {
        id: 8,
        name: 'Кабель VARIUM USB 4 Type-C (M), 1 м, VTT03 белый',
        description: 'USB кабель Apple Type - C to Type - C VARIUM VTT03 предназначен для использования с новейшими моделями смартфонов наушников планшетов от компании Apple таких как: iPhone AirPods iPad. Кабель отлично подходит для зарядки. Скорость зарядки напрямую зависит от адаптера который используется.',
        price: 1950,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pc0/p33/58883993.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/pa3/p33/58883994.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p87/p33/58883995.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p6b/p33/58883996.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/kabel-varium-usb-4-type-c-m-1-m-vtt03-belyi-144182006/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iEr4lAQjlEDrW1A86_ssy4J&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1EqKu-trZVXT4r9E0XjjCu-oL98qd5mX5BUHiiSc07fH2R3X1MljVhoCZlIQAvD_BwE'
      },
      {
        id: 9,
        name: 'Экшн-камера DJI Pocket 3 Creator Combo',
        description: 'Камера DJI Osmo Pocket 3 Creator Combo – это компактная камера с 3-осевой стабилизацией, которая может стать полноценной заменой тяжелой камеры, использующейся для создания креативного контента',
        price: 294903,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hc9/h4e/84527131131934.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hc4/h1c/84527131197470.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hc9/h4e/84527131131934.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hb8/h71/84527131263006.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/ekshn-kamera-dji-pocket-3-creator-combo-114696264/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iEr4lAQjlEDrW1A86_ssy4J&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1EqKu-trZVXT4r9E0XjjCu-oL98qd5mX5BUHiiSc07fH2R3X1MljVhoCZlIQAvD_BwE'
      },
      {
        id: 10,
        name: 'CeraVe Acne Control Cleanser гель 237 мл',
        description: 'Угревая сыпь может поражать как подростков, так и взрослых, поэтому эффективное очищающее средство для борьбы с акне является неотъемлемым элементом любой схемы ухода за кожей.',
        price: 1820,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h4c/h84/86202584399902.png?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hdd/h51/86202584465438.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hf6/hb8/86202584498206.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h83/h2c/86202584530974.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/cerave-acne-control-cleanser-gel-237-ml-105359732/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iEr4lAQjlEDrW1A86_ssy4J&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1EqKu-trZVXT4r9E0XjjCu-oL98qd5mX5BUHiiSc07fH2R3X1MljVhoCZlIQAvD_BwE'
      }
    ]
}
