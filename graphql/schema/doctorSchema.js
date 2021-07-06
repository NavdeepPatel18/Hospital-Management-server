const doctorType = `
type Doctor{
  _id: ID!
  name: String!
  education: String
  experience: Int
  city: String
  email: String!
  password: String
  category: Category
  phone: String!
  createdAt: String!
  updatedAt: String!
}

type DoctorAuthData{
  userId: ID!
  token: String!
}

input DoctorInput {
  name: String!
  city: String!
  email: String!
  password: String
  phone: String!
}

`;

exports.doctorType = doctorType;