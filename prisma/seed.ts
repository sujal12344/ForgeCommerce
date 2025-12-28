import prisma from "./client";

async function seedIntoDB() {
  // To create tables from schema.prisma, run: npx prisma db push

  console.log("🌱 Starting database seeding...");

  // Clean existing data (optional - remove if you want to keep existing data)
  // console.log("🧹 Cleaning existing data...");
  // await prisma.$transaction([
  //   prisma.orderItem.deleteMany(),
  //   prisma.order.deleteMany(),
  //   prisma.image.deleteMany(),
  //   prisma.product.deleteMany(),
  //   prisma.color.deleteMany(),
  //   prisma.size.deleteMany(),
  //   prisma.category.deleteMany(),
  //   prisma.billBoard.deleteMany(),
  //   prisma.store.deleteMany(),
  // ]);

  // Create Store
  console.log("🏪 Creating store...");
  const store = await prisma.store.upsert({
    where: { id: "clkwya8dw0000lb082nevtsqf" },
    update: {},
    create: {
      id: "clkwya8dw0000lb082nevtsqf",
      name: "ForgeCom",
      userId: "user_37TghqIwElaGZ6C4qze8iWq1ZbU",
    },
  });

  const { name: StoreName, id: StoreId } = store;
  console.log("✅ Store created:", StoreName, "with ID:", StoreId);

  // Create Billboards (in parallel)
  console.log("🖼️  Creating billboards...");
  const [
    summerCollectionBillboard,
    winterSaleBillboard,
    newArrivalsBillboard,
    fashionTrendsBillboard,
  ] = await Promise.all([
    prisma.billBoard.create({
      data: {
        label: "Summer Collection",
        ImageUrl:
          "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1920&q=80",
        StoreId,
      },
    }),
    prisma.billBoard.create({
      data: {
        label: "Winter Sale",
        ImageUrl:
          "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&q=80",
        StoreId,
      },
    }),
    prisma.billBoard.create({
      data: {
        label: "New Arrivals",
        ImageUrl:
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80",
        StoreId,
      },
    }),
    prisma.billBoard.create({
      data: {
        label: "Fashion Trends",
        ImageUrl:
          "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1920&q=80",
        StoreId,
      },
    }),
  ]);

  console.log("✅ Created 4 billboards");

  // Create Categories (in parallel)
  console.log("📁 Creating categories...");
  const [
    clothingCategory,
    shoesCategory,
    accessoriesCategory,
    bagsCategory,
    shirtCategory,
    suitsCategory,
    tshirtsCategory,
  ] = await Promise.all([
    prisma.category.create({
      data: {
        name: "Clothing",
        StoreId,
        billboardId: summerCollectionBillboard.id,
      },
    }),
    prisma.category.create({
      data: {
        name: "Shoes",
        StoreId,
        billboardId: winterSaleBillboard.id,
      },
    }),
    prisma.category.create({
      data: {
        name: "Accessories",
        StoreId,
        billboardId: newArrivalsBillboard.id,
      },
    }),
    prisma.category.create({
      data: {
        name: "Bags",
        StoreId,
        billboardId: fashionTrendsBillboard.id,
      },
    }),
    prisma.category.create({
      data: {
        name: "Shirt",
        StoreId,
        billboardId: summerCollectionBillboard.id,
      },
    }),
    prisma.category.create({
      data: {
        name: "Suits",
        StoreId,
        billboardId: fashionTrendsBillboard.id,
      },
    }),
    prisma.category.create({
      data: {
        name: "T-Shirts",
        StoreId,
        billboardId: newArrivalsBillboard.id,
      },
    }),
  ]);

  console.log("✅ Created 7 categories");

  // Create Sizes
  console.log("📏 Creating sizes...");
  const [
    sizelessSize,
    extraSmallSize,
    smallSize,
    mediumSize,
    largeSize,
    extraLargeSize,
  ] = await Promise.all([
    prisma.size.create({
      data: { name: "sizeless", value: "sizeless", StoreId, },
    }),
    prisma.size.create({
      data: { name: "XS", value: "28", StoreId, },
    }),
    prisma.size.create({
      data: { name: "S", value: "30", StoreId, },
    }),
    prisma.size.create({
      data: { name: "M", value: "34", StoreId, },
    }),
    prisma.size.create({
      data: { name: "L", value: "38", StoreId, },
    }),
    prisma.size.create({
      data: { name: "XL", value: "42", StoreId, },
    }),
  ]);

  console.log("✅ Created 6 sizes");

  // Create Colors
  console.log("🎨 Creating colors...");
  const [
    goldColor,
    grayColor,
    greenColor,
    pinkColor,
    yellowColor,
    blueColor,
    blackColor,
  ] = await Promise.all([
    prisma.color.create({
      data: { name: "Gold", value: "gold", StoreId, },
    }),
    prisma.color.create({
      data: { name: "Gray", value: "gray", StoreId, },
    }),
    prisma.color.create({
      data: { name: "Green", value: "green", StoreId, },
    }),
    prisma.color.create({
      data: { name: "Pink", value: "pink", StoreId, },
    }),
    prisma.color.create({
      data: { name: "Yellow", value: "yellow", StoreId, },
    }),
    prisma.color.create({
      data: { name: "Blue", value: "blue", StoreId, },
    }),
    prisma.color.create({
      data: { name: "Black", value: "black", StoreId, },
    }),
  ]);

  console.log("✅ Created 7 colors");

  // Create Products (in parallel)
  console.log("🛍️  Creating products...");
  const [
    classicTShirtProduct,
    runningShoesProduct,
    leatherWalletProduct,
    denimJeansProduct,
    sportsWatchProduct,
    shirt3Product,
    shirt12Product,
    shirt2Product,
    suit3Product,
    duckTshirtProduct,
    trexProduct,
    suit4Product,
    tpTshirtsProduct,
    greenTshirt22Product,
    suit1Product,
  ] = await Promise.all([
    prisma.product.create({
      data: {
        name: "Classic T-Shirt",
        price: 29.99,
        description: "Comfortable cotton t-shirt for everyday wear",
        Featured: true,
        Archived: false,
        StoreId,
        categoryId: clothingCategory.id,
        sizeId: mediumSize.id,
        colorId: blackColor.id,
        images: {
          create: [
            {
              url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
            },
            {
              url: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800",
            },
          ],
        },
      },
    }),
    prisma.product.create({
      data: {
        name: "Running Shoes",
        price: 89.99,
        description: "Professional running shoes with excellent cushioning",
        Featured: true,
        Archived: false,
        StoreId,
        categoryId: shoesCategory.id,
        sizeId: largeSize.id,
        colorId: blueColor.id,
        images: {
          create: [
            {
              url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
            },
          ],
        },
      },
    }),
    prisma.product.create({
      data: {
        name: "Leather Wallet",
        price: 49.99,
        description: "Premium leather wallet with multiple card slots",
        Featured: false,
        Archived: true,
        StoreId,
        categoryId: accessoriesCategory.id,
        sizeId: sizelessSize.id,
        colorId: grayColor.id,
        images: {
          create: [
            {
              url: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800",
            },
          ],
        },
      },
    }),
    prisma.product.create({
      data: {
        name: "Denim Jeans",
        price: 69.99,
        description: "Classic blue denim jeans with slim fit",
        Featured: true,
        Archived: false,
        StoreId,
        categoryId: clothingCategory.id,
        sizeId: largeSize.id,
        colorId: blueColor.id,
        images: {
          create: [
            {
              url: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800",
            },
          ],
        },
      },
    }),
    prisma.product.create({
      data: {
        name: "Sports Watch",
        price: 129.99,
        description: "Digital sports watch with heart rate monitor",
        Featured: false,
        Archived: true,
        StoreId,
        categoryId: accessoriesCategory.id,
        sizeId: sizelessSize.id,
        colorId: blackColor.id,
        images: {
          create: [
            {
              url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
            },
          ],
        },
      },
    }),
    prisma.product.create({
      data: {
        name: "Shirt 3",
        price: 24.0,
        description: "",
        Featured: true,
        Archived: false,
        StoreId,
        categoryId: shirtCategory.id,
        sizeId: mediumSize.id,
        colorId: greenColor.id,
        images: {
          create: [
            {
              url: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800",
            },
          ],
        },
      },
    }),
    prisma.product.create({
      data: {
        name: "Shirt12",
        price: 20.0,
        description: "",
        Featured: false,
        Archived: true,
        StoreId,
        categoryId: shirtCategory.id,
        sizeId: largeSize.id,
        colorId: yellowColor.id,
        images: {
          create: [
            {
              url: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800",
            },
          ],
        },
      },
    }),
    prisma.product.create({
      data: {
        name: "Shirt 2",
        price: 20.0,
        description: "",
        Featured: false,
        Archived: true,
        StoreId,
        categoryId: shirtCategory.id,
        sizeId: mediumSize.id,
        colorId: blueColor.id,
        images: {
          create: [
            {
              url: "https://images.unsplash.com/photo-1603252109360-909baaf261c7?w=800",
            },
          ],
        },
      },
    }),
    prisma.product.create({
      data: {
        name: "Suit 3",
        price: 110.0,
        description: "",
        Featured: true,
        Archived: false,
        StoreId,
        categoryId: suitsCategory.id,
        sizeId: smallSize.id,
        colorId: goldColor.id,
        images: {
          create: [
            {
              url: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800",
            },
          ],
        },
      },
    }),
    prisma.product.create({
      data: {
        name: "Duck Tshirt",
        price: 10.0,
        description: "",
        Featured: false,
        Archived: true,
        StoreId,
        categoryId: tshirtsCategory.id,
        sizeId: smallSize.id,
        colorId: blackColor.id,
        images: {
          create: [
            {
              url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800",
            },
          ],
        },
      },
    }),
    prisma.product.create({
      data: {
        name: "Trex",
        price: 100.0,
        description: "",
        Featured: false,
        Archived: true,
        StoreId,
        categoryId: tshirtsCategory.id,
        sizeId: largeSize.id,
        colorId: yellowColor.id,
        images: {
          create: [
            {
              url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800",
            },
          ],
        },
      },
    }),
    prisma.product.create({
      data: {
        name: "Suit 4",
        price: 120.0,
        description: "",
        Featured: true,
        Archived: false,
        StoreId,
        categoryId: suitsCategory.id,
        sizeId: mediumSize.id,
        colorId: grayColor.id,
        images: {
          create: [
            {
              url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
            },
          ],
        },
      },
    }),
    prisma.product.create({
      data: {
        name: "Tp_Tshirts",
        price: 20.0,
        description: "",
        Featured: true,
        Archived: false,
        StoreId,
        categoryId: tshirtsCategory.id,
        sizeId: extraSmallSize.id,
        colorId: blackColor.id,
        images: {
          create: [
            {
              url: "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=800",
            },
          ],
        },
      },
    }),
    prisma.product.create({
      data: {
        name: "Green Tshirt22",
        price: 15.0,
        description: "",
        Featured: false,
        Archived: true,
        StoreId,
        categoryId: tshirtsCategory.id,
        sizeId: mediumSize.id,
        colorId: greenColor.id,
        images: {
          create: [
            {
              url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
            },
          ],
        },
      },
    }),
    prisma.product.create({
      data: {
        name: "Suit 1",
        price: 105.0,
        description: "",
        Featured: true,
        Archived: false,
        StoreId,
        categoryId: suitsCategory.id,
        sizeId: largeSize.id,
        colorId: blackColor.id,
        images: {
          create: [
            {
              url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
            },
          ],
        },
      },
    }),
  ]);

  console.log("✅ Created 15 products");

  // Create Sample Orders (in parallel)
  console.log("📦 Creating sample orders...");
  const orders = await Promise.all([
    prisma.order.create({
      data: {
        name: "Rahul Sharma",
        Email: "rahul.sharma@gmail.com",
        phone: "+919876543210",
        address: "123 MG Road, Bangalore, Karnataka, 560001, IN",
        isPaid: true,
        StoreId,
        orderItems: {
          create: [
            { productId: classicTShirtProduct.id },
            { productId: runningShoesProduct.id },
          ],
        },
        createdAt: new Date("2024-09-15T10:00:00Z"),
      },
    }),
    prisma.order.create({
      data: {
        name: "Priya Patel",
        Email: "priya.patel@gmail.com",
        phone: "+919123456789",
        address: "456 CG Road, Ahmedabad, Gujarat, 380009, IN",
        isPaid: true,
        StoreId,
        orderItems: {
          create: [{ productId: leatherWalletProduct.id }],
        },
        createdAt: new Date("2024-03-20T10:00:00Z"),
      },
    }),
    // New Orders
    prisma.order.create({
      data: {
        name: "Amit Kumar",
        Email: "amit.kumar@outlook.com",
        phone: "",
        address: "",
        isPaid: false,
        StoreId,
        orderItems: {
          create: [{ productId: suit4Product.id }],
        },
      },
    }),
    prisma.order.create({
      data: {
        name: "Sneha Reddy",
        Email: "sneha.reddy@yahoo.com",
        phone: "+919834153453",
        address:
          "D/316 New shiv ashish, Achole Road, Nala Sopara, MH, 401209, IN",
        isPaid: true,
        StoreId,
        orderItems: {
          create: [{ productId: shirt12Product.id }],
        },
        createdAt: new Date("2024-08-18T10:00:00Z"),
      },
    }),
    prisma.order.create({
      data: {
        name: "Vikram Singh",
        Email: "vikram.singh@gmail.com",
        phone: "+918765432109",
        address: "78 Park Street, Kolkata, West Bengal, 700016, IN",
        isPaid: true,
        StoreId,
        orderItems: {
          create: [{ productId: shirt12Product.id }],
        },
        createdAt: new Date("2024-02-25T10:00:00Z"),
      },
    }),
    prisma.order.create({
      data: {
        name: "Ananya Iyer",
        Email: "ananya.iyer@hotmail.com",
        phone: "",
        address: "",
        isPaid: true,
        StoreId,
        orderItems: {
          create: [{ productId: shirt3Product.id }],
        },
        createdAt: new Date("2024-11-10T10:00:00Z"),
      },
    }),
    prisma.order.create({
      data: {
        name: "Rohan Verma",
        Email: "rohan.verma@gmail.com",
        phone: "+917890123456",
        address: "23 Nehru Place, New Delhi, Delhi, 110019, IN",
        isPaid: true,
        StoreId,
        orderItems: {
          create: [
            { productId: suit4Product.id },
            { productId: shirt2Product.id },
          ],
        },
        createdAt: new Date("2024-07-15T10:00:00Z"),
      },
    }),
    prisma.order.create({
      data: {
        name: "Kavya Nair",
        Email: "kavya.nair@gmail.com",
        phone: "+918901234567",
        address: "45 Marine Drive, Mumbai, Maharashtra, 400002, IN",
        isPaid: false,
        StoreId,
        orderItems: {
          create: [{ productId: suit4Product.id }],
        },
        createdAt: new Date("2025-03-21T10:00:00Z"),
      },
    }),
    prisma.order.create({
      data: {
        name: "Arjun Mehta",
        Email: "arjun.mehta@outlook.com",
        phone: "",
        address: "",
        isPaid: false,
        StoreId,
        orderItems: {
          create: [{ productId: suit4Product.id }],
        },
      },
    }),
    prisma.order.create({
      data: {
        name: "Neha Gupta",
        Email: "neha.gupta@gmail.com",
        phone: "+919518586936",
        address: "Kaneri, 1486, Bhiwandi, MH, 421302, IN",
        isPaid: true,
        StoreId,
        orderItems: {
          create: [{ productId: suit4Product.id }],
        },
        createdAt: new Date("2024-06-11T10:00:00Z"),
      },
    }),
    prisma.order.create({
      data: {
        name: "Aditya Joshi",
        Email: "aditya.joshi@yahoo.com",
        phone: "+918765432198",
        address: "12 FC Road, Pune, Maharashtra, 411004, IN",
        isPaid: false,
        StoreId,
        orderItems: {
          create: [{ productId: suit4Product.id }],
        },
      },
    }),
    prisma.order.create({
      data: {
        name: "Divya Kapoor",
        Email: "divya.kapoor@gmail.com",
        phone: "+919012345678",
        address: "89 Anna Salai, Chennai, Tamil Nadu, 600002, IN",
        isPaid: false,
        StoreId,
        orderItems: {
          create: [{ productId: suit4Product.id }],
        },
      },
    }),
  ]);

  console.log(`✅ Created ${orders.length} sample orders`);
}

seedIntoDB()
  .catch(e => {
    console.error("❌ Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log("🌱 Database seeding completed.");
  });
