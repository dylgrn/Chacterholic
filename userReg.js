
// var databaseId = "your_database_id";
// var username = request.get("username");
// var password = request.get("password");
// var email = request.get("email");
// var country = request.get("country");

// // create user
// var userLoginInfo = DatabaseUser.signUp(databaseId, {
//     "username": username,
//     "password": password
// });

// // create UserProfile
// var userProfileInfo = Collection.createObject(databaseId, "UserProfile", { "email": email, "country": country });

// // link
// DatabaseUser.update(databaseId, userLoginInfo._id, { "to_userProfile": { "collName": "UserProfile", "_id": userProfileInfo._id } }, userLoginInfo.sessionToken);

// var user = { "username": username, "email": email, "country": country };

// response.success(user, "application/json");