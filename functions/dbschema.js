let db = {
  users: [
    {
      userId: "0fuIsD9DdCgUGE7EaR6APYC7vHg2",
      email: "new4@email.com",
      handle: "new4",
      createdAt: "2020-07-07T13:39:16.141Z",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/socialape-8bac0.appspot.com/o/no-img.png?alt=media",
      bio: "Hello my name is user",
      website: "https://user.com",
      location: "London, UK",
    },
  ],
  screams: [
    {
      userHandle: "user",
      body: "This is the scream body",
      createdAt: "2020-06-29T10:32:38.800Z",
      likeCount: 5,
      commentCount: 2,
    },
  ],
  comments: [
    {
      userHandle: "user",
      screamId: "hh324jbhsdkfbi",
      body: "This is first comment",
      createdAt: "2020-06-29T10:32:38.800Z",
    },
  ],
  notifications: [
    {
      recipient: 'user',
      sender: 'John',
      read: 'true | false',
      screamId: 'hh324jbhsdkfbi',
      type: 'like | comment',
      createdAt: '2020-06-29T10:32:38.800Z'
    }
  ]
};

const userDetails = {
  // Redux data
  credentials: {
    userId: "0fuIsD9DdCgUGE7EaR6APYC7vHg2",
    email: "new4@email.com",
    handle: "new4",
    createdAt: "2020-07-07T13:39:16.141Z",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/socialape-8bac0.appspot.com/o/no-img.png?alt=media",
    bio: "Hello my name is user",
    website: "https://user.com",
    location: "London, UK",
  },
  likes: [
    {
      userHandle: "user",
      screamId: "hh324jbhsdkfbi",
    },
    {
      userHandle: "user",
      screamId: "hh324jbhsdkfbi",
    },
  ],
};
