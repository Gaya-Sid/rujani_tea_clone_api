"use strict";

const data = [
  {
    productId: 1,
    url:
      "//cdn.shopify.com/s/files/1/0287/1620/4135/products/EarlGrey_Brew2_1152x768_b5d1d1b0-5ffc-4935-b06b-3c1b94e80a93_200x.jpg?v=1592635854 200w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/EarlGrey_Brew2_1152x768_b5d1d1b0-5ffc-4935-b06b-3c1b94e80a93_300x.jpg?v=1592635854 300w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/EarlGrey_Brew2_1152x768_b5d1d1b0-5ffc-4935-b06b-3c1b94e80a93_400x.jpg?v=1592635854 400w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/EarlGrey_Brew2_1152x768_b5d1d1b0-5ffc-4935-b06b-3c1b94e80a93_600x.jpg?v=1592635854 600w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/EarlGrey_Brew2_1152x768_b5d1d1b0-5ffc-4935-b06b-3c1b94e80a93_800x.jpg?v=1592635854 800w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/EarlGrey_Brew2_1152x768_b5d1d1b0-5ffc-4935-b06b-3c1b94e80a93_900x.jpg?v=1592635854 900w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/EarlGrey_Brew2_1152x768_b5d1d1b0-5ffc-4935-b06b-3c1b94e80a93_1000x.jpg?v=1592635854 1000w",
    resource_id: "product_img",
  },
  {
    productId: 1,
    url:
      "//cdn.shopify.com/s/files/1/0287/1620/4135/products/EarlGrey2_1152x768_21eea7d8-d791-4586-9968-c479d9ce26b5_200x.jpg?v=1592635854 200w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/EarlGrey2_1152x768_21eea7d8-d791-4586-9968-c479d9ce26b5_400x.jpg?v=1592635854 400w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/EarlGrey2_1152x768_21eea7d8-d791-4586-9968-c479d9ce26b5_600x.jpg?v=1592635854 600w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/EarlGrey2_1152x768_21eea7d8-d791-4586-9968-c479d9ce26b5_700x.jpg?v=1592635854 700w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/EarlGrey2_1152x768_21eea7d8-d791-4586-9968-c479d9ce26b5_800x.jpg?v=1592635854 800w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/EarlGrey2_1152x768_21eea7d8-d791-4586-9968-c479d9ce26b5_900x.jpg?v=1592635854 900w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/EarlGrey2_1152x768_21eea7d8-d791-4586-9968-c479d9ce26b5_1000x.jpg?v=1592635854 1000w",
    resource_id: "product_img",
  },
  {
    productId: 2,
    url:
      "//cdn.shopify.com/s/files/1/0287/1620/4135/products/Emerald_Brew_1800x1200_18475402-c52b-4d1c-aa2c-bda8a2a251ed_200x.jpg?v=1592636002 200w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Emerald_Brew_1800x1200_18475402-c52b-4d1c-aa2c-bda8a2a251ed_300x.jpg?v=1592636002 300w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Emerald_Brew_1800x1200_18475402-c52b-4d1c-aa2c-bda8a2a251ed_400x.jpg?v=1592636002 400w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Emerald_Brew_1800x1200_18475402-c52b-4d1c-aa2c-bda8a2a251ed_600x.jpg?v=1592636002 600w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Emerald_Brew_1800x1200_18475402-c52b-4d1c-aa2c-bda8a2a251ed_800x.jpg?v=1592636002 800w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Emerald_Brew_1800x1200_18475402-c52b-4d1c-aa2c-bda8a2a251ed_900x.jpg?v=1592636002 900w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Emerald_Brew_1800x1200_18475402-c52b-4d1c-aa2c-bda8a2a251ed_1000x.jpg?v=1592636002 1000w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Emerald_Brew_1800x1200_18475402-c52b-4d1c-aa2c-bda8a2a251ed_1200x.jpg?v=1592636002 1200w",
    resource_id: "product_img",
  },
  {
    productId: 2,
    url:
      "//cdn.shopify.com/s/files/1/0287/1620/4135/products/EmeraldTea_200x.jpg?v=1592636002 200w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/EmeraldTea_400x.jpg?v=1592636002 400w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/EmeraldTea_600x.jpg?v=1592636002 600w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/EmeraldTea_700x.jpg?v=1592636002 700w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/EmeraldTea_800x.jpg?v=1592636002 800w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/EmeraldTea_900x.jpg?v=1592636002 900w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/EmeraldTea_1000x.jpg?v=1592636002 1000w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/EmeraldTea_1200x.jpg?v=1592636002 1200w",
    resource_id: "product_img",
  },
  {
    productId: 3,
    url:
      "//cdn.shopify.com/s/files/1/0287/1620/4135/products/Exotica_Flat_Brew_1800x1200_6de6e257-1eb5-447b-b082-f9e4eae576d9_200x.jpg?v=1592636198 200w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Exotica_Flat_Brew_1800x1200_6de6e257-1eb5-447b-b082-f9e4eae576d9_300x.jpg?v=1592636198 300w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Exotica_Flat_Brew_1800x1200_6de6e257-1eb5-447b-b082-f9e4eae576d9_400x.jpg?v=1592636198 400w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Exotica_Flat_Brew_1800x1200_6de6e257-1eb5-447b-b082-f9e4eae576d9_600x.jpg?v=1592636198 600w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Exotica_Flat_Brew_1800x1200_6de6e257-1eb5-447b-b082-f9e4eae576d9_800x.jpg?v=1592636198 800w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Exotica_Flat_Brew_1800x1200_6de6e257-1eb5-447b-b082-f9e4eae576d9_900x.jpg?v=1592636198 900w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Exotica_Flat_Brew_1800x1200_6de6e257-1eb5-447b-b082-f9e4eae576d9_1000x.jpg?v=1592636198 1000w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Exotica_Flat_Brew_1800x1200_6de6e257-1eb5-447b-b082-f9e4eae576d9_1200x.jpg?v=1592636198 1200w",
    resource_id: "product_img",
  },
  {
    productId: 3,
    url:
      "//cdn.shopify.com/s/files/1/0287/1620/4135/products/ExoticaFlatLeaf_200x.jpg?v=1592636199 200w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/ExoticaFlatLeaf_400x.jpg?v=1592636199 400w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/ExoticaFlatLeaf_600x.jpg?v=1592636199 600w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/ExoticaFlatLeaf_700x.jpg?v=1592636199 700w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/ExoticaFlatLeaf_800x.jpg?v=1592636199 800w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/ExoticaFlatLeaf_900x.jpg?v=1592636199 900w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/ExoticaFlatLeaf_1000x.jpg?v=1592636199 1000w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/ExoticaFlatLeaf_1200x.jpg?v=1592636199 1200w",
    resource_id: "product_img",
  },
  {
    productId: 4,
    url:
      "//cdn.shopify.com/s/files/1/0287/1620/4135/products/Gold_Tea_Brew_1800x1200_5c23f6b5-68fb-4ccf-aacf-0a64a2abe693_200x.jpg?v=1592636391 200w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Gold_Tea_Brew_1800x1200_5c23f6b5-68fb-4ccf-aacf-0a64a2abe693_300x.jpg?v=1592636391 300w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Gold_Tea_Brew_1800x1200_5c23f6b5-68fb-4ccf-aacf-0a64a2abe693_400x.jpg?v=1592636391 400w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Gold_Tea_Brew_1800x1200_5c23f6b5-68fb-4ccf-aacf-0a64a2abe693_600x.jpg?v=1592636391 600w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Gold_Tea_Brew_1800x1200_5c23f6b5-68fb-4ccf-aacf-0a64a2abe693_800x.jpg?v=1592636391 800w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Gold_Tea_Brew_1800x1200_5c23f6b5-68fb-4ccf-aacf-0a64a2abe693_900x.jpg?v=1592636391 900w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Gold_Tea_Brew_1800x1200_5c23f6b5-68fb-4ccf-aacf-0a64a2abe693_1000x.jpg?v=1592636391 1000w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Gold_Tea_Brew_1800x1200_5c23f6b5-68fb-4ccf-aacf-0a64a2abe693_1200x.jpg?v=1592636391 1200w",
    resource_id: "product_img",
  },
  {
    productId: 4,
    url:
      "//cdn.shopify.com/s/files/1/0287/1620/4135/products/GoldTeaLeaf_200x.jpg?v=1592636392 200w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/GoldTeaLeaf_400x.jpg?v=1592636392 400w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/GoldTeaLeaf_600x.jpg?v=1592636392 600w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/GoldTeaLeaf_700x.jpg?v=1592636392 700w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/GoldTeaLeaf_800x.jpg?v=1592636392 800w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/GoldTeaLeaf_900x.jpg?v=1592636392 900w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/GoldTeaLeaf_1000x.jpg?v=1592636392 1000w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/GoldTeaLeaf_1200x.jpg?v=1592636392 1200w",
    resource_id: "product_img",
  },
  {
    productId: 5,
    url:
      "//cdn.shopify.com/s/files/1/0287/1620/4135/products/Moon_Tea_Gold_Brew_1800x1200_5a15d04c-9a67-4465-b059-3dae131cd82f_200x.jpg?v=1592636562 200w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Moon_Tea_Gold_Brew_1800x1200_5a15d04c-9a67-4465-b059-3dae131cd82f_300x.jpg?v=1592636562 300w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Moon_Tea_Gold_Brew_1800x1200_5a15d04c-9a67-4465-b059-3dae131cd82f_400x.jpg?v=1592636562 400w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Moon_Tea_Gold_Brew_1800x1200_5a15d04c-9a67-4465-b059-3dae131cd82f_600x.jpg?v=1592636562 600w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Moon_Tea_Gold_Brew_1800x1200_5a15d04c-9a67-4465-b059-3dae131cd82f_800x.jpg?v=1592636562 800w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Moon_Tea_Gold_Brew_1800x1200_5a15d04c-9a67-4465-b059-3dae131cd82f_900x.jpg?v=1592636562 900w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Moon_Tea_Gold_Brew_1800x1200_5a15d04c-9a67-4465-b059-3dae131cd82f_1000x.jpg?v=1592636562 1000w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Moon_Tea_Gold_Brew_1800x1200_5a15d04c-9a67-4465-b059-3dae131cd82f_1200x.jpg?v=1592636562 1200w",
    resource_id: "product_img",
  },
  {
    productId: 5,
    url:
      "//cdn.shopify.com/s/files/1/0287/1620/4135/products/MoonTeaGold_200x.jpg?v=1592636563 200w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/MoonTeaGold_400x.jpg?v=1592636563 400w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/MoonTeaGold_600x.jpg?v=1592636563 600w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/MoonTeaGold_700x.jpg?v=1592636563 700w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/MoonTeaGold_800x.jpg?v=1592636563 800w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/MoonTeaGold_900x.jpg?v=1592636563 900w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/MoonTeaGold_1000x.jpg?v=1592636563 1000w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/MoonTeaGold_1200x.jpg?v=1592636563 1200w",
    resource_id: "product_img",
  },
  {
    productId: 6,
    url:
      "//cdn.shopify.com/s/files/1/0287/1620/4135/products/Morning_Special_Brew_1800x1200_63391cb5-0d79-4f7e-a475-339d3f2d20c7_200x.jpg?v=1592637322 200w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Morning_Special_Brew_1800x1200_63391cb5-0d79-4f7e-a475-339d3f2d20c7_300x.jpg?v=1592637322 300w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Morning_Special_Brew_1800x1200_63391cb5-0d79-4f7e-a475-339d3f2d20c7_400x.jpg?v=1592637322 400w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Morning_Special_Brew_1800x1200_63391cb5-0d79-4f7e-a475-339d3f2d20c7_600x.jpg?v=1592637322 600w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Morning_Special_Brew_1800x1200_63391cb5-0d79-4f7e-a475-339d3f2d20c7_800x.jpg?v=1592637322 800w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Morning_Special_Brew_1800x1200_63391cb5-0d79-4f7e-a475-339d3f2d20c7_900x.jpg?v=1592637322 900w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Morning_Special_Brew_1800x1200_63391cb5-0d79-4f7e-a475-339d3f2d20c7_1000x.jpg?v=1592637322 1000w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Morning_Special_Brew_1800x1200_63391cb5-0d79-4f7e-a475-339d3f2d20c7_1200x.jpg?v=1592637322 1200w",
    resource_id: "product_img",
  },
  {
    productId: 6,
    url:
      "//cdn.shopify.com/s/files/1/0287/1620/4135/products/MorningSpecial_200x.jpg?v=1592637323 200w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/MorningSpecial_400x.jpg?v=1592637323 400w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/MorningSpecial_600x.jpg?v=1592637323 600w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/MorningSpecial_700x.jpg?v=1592637323 700w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/MorningSpecial_800x.jpg?v=1592637323 800w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/MorningSpecial_900x.jpg?v=1592637323 900w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/MorningSpecial_1000x.jpg?v=1592637323 1000w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/MorningSpecial_1200x.jpg?v=1592637323 1200w",
    resource_id: "product_img",
  },
  {
    productId: 7,
    url:
      "//cdn.shopify.com/s/files/1/0287/1620/4135/products/45A0538_Rujani_200x.jpg?v=1595572800 200w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/45A0538_Rujani_300x.jpg?v=1595572800 300w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/45A0538_Rujani_400x.jpg?v=1595572800 400w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/45A0538_Rujani_600x.jpg?v=1595572800 600w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/45A0538_Rujani_800x.jpg?v=1595572800 800w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/45A0538_Rujani_900x.jpg?v=1595572800 900w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/45A0538_Rujani_1000x.jpg?v=1595572800 1000w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/45A0538_Rujani_1200x.jpg?v=1595572800 1200w",
    resource_id: "product_img",
  },
  {
    productId: 7,
    url:
      "//cdn.shopify.com/s/files/1/0287/1620/4135/products/45A0423_Rujani-MountainMist_200x.jpg?v=1595572800 200w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/45A0423_Rujani-MountainMist_400x.jpg?v=1595572800 400w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/45A0423_Rujani-MountainMist_600x.jpg?v=1595572800 600w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/45A0423_Rujani-MountainMist_700x.jpg?v=1595572800 700w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/45A0423_Rujani-MountainMist_800x.jpg?v=1595572800 800w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/45A0423_Rujani-MountainMist_900x.jpg?v=1595572800 900w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/45A0423_Rujani-MountainMist_1000x.jpg?v=1595572800 1000w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/45A0423_Rujani-MountainMist_1200x.jpg?v=1595572800 1200w",
    resource_id: "product_img",
  },
  {
    productId: 8,
    url:
      "//cdn.shopify.com/s/files/1/0287/1620/4135/products/Muscaltel_Whole_Leaf_Brew_1800x1200_3504c197-24e3-4c65-a84a-258a320ad483_200x.jpg?v=1592637459 200w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Muscaltel_Whole_Leaf_Brew_1800x1200_3504c197-24e3-4c65-a84a-258a320ad483_300x.jpg?v=1592637459 300w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Muscaltel_Whole_Leaf_Brew_1800x1200_3504c197-24e3-4c65-a84a-258a320ad483_400x.jpg?v=1592637459 400w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Muscaltel_Whole_Leaf_Brew_1800x1200_3504c197-24e3-4c65-a84a-258a320ad483_600x.jpg?v=1592637459 600w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Muscaltel_Whole_Leaf_Brew_1800x1200_3504c197-24e3-4c65-a84a-258a320ad483_800x.jpg?v=1592637459 800w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Muscaltel_Whole_Leaf_Brew_1800x1200_3504c197-24e3-4c65-a84a-258a320ad483_900x.jpg?v=1592637459 900w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Muscaltel_Whole_Leaf_Brew_1800x1200_3504c197-24e3-4c65-a84a-258a320ad483_1000x.jpg?v=1592637459 1000w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Muscaltel_Whole_Leaf_Brew_1800x1200_3504c197-24e3-4c65-a84a-258a320ad483_1200x.jpg?v=1592637459 1200w",
    resource_id: "product_img",
  },
  {
    productId: 8,
    url:
      "//cdn.shopify.com/s/files/1/0287/1620/4135/products/Muscatel_200x.jpg?v=1592637459 200w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Muscatel_400x.jpg?v=1592637459 400w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Muscatel_600x.jpg?v=1592637459 600w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Muscatel_700x.jpg?v=1592637459 700w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Muscatel_800x.jpg?v=1592637459 800w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Muscatel_900x.jpg?v=1592637459 900w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Muscatel_1000x.jpg?v=1592637459 1000w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Muscatel_1200x.jpg?v=1592637459 1200w",
    resource_id: "product_img",
  },
  {
    productId: 9,
    url:
      "//cdn.shopify.com/s/files/1/0287/1620/4135/products/Black_Pearl_Brew_1800x1200_ba71b1ea-a5a2-4a57-bb36-51b654f45964_200x.jpg?v=1592637762 200w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Black_Pearl_Brew_1800x1200_ba71b1ea-a5a2-4a57-bb36-51b654f45964_300x.jpg?v=1592637762 300w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Black_Pearl_Brew_1800x1200_ba71b1ea-a5a2-4a57-bb36-51b654f45964_400x.jpg?v=1592637762 400w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Black_Pearl_Brew_1800x1200_ba71b1ea-a5a2-4a57-bb36-51b654f45964_600x.jpg?v=1592637762 600w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Black_Pearl_Brew_1800x1200_ba71b1ea-a5a2-4a57-bb36-51b654f45964_800x.jpg?v=1592637762 800w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Black_Pearl_Brew_1800x1200_ba71b1ea-a5a2-4a57-bb36-51b654f45964_900x.jpg?v=1592637762 900w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Black_Pearl_Brew_1800x1200_ba71b1ea-a5a2-4a57-bb36-51b654f45964_1000x.jpg?v=1592637762 1000w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Black_Pearl_Brew_1800x1200_ba71b1ea-a5a2-4a57-bb36-51b654f45964_1200x.jpg?v=1592637762 1200w",
    resource_id: "product_img",
  },
  {
    productId: 9,
    url:
      "//cdn.shopify.com/s/files/1/0287/1620/4135/products/BlackPearl_200x.jpg?v=1592637763 200w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/BlackPearl_400x.jpg?v=1592637763 400w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/BlackPearl_600x.jpg?v=1592637763 600w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/BlackPearl_700x.jpg?v=1592637763 700w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/BlackPearl_800x.jpg?v=1592637763 800w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/BlackPearl_900x.jpg?v=1592637763 900w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/BlackPearl_1000x.jpg?v=1592637763 1000w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/BlackPearl_1200x.jpg?v=1592637763 1200w",
    resource_id: "product_img",
  },
  {
    productId: 10,
    url:
      "//cdn.shopify.com/s/files/1/0287/1620/4135/products/Assamica_Premium_Orthodox_Brew_1800x1200_5fb1bacd-2fe0-4567-af93-ba58a3f3270f_200x.jpg?v=1592637908 200w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Assamica_Premium_Orthodox_Brew_1800x1200_5fb1bacd-2fe0-4567-af93-ba58a3f3270f_300x.jpg?v=1592637908 300w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Assamica_Premium_Orthodox_Brew_1800x1200_5fb1bacd-2fe0-4567-af93-ba58a3f3270f_400x.jpg?v=1592637908 400w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Assamica_Premium_Orthodox_Brew_1800x1200_5fb1bacd-2fe0-4567-af93-ba58a3f3270f_600x.jpg?v=1592637908 600w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Assamica_Premium_Orthodox_Brew_1800x1200_5fb1bacd-2fe0-4567-af93-ba58a3f3270f_800x.jpg?v=1592637908 800w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Assamica_Premium_Orthodox_Brew_1800x1200_5fb1bacd-2fe0-4567-af93-ba58a3f3270f_900x.jpg?v=1592637908 900w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Assamica_Premium_Orthodox_Brew_1800x1200_5fb1bacd-2fe0-4567-af93-ba58a3f3270f_1000x.jpg?v=1592637908 1000w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Assamica_Premium_Orthodox_Brew_1800x1200_5fb1bacd-2fe0-4567-af93-ba58a3f3270f_1200x.jpg?v=1592637908 1200w",
    resource_id: "product_img",
  },
  {
    productId: 10,
    url:
      "//cdn.shopify.com/s/files/1/0287/1620/4135/products/PremiumOrthodox_200x.jpg?v=1592637908 200w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/PremiumOrthodox_400x.jpg?v=1592637908 400w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/PremiumOrthodox_600x.jpg?v=1592637908 600w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/PremiumOrthodox_700x.jpg?v=1592637908 700w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/PremiumOrthodox_800x.jpg?v=1592637908 800w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/PremiumOrthodox_900x.jpg?v=1592637908 900w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/PremiumOrthodox_1000x.jpg?v=1592637908 1000w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/PremiumOrthodox_1200x.jpg?v=1592637908 1200w",
    resource_id: "product_img",
  },
  {
    productId: 11,
    url:
      "//cdn.shopify.com/s/files/1/0287/1620/4135/products/Rose_Green_Brew_1800x1200_b08d51f1-a5b3-4681-8df3-9ce9a676df56_200x.jpg?v=1592638173 200w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Rose_Green_Brew_1800x1200_b08d51f1-a5b3-4681-8df3-9ce9a676df56_300x.jpg?v=1592638173 300w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Rose_Green_Brew_1800x1200_b08d51f1-a5b3-4681-8df3-9ce9a676df56_400x.jpg?v=1592638173 400w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Rose_Green_Brew_1800x1200_b08d51f1-a5b3-4681-8df3-9ce9a676df56_600x.jpg?v=1592638173 600w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Rose_Green_Brew_1800x1200_b08d51f1-a5b3-4681-8df3-9ce9a676df56_800x.jpg?v=1592638173 800w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Rose_Green_Brew_1800x1200_b08d51f1-a5b3-4681-8df3-9ce9a676df56_900x.jpg?v=1592638173 900w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Rose_Green_Brew_1800x1200_b08d51f1-a5b3-4681-8df3-9ce9a676df56_1000x.jpg?v=1592638173 1000w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Rose_Green_Brew_1800x1200_b08d51f1-a5b3-4681-8df3-9ce9a676df56_1200x.jpg?v=1592638173 1200w",
    resource_id: "product_img",
  },
  {
    productId: 11,
    url:
      "//cdn.shopify.com/s/files/1/0287/1620/4135/products/RoseGreenTea_200x.jpg?v=1592638174 200w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/RoseGreenTea_400x.jpg?v=1592638174 400w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/RoseGreenTea_600x.jpg?v=1592638174 600w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/RoseGreenTea_700x.jpg?v=1592638174 700w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/RoseGreenTea_800x.jpg?v=1592638174 800w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/RoseGreenTea_900x.jpg?v=1592638174 900w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/RoseGreenTea_1000x.jpg?v=1592638174 1000w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/RoseGreenTea_1200x.jpg?v=1592638174 1200w",
    resource_id: "product_img",
  },
  {
    productId: 12,
    url:
      "//cdn.shopify.com/s/files/1/0287/1620/4135/products/Royale_Golden_CTC_Brew_1800x1200_194d03d5-2473-43d1-b8bd-b2f71193d079_200x.jpg?v=1592638407 200w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Royale_Golden_CTC_Brew_1800x1200_194d03d5-2473-43d1-b8bd-b2f71193d079_300x.jpg?v=1592638407 300w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Royale_Golden_CTC_Brew_1800x1200_194d03d5-2473-43d1-b8bd-b2f71193d079_400x.jpg?v=1592638407 400w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Royale_Golden_CTC_Brew_1800x1200_194d03d5-2473-43d1-b8bd-b2f71193d079_600x.jpg?v=1592638407 600w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Royale_Golden_CTC_Brew_1800x1200_194d03d5-2473-43d1-b8bd-b2f71193d079_800x.jpg?v=1592638407 800w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Royale_Golden_CTC_Brew_1800x1200_194d03d5-2473-43d1-b8bd-b2f71193d079_900x.jpg?v=1592638407 900w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Royale_Golden_CTC_Brew_1800x1200_194d03d5-2473-43d1-b8bd-b2f71193d079_1000x.jpg?v=1592638407 1000w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Royale_Golden_CTC_Brew_1800x1200_194d03d5-2473-43d1-b8bd-b2f71193d079_1200x.jpg?v=1592638407 1200w",
    resource_id: "product_img",
  },
  {
    productId: 12,
    url:
      "//cdn.shopify.com/s/files/1/0287/1620/4135/products/CTCRoyale_200x.jpg?v=1592638322 200w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/CTCRoyale_400x.jpg?v=1592638322 400w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/CTCRoyale_600x.jpg?v=1592638322 600w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/CTCRoyale_700x.jpg?v=1592638322 700w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/CTCRoyale_800x.jpg?v=1592638322 800w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/CTCRoyale_900x.jpg?v=1592638322 900w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/CTCRoyale_1000x.jpg?v=1592638322 1000w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/CTCRoyale_1200x.jpg?v=1592638322 1200w",
    resource_id: "product_img",
  },
  {
    productId: 13,
    url:
      "//cdn.shopify.com/s/files/1/0287/1620/4135/products/Speciality_White_Rujani_Brew_1800x1200_16e7a734-8684-4718-9a08-b2e37d7a4398_200x.jpg?v=1592634768 200w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Speciality_White_Rujani_Brew_1800x1200_16e7a734-8684-4718-9a08-b2e37d7a4398_300x.jpg?v=1592634768 300w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Speciality_White_Rujani_Brew_1800x1200_16e7a734-8684-4718-9a08-b2e37d7a4398_400x.jpg?v=1592634768 400w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Speciality_White_Rujani_Brew_1800x1200_16e7a734-8684-4718-9a08-b2e37d7a4398_600x.jpg?v=1592634768 600w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Speciality_White_Rujani_Brew_1800x1200_16e7a734-8684-4718-9a08-b2e37d7a4398_800x.jpg?v=1592634768 800w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Speciality_White_Rujani_Brew_1800x1200_16e7a734-8684-4718-9a08-b2e37d7a4398_900x.jpg?v=1592634768 900w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Speciality_White_Rujani_Brew_1800x1200_16e7a734-8684-4718-9a08-b2e37d7a4398_1000x.jpg?v=1592634768 1000w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Speciality_White_Rujani_Brew_1800x1200_16e7a734-8684-4718-9a08-b2e37d7a4398_1200x.jpg?v=1592634768 1200w",
    resource_id: "product_img",
  },
  {
    productId: 13,
    url:
      "//cdn.shopify.com/s/files/1/0287/1620/4135/products/SpecialityWhiteLeaf_200x.jpg?v=1592634706 200w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/SpecialityWhiteLeaf_400x.jpg?v=1592634706 400w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/SpecialityWhiteLeaf_600x.jpg?v=1592634706 600w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/SpecialityWhiteLeaf_700x.jpg?v=1592634706 700w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/SpecialityWhiteLeaf_800x.jpg?v=1592634706 800w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/SpecialityWhiteLeaf_900x.jpg?v=1592634706 900w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/SpecialityWhiteLeaf_1000x.jpg?v=1592634706 1000w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/SpecialityWhiteLeaf_1200x.jpg?v=1592634706 1200w",
    resource_id: "product_img",
  },
  {
    productId: 14,
    url:
      "//cdn.shopify.com/s/files/1/0287/1620/4135/products/Silky_Silver_Needle_Brew_1800x1200_4bd45449-4bb8-44bf-a796-d1d34ac2db6e_200x.jpg?v=1592635452 200w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Silky_Silver_Needle_Brew_1800x1200_4bd45449-4bb8-44bf-a796-d1d34ac2db6e_300x.jpg?v=1592635452 300w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Silky_Silver_Needle_Brew_1800x1200_4bd45449-4bb8-44bf-a796-d1d34ac2db6e_400x.jpg?v=1592635452 400w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Silky_Silver_Needle_Brew_1800x1200_4bd45449-4bb8-44bf-a796-d1d34ac2db6e_600x.jpg?v=1592635452 600w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Silky_Silver_Needle_Brew_1800x1200_4bd45449-4bb8-44bf-a796-d1d34ac2db6e_800x.jpg?v=1592635452 800w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Silky_Silver_Needle_Brew_1800x1200_4bd45449-4bb8-44bf-a796-d1d34ac2db6e_900x.jpg?v=1592635452 900w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Silky_Silver_Needle_Brew_1800x1200_4bd45449-4bb8-44bf-a796-d1d34ac2db6e_1000x.jpg?v=1592635452 1000w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Silky_Silver_Needle_Brew_1800x1200_4bd45449-4bb8-44bf-a796-d1d34ac2db6e_1200x.jpg?v=1592635452 1200w",
    resource_id: "product_img",
  },
  {
    productId: 14,
    url:
      "//cdn.shopify.com/s/files/1/0287/1620/4135/products/SilkySilverNeedleLeaf_200x.jpg?v=1592635454 200w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/SilkySilverNeedleLeaf_400x.jpg?v=1592635454 400w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/SilkySilverNeedleLeaf_600x.jpg?v=1592635454 600w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/SilkySilverNeedleLeaf_700x.jpg?v=1592635454 700w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/SilkySilverNeedleLeaf_800x.jpg?v=1592635454 800w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/SilkySilverNeedleLeaf_900x.jpg?v=1592635454 900w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/SilkySilverNeedleLeaf_1000x.jpg?v=1592635454 1000w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/SilkySilverNeedleLeaf_1200x.jpg?v=1592635454 1200w",
    resource_id: "product_img",
  },
  {
    productId: 15,
    url:
      "//cdn.shopify.com/s/files/1/0287/1620/4135/products/Smoky_Ecstacy_Brew_1800x1200_ba809294-8e4c-4f46-adfe-54e8a40fb791_200x.jpg?v=1592638570 200w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Smoky_Ecstacy_Brew_1800x1200_ba809294-8e4c-4f46-adfe-54e8a40fb791_300x.jpg?v=1592638570 300w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Smoky_Ecstacy_Brew_1800x1200_ba809294-8e4c-4f46-adfe-54e8a40fb791_400x.jpg?v=1592638570 400w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Smoky_Ecstacy_Brew_1800x1200_ba809294-8e4c-4f46-adfe-54e8a40fb791_600x.jpg?v=1592638570 600w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Smoky_Ecstacy_Brew_1800x1200_ba809294-8e4c-4f46-adfe-54e8a40fb791_800x.jpg?v=1592638570 800w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Smoky_Ecstacy_Brew_1800x1200_ba809294-8e4c-4f46-adfe-54e8a40fb791_900x.jpg?v=1592638570 900w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Smoky_Ecstacy_Brew_1800x1200_ba809294-8e4c-4f46-adfe-54e8a40fb791_1000x.jpg?v=1592638570 1000w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Smoky_Ecstacy_Brew_1800x1200_ba809294-8e4c-4f46-adfe-54e8a40fb791_1200x.jpg?v=1592638570 1200w",
    resource_id: "product_img",
  },
  {
    productId: 15,
    url:
      "//cdn.shopify.com/s/files/1/0287/1620/4135/products/SmokyEcstasy_200x.jpg?v=1592638570 200w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/SmokyEcstasy_400x.jpg?v=1592638570 400w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/SmokyEcstasy_600x.jpg?v=1592638570 600w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/SmokyEcstasy_700x.jpg?v=1592638570 700w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/SmokyEcstasy_800x.jpg?v=1592638570 800w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/SmokyEcstasy_900x.jpg?v=1592638570 900w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/SmokyEcstasy_1000x.jpg?v=1592638570 1000w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/SmokyEcstasy_1200x.jpg?v=1592638570 1200w",
    resource_id: "product_img",
  },
  {
    productId: 16,
    url:
      "//cdn.shopify.com/s/files/1/0287/1620/4135/products/Tippy_Reserve_Brew_1800x1200_2d73a829-d474-4ff2-8295-ca2e1ca958f4_200x.jpg?v=1592638713 200w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Tippy_Reserve_Brew_1800x1200_2d73a829-d474-4ff2-8295-ca2e1ca958f4_300x.jpg?v=1592638713 300w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Tippy_Reserve_Brew_1800x1200_2d73a829-d474-4ff2-8295-ca2e1ca958f4_400x.jpg?v=1592638713 400w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Tippy_Reserve_Brew_1800x1200_2d73a829-d474-4ff2-8295-ca2e1ca958f4_600x.jpg?v=1592638713 600w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Tippy_Reserve_Brew_1800x1200_2d73a829-d474-4ff2-8295-ca2e1ca958f4_800x.jpg?v=1592638713 800w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Tippy_Reserve_Brew_1800x1200_2d73a829-d474-4ff2-8295-ca2e1ca958f4_900x.jpg?v=1592638713 900w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Tippy_Reserve_Brew_1800x1200_2d73a829-d474-4ff2-8295-ca2e1ca958f4_1000x.jpg?v=1592638713 1000w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/Tippy_Reserve_Brew_1800x1200_2d73a829-d474-4ff2-8295-ca2e1ca958f4_1200x.jpg?v=1592638713 1200w",
    resource_id: "product_img",
  },
  {
    productId: 16,
    url:
      "//cdn.shopify.com/s/files/1/0287/1620/4135/products/TippyReserveLeaf_200x.jpg?v=1592638714 200w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/TippyReserveLeaf_400x.jpg?v=1592638714 400w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/TippyReserveLeaf_600x.jpg?v=1592638714 600w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/TippyReserveLeaf_700x.jpg?v=1592638714 700w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/TippyReserveLeaf_800x.jpg?v=1592638714 800w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/TippyReserveLeaf_900x.jpg?v=1592638714 900w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/TippyReserveLeaf_1000x.jpg?v=1592638714 1000w, //cdn.shopify.com/s/files/1/0287/1620/4135/products/TippyReserveLeaf_1200x.jpg?v=1592638714 1200w",
    resource_id: "product_img",
  },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("media", data, {
      fields: ["productId", "url", "resource_id"],
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("media", null, {});
  },
};
