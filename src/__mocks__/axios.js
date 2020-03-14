export default {
  get: jest.fn(() =>
    Promise.resolve({
      data: [
        {
          id: 1,
          title: "Mocked blog post"
        },
        {
          id: 2,
          title: "Mocked tech post"
        }
      ]
    })
  )
};
