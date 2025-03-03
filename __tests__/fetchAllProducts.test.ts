import db from '../utils/db';
import { fetchAllProducts } from '../utils/actions';

jest.mock('../utils/db', () => ({
  product: {
    findMany: jest.fn(),
  },
}));

jest.mock('@supabase/supabase-js', () => ({
  createClient: jest.fn(() => ({
    from: jest.fn().mockReturnThis(),
    select: jest.fn().mockResolvedValue({ data: [], error: null }),
  })),
}));

describe('fetchAllProducts', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  beforeAll(() => {
    process.env.SUPABASE_URL = 'https://url-for-tests';
    process.env.SUPABASE_KEY = 'key-for-tests';
  });

  it('should fetch products based on search query and order them by createdAt desc', async () => {
    const mockProducts = [
      {
        id: '1',
        name: 'Product A',
        company: 'Company X',
        createdAt: '2022-01-01',
      },
      {
        id: '2',
        name: 'Product B',
        company: 'Company Y',
        createdAt: '2022-01-02',
      },
    ];

    const searchQuery = 'bed';
    (db.product.findMany as jest.Mock).mockResolvedValue(mockProducts);
    const products = await fetchAllProducts({ search: searchQuery });
    expect(products).toEqual(mockProducts);
    expect(db.product.findMany).toHaveBeenCalledWith({
      where: {
        OR: [
          { name: { contains: searchQuery, mode: 'insensitive' } },
          { company: { contains: searchQuery, mode: 'insensitive' } },
        ],
      },
      orderBy: { createdAt: 'desc' },
    });
  });
});
