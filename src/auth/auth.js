const users = [
    {
      email: "rick@gml.com",
      password: "123456",
      username: "rick",
    },
    {
      email: "morty@gml.com",
      password: "123456",
      username: "morty",
    },
    {
      email: "pepinillo@gml.com",
      password: "123456",
      username: "pepinillo",
    },
  ];

  
export const login = ({ email, password }) => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user === undefined) throw new Error();
    return user;
  };
  