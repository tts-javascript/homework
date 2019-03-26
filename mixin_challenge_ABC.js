var userProfile = {
  fullName: 'Unknown',
  address: 'Unknown',
  city: 'Unknown',
  state: 'Unknown',
  zipcode: 'Unknown',
  avatar: 'Unknown'
}

function getProfileUpdate(name, username) {
  console.log("Please fill-in your name and avatar username")
  return Object.assign({}, userProfile, {
    fullName: name,
    avatar: username
  })
}

let newUser = getProfileUpdate("Jimminy Christmas", "JimChrist")
console.log(newUser)

function updateProfile(obj, vals) {
  return Object.assign(obj, vals)
}

var defaultUser = {
  fullName: 'Muhammad Ali',
  address: '77 Greatest Lane',
  city: 'Louisville',
  state: 'Kentucky',
  zipcode: '40211',
  avatar: 'TheGreatest'
}

let newestUser = updateProfile(newUser, defaultUser)
console.log(newestUser)
