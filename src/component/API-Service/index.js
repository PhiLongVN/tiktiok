import * as request from '-/utils/index';

export const Search = async (q, type = 'less') => {
  try {
    const result = await request.get('users/search', {
      params: {
        q,
        type,
      },
    });

    return result.data;
  } catch (error) {
    window.alert('Bị Lỗi Kết Nối Với Sever');
  }
};
