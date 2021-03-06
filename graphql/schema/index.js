const { buildSchema } = require("graphql");
const { Upload } = require("graphql-upload");
const { adminType } = require("./adminSchema");
const { advertismentType } = require("./advertismentSchema");
const { appoinmentType } = require("./appoinmentSchema");
const { attendenceType } = require("./attendenceSchema");
const { covidType } = require("./covidSchema");
const { doctorType } = require("./doctorSchema");
const { hospitalType } = require("./hospitalSchema");
const { reviewType } = require("./reviewSchema");
const { staffType } = require("./staffSchema");
const { userType } = require("./userSchema");
const { feedbackType } = require("./feedbackSchema");
const { helpType } = require("./helpSchema");
const { notificationType } = require("./notificationSchema");

const schema = `

  ${adminType}
  ${doctorType}
  ${staffType}
  ${hospitalType}
  ${covidType}
  ${attendenceType}
  ${advertismentType}
  ${userType}
  ${appoinmentType}
  ${reviewType}
  ${feedbackType}
  ${helpType}
  ${notificationType}


  type RootQuery {
    adminProfile : Admin!
    viewFeedback : [Feedback!]!
    
    categorys: [Category!]!
    doctor: Doctor!
    doctorProfile : Doctor!
    slot(day:String!): Slot!
    attendenceLog:[Attendence!]
    
    newAppoinment:[Appoinment!]
    doctorAppoinment:[Appoinment!]
    appoinmentHistory :[Appoinment!]

    newCovidAppoinment:[CovidAppoinment!]
    doctorCovidAppoinment:[CovidAppoinment!]
    covidAppoinmentHistory :[CovidAppoinment!]

    review: [Review!]!
    helpAndSupport: [HelpSupport!]!

    
    hospitalDetail: Hospital!
    covidDetail: CovidCenter!

    
    staffProfile(staffId:String) : Staff!
    staffs : [Staff!]
    
    userProfile : User!
    myAppoinment :[Appoinment!]
    myCovidAppoinment :[CovidAppoinment!]

    notification : [Notification!]
    
    adminlogin(username: String! , password: String! ): AdminAuthData!
    doctorlogin(username: String! , password: String! ): DoctorAuthData!
    userlogin(username: String! , password: String! ): UserAuthData!

  }
    
  type RootMutation {
    
    uploadImage(file: Upload!): File!

    updateAdmin(name: String , password: String): Admin!
    createHelp(user:String! , question:String! , answer:String!): HelpSupport!
    updateHelp(helpId:String! , user:String! , question:String! , answer:String!): HelpSupport!
    deleteHelp(user:String! , question:String! , answer:String!): Boolean!
    createCategory(name: String!): Category!

    createAdvertisment(advertismentInput: AdvertismentInput): Advertisment!
    createAdvertismentPhoto(advertismentPhotoInput: AdvertismentPhotoInput): AdvertismentPhoto!
    
    changePassword(oldpassword: String! , newpassword: String!):Boolean!
    forgotPassword(phone: String! , newpassword: String!):Boolean!

    
    createDoctor(doctorInput: DoctorInput): Doctor!
    createStaff(staffInput: StaffInput): Staff!
    updateDoctor(updateDoctorInput: UpdateDoctor):Doctor!
    updateDoctorStaff(updateStaff: UpdateStaff , staffId:String):Staff!
    updateSlot(slot:[String]! , day: String!):Slot!
    deleteStaff(staffId: String):Boolean!

    updateHospital(updateHospital: HospitalInput):Hospital!
    updateCovidCenter(updateCovidCenterInput: CovidCenterInput):CovidCenter!
    updateCovidStatus(status: String!):Boolean!

    attendence(status:String!): Attendence!
    
    createCovidAppoinment(appoinmentInput: CovidAppoinmentInput): Boolean!
    cancleCovidAppoinment(appoinmentId:String!,status:String!):Boolean!
    covidAppoinmentAccept(appoinmentId:String!,status:String!):Boolean!
    covidAppoinmentVisit(appoinmentId:String!,status:String!):Boolean!

    createAppoinment(appoinmentInput: AppoinmentInput): Boolean!
    cancleAppoinment(appoinmentId:String!,status:String!):Boolean!
    appoinmentAccept(appoinmentId:String!,status:String!):Boolean!
    appoinmentVisit(appoinmentId:String!,status:String!):Boolean!

    createReview(reviewInput: ReviewInput): Review!
    createUser(userInput: UserInput): User!

    feedback(feedback:String! , rating:Float!):Boolean!
    
    
  }
    
  schema {
      query: RootQuery
      mutation: RootMutation
  }
`;

module.exports = buildSchema(schema);
