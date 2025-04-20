import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const { category, brand, size, color } = req.query;

        const filters = {};
        if (category) filters.category = category;
        if (brand) filters.brand = brand;
        if (size) filters.size = size;
        if (color) filters.color = color;

        const products = await prisma.product.findMany({
          where: filters,
        });

        res.status(200).json(products);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
