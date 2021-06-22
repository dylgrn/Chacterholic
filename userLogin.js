var databaseId = "your_database_id";
var username = request.get("username");
var password = request.get("password");

var userLoginInfo = DatabaseUser.login(databaseId, username, password);

var user = DatabaseUser.retrieve(databaseId, userLoginInfo._id, "to_userProfile", userLoginInfo.sessionToken);

response.success(user, "application/json");
