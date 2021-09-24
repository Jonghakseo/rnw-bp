type MockReturnType = { data: string; params: any };

export async function mockAPI(params: any): Promise<MockReturnType> {
  // const { data } = await request({
  //   method: Method.GET,
  //   url: `${API_URL}/test`,
  // });

  const mockPromise = new Promise<MockReturnType>((resolve) => {
    setTimeout(() => {
      resolve({ data: `mock${Date.now().toString()}`, params });
    }, 1000);
  });

  return await mockPromise;
}
