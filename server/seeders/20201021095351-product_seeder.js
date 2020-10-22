"use strict";

const data = [
  {
    name: "Earl Grey",
    price: 240,
    desc: `There’s no mistaking the unique, refreshing taste of an Earl Grey tea. Rujani’s classic Earl Grey tea blend is flavoured with citrus-orange Bergamot oil from France and blended with blue cornflowers sourced from Germany.
    
    Can you think of a better way to begin your morning tea ritual or your afternoon ‘perk-me-up’ cuppa, than with the sublime combined aromatics of this exquisite tea?
    
    A must-try!`,
    manufactured_date: new Date(),
    stock: 900,
  },
  {
    name: "Emerald",
    price: 200,
    desc: `A cup of our robust, mood-enhancing Emerald tea is a wonderful way to start your day.
    
    As the name suggests, Rujani’s Emerald tea has a rich, bright hue when brewed, proving its quality status.
    
    Rujani's Emerald tea won an award at the home of green tea in 2019, at the 4th International Tea Culture Expo, held at the Sichuan International Tourism Trade Centre in China’s tea town, Mount Emei.
    A proud new addition to the Rujani award-winning collection, we’d love to hear your thoughts on this beautiful single-origin green tea.`,
    manufactured_date: new Date(),
    stock: 800,
  },
  {
    name: "Exotica Flat",
    price: 500,
    desc: `Our Exotica Flat whole leaf tea is an emperor of green teas and a connoisseur’s choice.
    
    Inspired by Chinese green tea traditions, the unique and beautiful flat whole leaf used for this tea holds within it the magic of traditional green tea and is made to be enjoyed at any time of the day.
    
    Picked when tender, processed with the utmost care and artisanal in every sense, this refreshing, energising tea lives up to its flawless reputation.`,
    manufactured_date: new Date(),
    stock: 700,
  },
  {
    name: "Golden Tea",
    price: 500,
    desc: `After tasting this beauty, you’ll understand why our Rujani Gold holds pride of place in our collection. 
    
    A result of years of hard work and handcrafted in very small batches, Rujani Gold is no ordinary tea. This subtle black whole leaf tea has won us the Bronze Award for single-origin black tea, at the 2019 Golden Leaf Awards, Australia.
    Robust, full-bodied and rich in flavour, this is a tea to take out and impress your guests with a refreshing cup of unique Rujani Gold at any time of the day. 
    `,
    manufactured_date: new Date(),
    stock: 1080,
  },
  {
    name: "Moon Tea Golden",
    price: 200,
    desc: `Rujani Moon Tea Golden is as rare as the Blue Moon. Rujani Moon Tea Golden is made from the tenderest of tender leaves and picked at dawn after a full-moon night. Once picked the leaves are hand rolled by expert hands that work lovingly to make leaves and the brew a rich amber gold.`,
    manufactured_date: new Date(),
    stock: 1000,
  },
  {
    name: "Morning Special",
    price: 150,
    desc: `Looking for the perfect cuppa to begin your day? Look no further.
    
    Blended with the finest of whole-leaf tea and our full-bodied CTC tea, this is a happy union of the famous aromas and robustnesses of Assam tea.
    
    Strong and full of flavour, a piping hot cup of Rujani Morning Special is the ideal wake-up tea to get you moving and make the best start to your day.
    Even better if someone makes it for you!`,
    manufactured_date: new Date(),
    stock: 1500,
  },
  {
    name: "Mountain Mist",
    price: 170,
    desc: `Rujani Mountain Mist is a whole leaf tea with minimum breakage of the tender-most tea leaves, which have been hand picked with utmost care within a day of the delicate tea bud’s unfurling.`,
    manufactured_date: new Date(),
    stock: 2100,
  },
  {
    name: "Muscatel Whole Leaf",
    price: 300,
    desc: `Another Innovation from Rujani Tea is the Muscatel Whole Leaf Tea. Muscatel is an elusive taste found in some Darjeeling teas, most likely second flush teas. Rujani Muscatel Whole Leaf Tea is a creative rendition of the same. Rujani Muscatel Whole Leaf Tea an original made better.`,
    manufactured_date: new Date(),
    stock: 1100,
  },
  {
    name: "Pearl Tea",
    price: 300,
    desc: `With its rich, velvety taste, we’re confident you’ll love Rujani’s  Pearl Tea at any time of the day.
    
    This unique black tea is a true labour of love, with each individual tea pearl rolled by hand in very small batches, with the leaf from the second flush, spring season every year.
    Rich in flavour, this popular whole leaf orthodox tea is refreshing, energising, and sure to be a favourite. `,
    manufactured_date: new Date(),
    stock: 1050,
  },
  {
    name: "Premium Orthodox",
    price: 150,
    desc: `There’s nothing like that pleasurable ‘ahhh’ moment when you take your first sip of delicious, soothing tea.
    
    Our popular single-origin Assamica Premium Orthodox Tea is sourced from only Camellia Sinensis Assamica tea plants, grown in our Aideobari tea farm in Assam, India; the world’s largest tea-growing region.
    Rich in colour and aroma, this distinctive, full-bodied tea is harvested with immense care and processed by hand using traditional methods. This ensures the leaves remain whole and maximum flavour is extracted.
    
    Enjoy Assamica Premium Orthodox tea’s rich, velvety flavour at any time throughout the day.`,
    manufactured_date: new Date(),
    stock: 1070,
  },
  {
    name: "Rose Green",
    price: 240,
    desc: `Our versatile Rose Green tea is the ideal ‘afternoon tea’ cuppa to be enjoyed on its own or with accompanimen
    
    Our versatile Rose Green tea is the ideal ‘afternoon tea’ cuppa to be enjoyed on its own or with accompaniments. Or try it as a non-alcoholic digestif after a meal!
    Organic dried rose petals sourced locally from Assam and handcrafted green tea combine to produce a light and aromatic brew.
    
    Mellow and refreshing, this beautiful tea is best enjoyed in the afternoon and evenings.`,
    manufactured_date: new Date(),
    stock: 1800,
  },
  {
    name: "Royale Golden CTC",
    price: 300,
    desc: `Enjoy a cup of Rujani’s robust, delectable CTC Royale at any time of the day.

    This single origin CTC tea is well-liked amongst Chai tea drinkers and has been lovingly created in our tea farms in Assam, India – the world’ largest tea-growing region. CTC stands for Crush-Tear-Curl, and is a process in which the tea leaf is rolled into tiny spheres of black tea. These tea spheres, pack in them the robustness and rich aromas, that Assam tea is famous for.

    This tea’s leaves are particularly strong and bold, making for a perfect cup of Chai, or even a beautiful emerald red cup of liquor tea. 
    `,
    manufactured_date: new Date(),
    stock: 1070,
  },
  {
    name: "Signature White",
    price: 400,
    desc: `Here at Rujani, we consider white tea a bit of a ‘hidden treasure’.

    Ideally enjoyed in the evening to promote calmness, you’ll notice a pleasing floral aroma when brewing our popular Signature White tea, along with a golden hue tone in appearance.
    
    The presence of leaves makes this refreshing white tea slightly robust and full of flavour.
    
    We’d love to know your thoughts!`,
    manufactured_date: new Date(),
    stock: 1050,
  },
  {
    name: "Silky Silver Needle",
    price: 400,
    desc: `This exquisite white tea is the epitome of tea-making craftmanship.

    Each silky silver needle is purely a bud, plucked from the tea plant – tender, fresh and unbroken. The silky silver needles are sundried and handcrafted, ensuring this tea retains all of its natural qualities and produces maximum flavour.
    
    Full of flavour, sweet, refreshing, mellow and calming, this delightful tea can be enjoyed at any time of the day.`,
    manufactured_date: new Date(),
    stock: 1050,
  },
  {
    name: "Smoky Ecstasy",
    price: 200,
    desc: `Our Smoky Ecstasy tea is a delight for those who enjoy their tea with a twist.

    This one-of-a-kind tea is rich and flavoursome, with a unique ‘smoky’ aroma and flavour, and a subtle mango and pinewood after-taste. If you like a cup of Lapsang Souchong or Russian Caravan, this is the tea for you.
    
    Handcrafted in small batches and ideal as an evening drink, Smoky Ecstasy is earthy, robust and energising, with a hint of smokiness.`,
    manufactured_date: new Date(),
    stock: 1060,
  },
  {
    name: "Tippy Reserve",
    price: 1700,
    desc: `Awarded ‘Gold’ in the Single Origin Black Tea category in Australia’s premier tea awards - the 2019 Golden Leaf Awards - our Tippy Reserve black tea is one we’re certainly proud of!

    Golden in colour and light and fruity in taste, this calming, satisfying tea makes for the perfect morning or afternoon cuppa.
    
    Tippy Reserve’s exquisite glittering buds are unique to the tea plants of Assam and add to the charm of this delightful tea. `,
    manufactured_date: new Date(),
    stock: 1009,
  },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("products", data, {
      fields: ["name", "price", "desc", "manufactured_date", "stock"],
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};
