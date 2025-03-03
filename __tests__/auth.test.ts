import { getAdminUser, getAuthUser } from '../utils/actions';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

// USER AUTH
//mock currentUser
jest.mock('@clerk/nextjs/server', () => ({
  currentUser: jest.fn(),
}));
//mock redirect
jest.mock('next/navigation', () => ({
  redirect: jest.fn(),
}));

//start tests
describe('getAuthUser and getAdminUser', () => {
  beforeAll(() => {
    process.env.ADMIN_ID = 'admin123';
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('returns user if authenticated', async () => {
    (currentUser as jest.Mock).mockResolvedValue({
      id: 'user123',
      email: 'test@example.com',
    });
    const user = await getAuthUser();
    expect(user).toEqual({ id: 'user123', email: 'test@example.com' });
    expect(redirect).not.toHaveBeenCalled();
  });

  test('redirects if no user found', async () => {
    (currentUser as jest.Mock).mockResolvedValue(null);
    await getAuthUser();
    expect(redirect).toHaveBeenCalledWith('/');
  });

  test('returns user if admin', async () => {
    (currentUser as jest.Mock).mockResolvedValue({
      id: 'admin123',
      email: 'admin@example.com',
    });
    const admin = await getAdminUser();
    expect(admin).toEqual({ id: 'admin123', email: 'admin@example.com' });
    expect(redirect).not.toHaveBeenCalled();
  });

  test('redirects if no admin found', async () => {
    (currentUser as jest.Mock).mockResolvedValue({
      id: 'user123', // User is not an admin
      email: 'user@example.com',
    });
    await getAdminUser();
    expect(redirect).toHaveBeenCalledWith('/');
  });
});
